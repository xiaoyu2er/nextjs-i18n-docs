import { expect, test } from '@playwright/test';
import { getRoutesByType } from './utils/static-routes';

test.describe('Static routes', () => {
  const routes = getRoutesByType();

  // biome-ignore lint/complexity/noForEach: <explanation>
  Object.entries(routes).forEach(([type, sampleRoutes]) => {
    test.describe(type, () => {
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
  });
});
