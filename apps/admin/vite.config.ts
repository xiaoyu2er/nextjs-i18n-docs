import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    port: 3457,
    proxy: {
      '/api': 'http://localhost:3456',
    },
  },
});
