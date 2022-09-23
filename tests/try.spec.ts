import { test, expect } from '@playwright/test';

test.beforeEach (async ({ page }) => {
  await page.goto('https://staffpranos.staffbase.com/content/page/5e3c0a7dbfa7f253bfa095f8');
  await page.locator('text=Welcome to Staffbase!').click();
});

test('test', async ({ page }) => {
  test.slow()

  await expect(page).toHaveTitle("Home - Stuffbase");
  //await page.locator('.ui-commons__portfolio-widget__panel-title >> #Offices').hover();
  await page.locator('div[role="main"] >> text=Offices').hover()
  await expect(page.locator('div[role="main"] >> text=Offices')).toHaveText('Offices')
  await (page).locator('[data-plugin-type="news"]').click();
  await (page).locator('a[class="internal-link feed-post-channel-link clickable ally-focus-within"]:has-text("Updates")');
 


});


