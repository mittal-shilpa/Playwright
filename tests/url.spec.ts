import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.google.com/
  await page.goto('https://www.google.com/');

  // Click button:has-text("Hyväksy kaikki")

  await page.locator('button:has-text("Hyväksy kaikki")').click();
  await expect(page).toHaveURL('https://www.google.com/');


});

