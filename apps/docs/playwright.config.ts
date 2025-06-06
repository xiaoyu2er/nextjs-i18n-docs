import env from '@next/env';
import { defineConfig, devices } from '@playwright/test';
env.loadEnvConfig(process.cwd());

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:7878',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm start --port 7878',
    url: 'http://localhost:7878',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
