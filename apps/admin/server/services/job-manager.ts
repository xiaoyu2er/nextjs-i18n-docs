import { type ChildProcess, spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { VERSIONS } from './status';

const PROJECT_ROOT = resolve(import.meta.dir, '../../../..');

export interface Job {
  id: string;
  lang: string;
  version: string;
  status: 'running' | 'completed' | 'failed' | 'cancelled';
  startedAt: string;
  finishedAt?: string;
  pid?: number;
  max: number;
  concurrency: number;

  exitCode?: number | null;

  // Progress
  totalFiles: number; // total EN files
  toTranslate: number; // files that need translation in this run
  translatedFiles: number;
  errorFiles: number;
  currentFile?: string;

  // Log buffer (last N lines)
  logLines: string[];
}

export type JobEvent =
  | { type: 'progress'; data: Partial<Job> }
  | { type: 'log'; data: string }
  | { type: 'exit'; code: number | null };

class JobManager {
  private jobs = new Map<string, Job>();
  private processes = new Map<string, ChildProcess>();
  private subscribers = new Map<string, Set<(event: JobEvent) => void>>();
  private maxLogLines = 500;

  /** Start a new translation job */
  start(opts: {
    lang: string;
    version: string;
    max?: number;
    concurrency?: number;
    model?: string;
    modelRotate?: string[];
    md5?: boolean;
    files?: string[];
  }): Job {
    // Prevent duplicate jobs for same lang
    for (const [, job] of this.jobs) {
      if (
        job.lang === opts.lang &&
        job.version === opts.version &&
        job.status === 'running'
      ) {
        throw new Error(`Job already running for ${opts.lang}/${opts.version}`);
      }
    }

    const id = crypto.randomUUID();
    if (!VERSIONS.includes(opts.version as any))
      throw new Error(`Unknown version: ${opts.version}`);

    const docsRoot = `content/${opts.version}`;
    const outputDir = `.cache/content/${opts.version}`;

    const args = [
      'run',
      'packages/translate/src/batch.pipeline.ts',
      '--lang',
      opts.lang,
      '--docs-root',
      docsRoot,
      '--output-dir',
      outputDir,
      '--max',
      String(opts.max ?? 999),
      '--concurrency',
      String(opts.concurrency ?? 3),
    ];

    if (opts.md5) {
      args.push('--md5');
    }

    if (opts.modelRotate && opts.modelRotate.length > 0) {
      args.push('--model-rotate', opts.modelRotate.join(','));
    } else if (opts.model) {
      args.push('--model', opts.model);
    }

    // Pass specific files to translate
    if (opts.files && opts.files.length > 0) {
      args.push('--files', opts.files.join(','));
    }

    const proc = spawn('bun', args, {
      cwd: PROJECT_ROOT,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NO_TTY: '1', FORCE_COLOR: '0' },
    });

    const job: Job = {
      id,
      lang: opts.lang,
      version: opts.version,
      status: 'running',
      startedAt: new Date().toISOString(),
      pid: proc.pid,
      max: opts.max ?? 999,
      concurrency: opts.concurrency ?? 3,
      totalFiles: 0,
      toTranslate: 0,
      translatedFiles: 0,
      errorFiles: 0,
      logLines: [],
    };

    this.jobs.set(id, job);
    this.processes.set(id, proc);

    // Parse stdout
    let stdoutBuf = '';
    proc.stdout?.on('data', (chunk: Buffer) => {
      stdoutBuf += chunk.toString();
      const lines = stdoutBuf.split('\n');
      stdoutBuf = lines.pop() ?? '';
      for (const line of lines) {
        if (line.trim()) {
          this.processLine(id, line);
        }
      }
    });

    proc.stderr?.on('data', (chunk: Buffer) => {
      const text = chunk.toString().trim();
      if (text) {
        this.addLog(id, `[stderr] ${text}`);
        this.emit(id, { type: 'log', data: `[stderr] ${text}` });
      }
    });

    proc.on('exit', (code) => {
      job.exitCode = code;
      job.currentFile = undefined;
      this.processes.delete(id);

      if (code === 0) {
        // Run assemble + prepare-content for the translated version/lang
        this.addLog(id, '📦 Assembling translations...');
        job.currentFile = 'assembling...';
        this.runPostTranslate(id, job, opts.version, opts.lang);
      } else {
        job.status = 'failed';
        job.finishedAt = new Date().toISOString();
        this.addLog(id, `Process exited with code ${code}`);
        this.emit(id, { type: 'exit', code });
      }
    });

    proc.on('error', (err) => {
      job.status = 'failed';
      job.finishedAt = new Date().toISOString();
      this.addLog(id, `Process error: ${err.message}`);
      this.processes.delete(id);
      this.emit(id, { type: 'exit', code: -1 });
    });

    return job;
  }

  /** Cancel a running job */
  cancel(id: string): boolean {
    const proc = this.processes.get(id);
    const job = this.jobs.get(id);
    if (!proc || !job) return false;

    proc.kill('SIGTERM');
    job.status = 'cancelled';
    job.finishedAt = new Date().toISOString();
    this.processes.delete(id);
    this.emit(id, { type: 'exit', code: null });
    return true;
  }

  /** Run assemble + prepare-content after successful translation */
  private runPostTranslate(
    id: string,
    job: Job,
    version: string,
    lang: string,
  ): void {
    const assemble = spawn(
      'bun',
      [
        'scripts/assemble-translations.ts',
        '--version',
        version,
        '--lang',
        lang,
      ],
      {
        cwd: PROJECT_ROOT,
        stdio: ['ignore', 'pipe', 'pipe'],
      },
    );

    assemble.stdout?.on('data', (d: Buffer) => {
      for (const line of d.toString().split('\n').filter(Boolean)) {
        this.addLog(id, line);
      }
    });
    assemble.stderr?.on('data', (d: Buffer) => {
      for (const line of d.toString().split('\n').filter(Boolean)) {
        this.addLog(id, line);
      }
    });

    assemble.on('exit', (assembleCode) => {
      if (assembleCode !== 0) {
        this.addLog(id, `⚠️ Assemble failed (code ${assembleCode})`);
        job.status = 'failed';
        job.finishedAt = new Date().toISOString();
        this.emit(id, { type: 'exit', code: assembleCode });
        return;
      }

      this.addLog(id, '🔧 Running prepare-content...');
      job.currentFile = 'preparing content...';
      const prepArgs = ['scripts/prepare-content.ts', '--target'];
      if (version === 'latest') {
        prepArgs.push('apps/web');
      } else {
        prepArgs.push('apps/web-v', '--version', version.replace('v', ''));
      }
      const prepare = spawn('bun', prepArgs, {
        cwd: PROJECT_ROOT,
        stdio: ['ignore', 'pipe', 'pipe'],
      });

      prepare.stdout?.on('data', (d: Buffer) => {
        for (const line of d.toString().split('\n').filter(Boolean)) {
          this.addLog(id, line);
        }
      });
      prepare.stderr?.on('data', (d: Buffer) => {
        for (const line of d.toString().split('\n').filter(Boolean)) {
          this.addLog(id, line);
        }
      });

      prepare.on('exit', (prepCode) => {
        job.status = prepCode === 0 ? 'completed' : 'failed';
        job.exitCode = prepCode;
        job.finishedAt = new Date().toISOString();
        job.currentFile = undefined;
        this.addLog(
          id,
          prepCode === 0
            ? '✅ Translation + assemble + prepare complete'
            : `⚠️ Prepare-content failed (code ${prepCode})`,
        );
        this.emit(id, { type: 'exit', code: prepCode });
      });
    });
  }

  /** Get all jobs */
  list(): Job[] {
    return [...this.jobs.values()].sort(
      (a, b) =>
        new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime(),
    );
  }

  /** Get a single job */
  get(id: string): Job | undefined {
    return this.jobs.get(id);
  }

  /** Remove a finished job from the list */
  remove(id: string): boolean {
    const job = this.jobs.get(id);
    if (!job || job.status === 'running') return false;
    this.jobs.delete(id);
    this.subscribers.delete(id);
    return true;
  }

  /** Subscribe to job events (for SSE) */
  subscribe(id: string, callback: (event: JobEvent) => void): () => void {
    if (!this.subscribers.has(id)) {
      this.subscribers.set(id, new Set());
    }
    this.subscribers.get(id)?.add(callback);
    return () => {
      this.subscribers.get(id)?.delete(callback);
    };
  }

  // ── Internal ──

  private emit(id: string, event: JobEvent): void {
    const subs = this.subscribers.get(id);
    if (subs) {
      for (const cb of subs) cb(event);
    }
  }

  private addLog(id: string, line: string): void {
    const job = this.jobs.get(id);
    if (!job) return;
    job.logLines.push(line);
    if (job.logLines.length > this.maxLogLines) {
      job.logLines.shift();
    }
  }

  private processLine(id: string, line: string): void {
    const job = this.jobs.get(id);
    if (!job) return;

    this.addLog(id, line);
    this.emit(id, { type: 'log', data: line });

    // Parse progress from pipeline output
    // "Files: 563 total"
    const filesMatch = line.match(/Files:\s+(\d+)\s+total/);
    if (filesMatch) {
      job.totalFiles = Number.parseInt(filesMatch[1], 10);
    }

    if (line.includes('fully cached')) {
      const m = line.match(/(\d+) fully cached, (\d+) need translation/);
      if (m) {
        job.toTranslate = Number.parseInt(m[2], 10);
        this.emit(id, { type: 'progress', data: { ...job } });
      }
    } else if (line.startsWith('⏳') || line.includes('uncached')) {
      const m = line.match(/⏳\s+(.+?)\s+\(/);
      if (m) {
        job.currentFile = m[1];
        this.emit(id, { type: 'progress', data: { currentFile: m[1] } });
      }
    } else if (line.startsWith('✅')) {
      job.translatedFiles++;
      const m = line.match(/✅\s+(.+?)\s/);
      if (m) job.currentFile = m[1];
      this.emit(id, {
        type: 'progress',
        data: { translatedFiles: job.translatedFiles, currentFile: m?.[1] },
      });
    } else if (line.startsWith('❌')) {
      job.errorFiles++;
      this.emit(id, {
        type: 'progress',
        data: { errorFiles: job.errorFiles },
      });
    }
  }
}

export const jobManager = new JobManager();
