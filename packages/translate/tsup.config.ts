import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/batch.pipeline.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: [
    'openai',
    'better-sqlite3',
    'bun:sqlite',
    'node:fs',
    'node:fs/promises',
    'node:path',
    'node:crypto',
  ],
  platform: 'node',
  target: 'node20',
});
