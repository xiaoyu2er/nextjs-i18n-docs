/**
 * Start all workers + router proxy with a single command.
 * Usage: bun run dev-all.ts [--only latest,v13]
 *
 * For versioned workers (v13/v14/v15), creates temporary copies of apps/web-v
 * at .cache/web-v{N}/ so each version has its own isolated content directory.
 */

import { spawn, spawnSync, type Subprocess } from 'bun';
import { resolve } from 'node:path';
import { cpSync, rmSync, existsSync, mkdirSync, readdirSync, symlinkSync, lstatSync, readlinkSync } from 'node:fs';
import { relative } from 'node:path';

const ROOT = resolve(import.meta.dirname!, '../..');

// Read versions from single source of truth
const versionsFile = resolve(ROOT, '.github/nextjs-versions.json');
const versionsData = JSON.parse(await Bun.file(versionsFile).text());
const latestMajor = versionsData.latestMajor;
const olderVersions = Object.keys(versionsData.versions).filter((v) => v !== latestMajor);

interface Worker {
  name: string;
  dir: string;
  port: number;
  color: string;
  env?: Record<string, string>;
}

const COLORS = ['\x1b[33m', '\x1b[35m', '\x1b[32m', '\x1b[34m'];

const ALL_WORKERS: Worker[] = [
  { name: 'latest', dir: 'apps/web', port: 4321, color: '\x1b[36m' },
  ...olderVersions.map((v, i) => ({
    name: `v${v}`,
    dir: `apps/web-v`, // will be replaced with temp dir
    port: 4322 + i,
    color: COLORS[i % COLORS.length],
    env: { VERSION: v },
  })),
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

// ── Phase 1: Create isolated copies for versioned workers ──
// apps/web-v is a shared template. Each version needs its own copy
// at .cache/web-v{N}/ with symlinks to node_modules and shared packages.

const webVDir = resolve(ROOT, 'apps/web-v');

for (const w of workers) {
  const version = w.env?.VERSION;
  if (!version) continue;

  const tmpDir = resolve(ROOT, `.cache/web-v${version}`);
  console.log(`${w.color}[${w.name}]${RESET} Creating isolated copy at .cache/web-v${version}/...`);

  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(tmpDir, { recursive: true });

  // Copy source files (astro.config, package.json, src/, tsconfig, etc.)
  // but symlink node_modules and heavy dirs
  for (const entry of readdirSync(webVDir)) {
    const src = resolve(webVDir, entry);
    const dst = resolve(tmpDir, entry);
    const stat = lstatSync(src);

    if (entry === 'node_modules' || entry === '.astro' || entry === 'dist') {
      // Symlink large/generated dirs
      symlinkSync(src, dst);
    } else if (entry === 'src') {
      // Deep copy src/ so each version has its own content dir
      cpSync(src, dst, { recursive: true });
    } else if (stat.isDirectory()) {
      cpSync(src, dst, { recursive: true });
    } else if (stat.isSymbolicLink()) {
      // Preserve symlinks (e.g., src/components → packages/shared)
      const target = resolve(webVDir, readlinkSync(src));
      const relTarget = relative(tmpDir, target);
      symlinkSync(relTarget, dst);
    } else {
      cpSync(src, dst);
    }
  }

  // Also symlink node_modules from root if the app uses workspace deps
  if (!existsSync(resolve(tmpDir, 'node_modules'))) {
    symlinkSync(resolve(ROOT, 'node_modules'), resolve(tmpDir, 'node_modules'));
  }

  // Update worker dir to point to the temp copy
  w.dir = `.cache/web-v${version}`;
}

// ── Phase 2: Prepare content SEQUENTIALLY ──
// For versioned workers, use --target pointing to the temp dir
// For latest, use --target apps/web (as usual)
console.log(`\n${CYAN}[prep]${RESET} Preparing content for all workers...`);

for (const w of workers) {
  const version = w.env?.VERSION;
  const target = w.dir; // e.g., 'apps/web' or '.cache/web-v13'
  const args = version
    ? ['bun', 'run', 'scripts/prepare-content.ts', '--target', target, '--version', version]
    : ['bun', 'run', 'scripts/prepare-content.ts', '--target', target];

  console.log(`${w.color}[${w.name}]${RESET} Preparing content (--target ${target})...`);
  const result = spawnSync(args, {
    cwd: ROOT,
    env: { ...process.env, ...w.env },
    stdout: 'pipe',
    stderr: 'pipe',
  });
  if (result.exitCode !== 0) {
    console.error(`${w.color}[${w.name}]${RESET} prepare-content failed:`);
    console.error(new TextDecoder().decode(result.stderr));
  } else {
    const output = new TextDecoder().decode(result.stdout).trim();
    const lastLine = output.split('\n').pop() || '';
    console.log(`${w.color}[${w.name}]${RESET} ${lastLine}`);
  }
}

console.log(`${CYAN}[prep]${RESET} Content ready.\n`);

// ── Phase 3: Start dev servers ──
for (const w of workers) {
  console.log(`${w.color}[${w.name}]${RESET} Starting on :${w.port}...`);

  const proc = spawn(['bunx', 'astro', 'dev', '--port', String(w.port)], {
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
