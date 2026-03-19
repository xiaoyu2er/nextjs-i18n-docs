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
    'node:fs',
    'node:fs/promises',
    'node:path',
    'node:crypto',
  ],
  platform: 'node',
  target: 'node20',
});
