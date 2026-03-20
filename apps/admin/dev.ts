#!/usr/bin/env bun
/**
 * Start both API server and Vite dev server concurrently.
 */
import { spawn } from 'node:child_process';
import { resolve } from 'node:path';

const cwd = resolve(import.meta.dirname!, '.');

// Start API server
const api = spawn('bun', ['run', '--bun', 'server/index.ts'], {
  cwd,
  stdio: 'inherit',
});

// Start Vite dev server (use npx to resolve correctly under bun)
const vite = spawn(
  'node',
  [resolve(cwd, 'node_modules/vite/bin/vite.js'), '--port', '3457'],
  {
    cwd,
    stdio: 'inherit',
  },
);

// Clean exit
function cleanup() {
  api.kill();
  vite.kill();
  process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

// If either exits, kill the other
api.on('exit', () => {
  vite.kill();
  process.exit();
});
vite.on('exit', () => {
  api.kill();
  process.exit();
});
