import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import { jobManager } from '../services/job-manager';

const app = new Hono();

/** GET /api/jobs — List all jobs */
app.get('/', (c) => {
  return c.json(
    jobManager.list().map((j) => ({
      ...j,
      logLines: j.logLines.slice(-20), // Last 20 lines in list view
    })),
  );
});

/** POST /api/jobs — Start a new translation job */
app.post('/', async (c) => {
  const body = await c.req.json<{
    lang: string;
    version: string;
    max?: number;
    concurrency?: number;
  }>();

  if (!body.lang || !body.version) {
    return c.json({ error: 'Missing lang or version' }, 400);
  }

  try {
    const job = jobManager.start(body);
    return c.json(job, 201);
  } catch (err) {
    return c.json(
      { error: err instanceof Error ? err.message : 'Unknown error' },
      409,
    );
  }
});

/** GET /api/jobs/:id — Get job details */
app.get('/:id', (c) => {
  const job = jobManager.get(c.req.param('id'));
  if (!job) return c.json({ error: 'Job not found' }, 404);
  return c.json(job);
});

/** DELETE /api/jobs/:id — Cancel a running job or remove a finished one */
app.delete('/:id', (c) => {
  const id = c.req.param('id');
  const job = jobManager.get(id);
  if (!job) return c.json({ error: 'Job not found' }, 404);

  if (job.status === 'running') {
    jobManager.cancel(id);
  } else {
    jobManager.remove(id);
  }
  return c.json({ ok: true });
});

/** GET /api/jobs/:id/stream — SSE stream of job events */
app.get('/:id/stream', (c) => {
  const id = c.req.param('id');
  const job = jobManager.get(id);
  if (!job) return c.json({ error: 'Job not found' }, 404);

  return streamSSE(c, async (stream) => {
    // Send current state
    await stream.writeSSE({
      data: JSON.stringify({
        type: 'state',
        data: { ...job, logLines: job.logLines.slice(-50) },
      }),
      event: 'message',
    });

    // Subscribe to future events
    const unsubscribe = jobManager.subscribe(id, async (event) => {
      try {
        await stream.writeSSE({
          data: JSON.stringify(event),
          event: 'message',
        });
      } catch {
        // Client disconnected
        unsubscribe();
      }
    });

    // Keep alive until client disconnects or job ends
    while (true) {
      const currentJob = jobManager.get(id);
      if (!currentJob || currentJob.status !== 'running') {
        // Send final state
        await stream.writeSSE({
          data: JSON.stringify({ type: 'done', data: currentJob }),
          event: 'message',
        });
        break;
      }
      await stream.sleep(1000);
    }

    unsubscribe();
  });
});

export default app;
