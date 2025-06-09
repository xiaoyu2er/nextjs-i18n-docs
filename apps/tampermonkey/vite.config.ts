import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Read Tampermonkey config for banner (already includes ==UserScript== markers)
const banner = readFileSync(resolve(__dirname, 'tampermonkey.config'), 'utf-8');

export default defineConfig(({ mode }) => ({
  plugins: [
    {
      name: 'tampermonkey-banner',
      generateBundle(options, bundle) {
        // Add banner to all JS files in the bundle
        for (const fileName of Object.keys(bundle)) {
          if (fileName.endsWith('.js')) {
            const file = bundle[fileName];
            if (file.type === 'chunk') {
              file.code = `${banner}\n\n${file.code}`;
            }
          }
        }
      },
    },
  ],
  server: {
    host: 'localhost',
    port: 6419,
  },
  build: {
    minify: false,
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'script',
      fileName: 'script',
      formats: ['iife'],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    watch: mode === 'development' ? {} : undefined,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@/*': resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development',
    ),
  },
}));
