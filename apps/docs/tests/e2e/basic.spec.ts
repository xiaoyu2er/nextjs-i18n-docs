import { expect, test } from '@playwright/test';
import { setupLocale } from './utils/locale';

test.describe('Basic Route Tests', async () => {
  test('homepage loads successfully', async ({ page }) => {
    const { locale, messages } = await setupLocale();

    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();

    // Verify page meta title matches message meta title
    await expect(page).toHaveTitle(messages.meta.title);
  });

  test('blog page loads successfully', async ({ page }) => {
    const response = await page.goto('/blog');
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  });

  test('learn page loads successfully', async ({ page }) => {
    const response = await page.goto('/learn');
    expect(response?.status()).toBe(200);
    await expect(page.locator('body')).toBeVisible();
  });
});
