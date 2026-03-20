import { createServer } from 'node:http';
import { resolve } from 'node:path';
import { Hono } from 'hono';
import { createServer as createViteServer } from 'vite';
import jobRoutes from './routes/jobs';
import modelRoutes from './routes/models';
import statusRoutes from './routes/status';

const app = new Hono();
app.route('/api/status', statusRoutes);
app.route('/api/jobs', jobRoutes);
app.route('/api/models', modelRoutes);
app.get('/api/health', (c) => c.json({ ok: true }));

const adminRoot = resolve(import.meta.dirname, '..');
const port = Number(process.env.PORT) || 3456;

const vite = await createViteServer({
  root: adminRoot,
  server: { middlewareMode: true },
  appType: 'spa',
});

const server = createServer(async (req, res) => {
  const url = req.url ?? '/';

  // /api → Hono
  if (url.startsWith('/api')) {
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (v) headers.set(k, Array.isArray(v) ? v.join(', ') : v);
    }
    const webReq = new Request(`http://localhost:${port}${url}`, {
      method: req.method,
      headers,
      body:
        req.method !== 'GET' && req.method !== 'HEAD'
          ? await new Promise<Buffer>((r) => {
              const chunks: Buffer[] = [];
              req.on('data', (c: Buffer) => chunks.push(c));
              req.on('end', () => r(Buffer.concat(chunks)));
            })
          : undefined,
    });
    const webRes = await app.fetch(webReq);

    res.writeHead(webRes.status, Object.fromEntries(webRes.headers.entries()));
    const body = await webRes.arrayBuffer();
    res.end(Buffer.from(body));
    return;
  }

  // Everything else → Vite (React SPA + HMR)
  vite.middlewares(req, res);
});

server.listen(port, () => {
  console.log(`🌐 Translation Admin → http://localhost:${port}`);
});
