import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/cartPage';
import { OrderPage } from '../pages/orderPage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { loadTestUser, saveTestUser } from '../utils/saveUserUtils';



test('Verify add to cart and place order', async ({ page }) => {

const user = loadTestUser();
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);

await page.goto('https://petstore.octoperf.com/actions/Catalog.action');


// Login using the same credentials
await loginPage.login(user.userID, user.password);
await loginPage.verifyLoginSuccess();

// Assert that login is successful (adjust this selector/text as per your app)
await expect(page.getByRole('link', { name: 'My Account' })).toBeVisible();

  // Navigate to select product
  const cartPage = new CartPage(page);

  await cartPage.addProductToCart(); // Add product to cart
  await cartPage.proceedToCheckout(); // Proceed to checkout

  // Verify payment details
  const orderPage = new OrderPage(page);
  await orderPage.verifyPaymentDetailsVisible();

    // Verify placing Order

    await orderPage.proceedToPlaceOrder();

  // Verify thank you message after confirming the order
  await orderPage.verifyThankYouMessage();

  // Sign out after the order is placed
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
});