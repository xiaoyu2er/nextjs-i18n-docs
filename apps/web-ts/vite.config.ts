import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from 'fumadocs-mdx/vite';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    mdx(await import('./source.config')),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        concurrency: 4,
        failOnError: false,
        filter: ({ path }) => path.startsWith('/docs/'),
      },
      pages: [
        { path: '/docs/app/getting-started/installation' },
      ],
    }),
    react(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
});
