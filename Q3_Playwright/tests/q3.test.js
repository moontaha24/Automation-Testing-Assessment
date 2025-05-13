import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('Q3: Full user journey with performance_glitch_user', async ({ page }) => {

  test.setTimeout(120 * 1000); // Set test timeout to 2 minutes

  await allure.step('1. Login with performance_glitch_user', async () => {
    await page.goto('/');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.waitForURL(/inventory/);
    await page.waitForLoadState('load');
  });

  await allure.step('2. Reset App State', async () => {
    await page.click('#react-burger-menu-btn');
    const resetButton = page.locator('[data-test="reset-sidebar-link"]');
    await resetButton.waitFor({ state: 'visible', timeout: 60000 });
    await resetButton.click();
    await page.waitForTimeout(1000);
    await page.click('#react-burger-cross-btn');
    await page.waitForURL(/inventory/, { timeout: 10000 });
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
  });

  await allure.step('3. Filter products Z to A', async () => {
    const sortDropdown = page.locator('[data-test="product-sort-container"]');
    await expect(sortDropdown).toBeVisible({ timeout: 70000 });
    await sortDropdown.selectOption('za');
  });

  await allure.step('4. Add first product to cart', async () => {
    const firstAddToCart = page.locator('.inventory_item button').first();
    await firstAddToCart.click();
    await page.waitForTimeout(1000);
  });

  await allure.step('5. Checkout: Verify cart and fill Step One info', async () => {
    await page.click('.shopping_cart_link');
    await page.waitForTimeout(1000);

    const cartItems = page.locator('.cart_item');
    await cartItems.waitFor({ state: 'visible', timeout: 5000 });
    await expect(cartItems).toHaveCount(1);
    await page.waitForTimeout(1000);

    await page.click('[data-test="checkout"]');
    await page.waitForURL(/checkout-step-one/);
    await page.fill('[data-test="firstName"]', 'Moontaha');
    await page.fill('[data-test="lastName"]', 'Test');
    await page.fill('[data-test="postalCode"]', '1234');
    await page.click('[data-test="continue"]');
    await page.waitForTimeout(1000);
  });

  await allure.step('6. Validate product names and total price', async () => {
    const itemNames = await page.locator('.inventory_item_name');
    await expect(itemNames).toHaveCount(1);
    await page.waitForTimeout(1000);

    const total = await page.locator('.summary_total_label');
    await expect(total).toContainText('$');
    await page.waitForTimeout(1000);
  });

  await allure.step('7. Finish purchase and logout', async () => {
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await page.waitForTimeout(1000);

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('/');
    await page.waitForTimeout(1000);
  });

});
