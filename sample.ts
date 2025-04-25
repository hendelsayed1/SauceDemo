import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Register Now!' }).click();
  await page.locator('#stripes--73634172').click();
  await page.locator('#stripes--73634172').fill('Hend9000900');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Test@123');
  await page.locator('input[name="password"]').press('Tab');
  await page.locator('input[name="repeatedPassword"]').fill('Test@123');
  await page.locator('input[name="account\\.firstName"]').click();
  await page.locator('input[name="account\\.firstName"]').fill('Hend_test');
  await page.locator('input[name="account\\.firstName"]').press('Tab');
  await page.locator('input[name="account\\.lastName"]').fill('Elsayed_test');
  await page.locator('input[name="account\\.email"]').click();
  await page.locator('input[name="account\\.email"]').fill('yyoiu0000@yopmail.com');
  await page.locator('input[name="account\\.phone"]').click();
  await page.locator('input[name="account\\.phone"]').fill('0501234567');
  await page.locator('input[name="account\\.address1"]').click();
  await page.locator('input[name="account\\.address1"]').fill('Dubai 123');
  await page.locator('input[name="account\\.city"]').click();
  await page.locator('input[name="account\\.city"]').fill('Dubai');
  await page.locator('input[name="account\\.state"]').click();
  await page.locator('input[name="account\\.state"]').fill('Dubai');
  await page.locator('input[name="account\\.zip"]').click();
  await page.locator('input[name="account\\.zip"]').fill('1234');
  await page.locator('input[name="account\\.country"]').click();
  await page.locator('input[name="account\\.country"]').fill('UAE');
  await page.locator('input[name="account\\.listOption"]').check();
  await page.getByRole('button', { name: 'Save Account Information' }).click();
});





test('test', async ({ page }) => {

  
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('ntpza91749');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('yz6vby9h!A1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.locator('#MenuContent').getByRole('link').first().click();
  await page.locator('#SidebarContent').getByRole('link').first().click();

  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await expect(page.getByRole('cell', { name: 'Payment Details' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Order')).toBeVisible();
  await page.getByText('Order').click();
  await expect(page.locator('#LogoContent').getByRole('link')).toBeVisible();

  await page.getByRole('link', { name: 'My Account' }).click();
  await page.getByRole('link', { name: 'Confirm' }).click();
  

  await expect(page.getByText('Thank you, your order has')).toBeVisible()

  await expect(page.getByRole('link', { name: 'Return to Main Menu' })).toBeVisible();
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();


});