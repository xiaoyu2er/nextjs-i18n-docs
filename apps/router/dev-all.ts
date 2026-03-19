/**
 * Start all workers + router proxy with a single command.
 * Usage:
 *   bun run dev-all.ts              # latest only (fast, ~5s)
 *   bun run dev-all.ts --all        # all workers
 *   bun run dev-all.ts --only=v14   # specific workers
 *
 * Versioned workers use cached copies at .cache/web-v{N}/.
 * The .astro cache is preserved between runs for fast restarts.
 */

import { spawn, spawnSync, type Subprocess } from 'bun';
import { resolve } from 'node:path';
import {
  cpSync,
  rmSync,
  existsSync,
  mkdirSync,
  readdirSync,
  symlinkSync,
  lstatSync,
} from 'node:fs';
import { execSync } from 'node:child_process';

const ROOT = resolve(import.meta.dirname!, '../..');
const versionsFile = resolve(ROOT, '.github/nextjs-versions.json');
const versionsData = JSON.parse(await Bun.file(versionsFile).text());
const latestMajor = versionsData.latestMajor;
const olderVersions = Object.keys(versionsData.versions).filter(
  (v) => v !== latestMajor,
);

interface Worker {
  name: string;
  dir: string;
  port: number;
  color: string;
  env?: Record<string, string>;
}

const COLORS = ['\x1b[33m', '\x1b[35m', '\x1b[32m', '\x1b[34m'];
const RESET = '\x1b[0m';
const CYAN = '\x1b[36m';
const DIM = '\x1b[2m';

const ALL_WORKERS: Worker[] = [
  { name: 'latest', dir: 'apps/web', port: 4321, color: '\x1b[36m' },
  ...olderVersions.map((v, i) => ({
    name: `v${v}`,
    dir: 'apps/web-v',
    port: 4322 + i,
    color: COLORS[i % COLORS.length],
    env: { VERSION: v },
  })),
];

// ── Parse args ──
const args = process.argv.slice(2);
const hasAll = args.includes('--all');
const onlyArg =
  args.find((a) => a.startsWith('--only='))?.split('=')[1] ||
  (args.indexOf('--only') >= 0 ? args[args.indexOf('--only') + 1] : null);

let workers: Worker[];
if (hasAll) {
  workers = ALL_WORKERS;
} else if (onlyArg) {
  const onlySet = new Set(onlyArg.split(','));
  workers = ALL_WORKERS.filter((w) => onlySet.has(w.name));
} else {
  // Default: latest only (fast dev)
  workers = ALL_WORKERS.filter((w) => w.name === 'latest');
  console.log(
    `${DIM}Tip: use --all for all versions, or --only=v14,v15${RESET}\n`,
  );
}

if (workers.length === 0) {
  console.error('No workers matched. Available: latest, v13, v14, v15');
  process.exit(1);
}

// ── Free ports ──
function freePort(port: number) {
  try {
    const pids = execSync(`lsof -ti :${port} 2>/dev/null`).toString().trim();
    if (pids) {
      for (const pid of pids.split('\n')) {
        try {
          process.kill(Number(pid), 9);
        } catch {}
      }
    }
  } catch {}
}

const allPorts = [3000, ...workers.map((w) => w.port)];
for (const port of allPorts) freePort(port);

// ── Create/update versioned worker copies ──
const webVDir = resolve(ROOT, 'apps/web-v');

for (const w of workers) {
  const version = w.env?.VERSION;
  if (!version) continue;

  const tmpDir = resolve(ROOT, `.cache/web-v${version}`);
  const hasCachedDir = existsSync(resolve(tmpDir, 'src'));

  if (hasCachedDir) {
    // Reuse cached copy — only update src/content/docs
    console.log(
      `${w.color}[${w.name}]${RESET} Reusing cached .cache/web-v${version}/`,
    );
  } else {
    // First run: create fresh copy
    console.log(
      `${w.color}[${w.name}]${RESET} Creating .cache/web-v${version}/...`,
    );
    rmSync(tmpDir, { recursive: true, force: true });
    mkdirSync(tmpDir, { recursive: true });

    for (const entry of readdirSync(webVDir)) {
      const src = resolve(webVDir, entry);
      const dst = resolve(tmpDir, entry);
      const stat = lstatSync(src);

      if (entry === 'node_modules' || entry === 'dist') {
        symlinkSync(src, dst);
      } else if (entry === '.astro') {
      } else if (entry === 'src') {
        cpSync(src, dst, { recursive: true });
      } else if (stat.isDirectory()) {
        cpSync(src, dst, { recursive: true });
      } else {
        cpSync(src, dst);
      }
    }

    if (!existsSync(resolve(tmpDir, 'node_modules'))) {
      symlinkSync(
        resolve(ROOT, 'node_modules'),
        resolve(tmpDir, 'node_modules'),
      );
    }
  }

  w.dir = `.cache/web-v${version}`;
}

// ── Prepare content (only if needed) ──
console.log(`\n${CYAN}[prep]${RESET} Preparing content...`);

for (const w of workers) {
  const version = w.env?.VERSION;
  const target = w.dir;
  const contentDir = resolve(ROOT, target, 'src/content/docs');

  // Skip if content already exists and source hasn't changed
  const hasContent =
    existsSync(contentDir) && readdirSync(contentDir).length > 2;
  if (hasContent) {
    const count = readdirSync(contentDir, { recursive: true }).length;
    console.log(
      `${w.color}[${w.name}]${RESET} Content exists (${count} entries), skipping prepare`,
    );
    continue;
  }

  const prepArgs = version
    ? [
        'bun',
        'run',
        'scripts/prepare-content.ts',
        '--target',
        target,
        '--version',
        version,
      ]
    : ['bun', 'run', 'scripts/prepare-content.ts', '--target', target];

  console.log(`${w.color}[${w.name}]${RESET} Preparing content...`);
  const result = spawnSync(prepArgs, {
    cwd: ROOT,
    env: { ...process.env, ...w.env },
    stdout: 'pipe',
    stderr: 'pipe',
  });
  if (result.exitCode !== 0) {
    console.error(
      `${w.color}[${w.name}]${RESET} Failed:`,
      new TextDecoder().decode(result.stderr),
    );
  } else {
    const output = new TextDecoder().decode(result.stdout).trim();
    console.log(`${w.color}[${w.name}]${RESET} ${output.split('\n').pop()}`);
  }
}

// ── Start dev servers ──
const procs: Subprocess[] = [];

function prefixStream(
  stream: ReadableStream<Uint8Array>,
  prefix: string,
  color: string,
) {
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

console.log('');
for (const w of workers) {
  console.log(`${w.color}[${w.name}]${RESET} Starting on :${w.port}...`);

  const proc = spawn(
    ['bunx', '--bun', 'astro', 'dev', '--port', String(w.port)],
    {
      cwd: resolve(ROOT, w.dir),
      stdout: 'pipe',
      stderr: 'pipe',
      env: { ...process.env, ...w.env },
    },
  );

  prefixStream(proc.stdout, w.name, w.color);
  prefixStream(proc.stderr, w.name, w.color);
  procs.push(proc);
}

// ── Start router proxy ──
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

// ── Shutdown ──
process.on('SIGINT', () => {
  console.log('\nShutting down...');
  for (const p of procs) p.kill();
  process.exit(0);
});
process.on('SIGTERM', () => {
  for (const p of procs) p.kill();
  process.exit(0);
});

await new Promise(() => {});
