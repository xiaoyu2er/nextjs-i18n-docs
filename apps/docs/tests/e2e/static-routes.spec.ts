import { expect, test } from '@playwright/test';
import { getAllStaticRoutes } from './utils/static-routes';

test.describe('All routes should return 200', () => {
  const sampleRoutes = getAllStaticRoutes();

  // biome-ignore lint/complexity/noForEach: <explanation>
  sampleRoutes.forEach((route) => {
    test(`${route.url}`, async ({ page }) => {
      console.log(`Testing route: ${route.url}`);
      const response = await page.goto(route.url);
      expect(response?.status()).toBe(200);
      await expect(page.locator('body')).toBeVisible();
    });
  });
});
