import { test, expect } from '@playwright/test';

test.describe('Authentication and Workspace Shell E2E Journey', () => {
  const testEmail = `user-${Date.now()}@example.com`;
  const testPassword = 'Password123!';
  const testName = 'Ada Lovelace';

  test('should redirect to sign-in, allow sign-up, view dashboard, and sign out', async ({ page }) => {
    // 1. Visit main page and ensure redirect to sign-in
    await page.goto('/');
    await page.waitForURL('/sign-in');
    await expect(page).toHaveURL(/\/sign-in/);

    // 2. Go to sign-up page
    await page.click('text=Sign Up');
    await page.waitForURL('/sign-up');
    await expect(page).toHaveURL(/\/sign-up/);

    // 3. Perform Sign Up
    await page.fill('input#name', testName);
    await page.fill('input#email', testEmail);
    await page.fill('input#password', testPassword);
    await page.click('button[type="submit"]');

    // 4. Wait for redirect to home (Dashboard)
    await page.waitForURL('/');
    await expect(page).toHaveURL('/');

    // 5. Verify dark shell layout & elements
    await expect(page.locator('text=Welcome back, Ada')).toBeVisible();
    await expect(page.locator('text=0 Day Streak')).toBeVisible();
    await expect(page.locator('text=Today\'s Learning Focus')).toBeVisible();
    await expect(page.locator('aside')).toBeVisible();
    await expect(page.locator('header')).toBeVisible();

    // 6. Sign Out
    await page.click('text=Sign Out');
    await page.waitForURL('/sign-in');
    await expect(page).toHaveURL(/\/sign-in/);
  });
});
