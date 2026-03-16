/**
 * Start all workers + router proxy with a single command.
 * Usage: bun run dev-all.ts [--only latest,v13]
 */

import { spawn, type Subprocess } from 'bun';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname!, '../..');

interface Worker {
  name: string;
  dir: string;
  port: number;
  color: string;
  env?: Record<string, string>;
}

const ALL_WORKERS: Worker[] = [
  { name: 'latest', dir: 'apps/web', port: 4321, color: '\x1b[36m' },
  { name: 'v13', dir: 'apps/web-v', port: 4322, color: '\x1b[33m', env: { VERSION: '13' } },
  { name: 'v14', dir: 'apps/web-v', port: 4323, color: '\x1b[35m', env: { VERSION: '14' } },
  { name: 'v15', dir: 'apps/web-v', port: 4324, color: '\x1b[32m', env: { VERSION: '15' } },
];

const RESET = '\x1b[0m';
const CYAN = '\x1b[36m';

// Parse --only flag
const onlyArg = process.argv.find((a) => a.startsWith('--only='))?.split('=')[1];
const onlyIdx = process.argv.indexOf('--only');
const onlyVal = onlyArg || (onlyIdx >= 0 ? process.argv[onlyIdx + 1] : null);
const onlySet = onlyVal ? new Set(onlyVal.split(',')) : null;

const workers = onlySet
  ? ALL_WORKERS.filter((w) => onlySet.has(w.name))
  : ALL_WORKERS;

if (workers.length === 0) {
  console.error('No workers matched. Available: latest, v13, v14, v15');
  process.exit(1);
}

const procs: Subprocess[] = [];

function prefixStream(stream: ReadableStream<Uint8Array>, prefix: string, color: string) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  (async () => {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        console.log(`${color}[${prefix}]${RESET} ${line}`);
      }
    }
    if (buffer) console.log(`${color}[${prefix}]${RESET} ${buffer}`);
  })();
}

// Start each Astro worker
for (const w of workers) {
  console.log(`${w.color}[${w.name}]${RESET} Starting on :${w.port}...`);

  const proc = spawn(['bun', 'run', 'dev', '--', '--port', String(w.port)], {
    cwd: resolve(ROOT, w.dir),
    stdout: 'pipe',
    stderr: 'pipe',
    env: { ...process.env, ...w.env },
  });

  prefixStream(proc.stdout, w.name, w.color);
  prefixStream(proc.stderr, w.name, w.color);
  procs.push(proc);
}

// Wait for workers to be ready, then start proxy
await new Promise((r) => setTimeout(r, 2000));

console.log(`\n${CYAN}[router]${RESET} Starting proxy on :3000...`);

const routerProc = spawn(['bun', 'run', 'dev-proxy.ts'], {
  cwd: resolve(ROOT, 'apps/router'),
  stdout: 'pipe',
  stderr: 'pipe',
});

prefixStream(routerProc.stdout, 'router', CYAN);
prefixStream(routerProc.stderr, 'router', CYAN);
procs.push(routerProc);

// Handle shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down all workers...');
  for (const p of procs) p.kill();
  process.exit(0);
});
process.on('SIGTERM', () => {
  for (const p of procs) p.kill();
  process.exit(0);
});

// Keep alive
await new Promise(() => {});
