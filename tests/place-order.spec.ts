import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { CartPage } from '../pages/CartPage'
import { users } from '../utils/testData';  

test('Verify user can place an order', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const confirmationPage = new ConfirmationPage(page);

  // Navigate to the BaseURL mentioned in the config file 
  await page.goto('/');

// Perform login and add a product to the cart
  await loginPage.login(users.standard.username, users.standard.password);
  await productPage.addBackpackToCart();
  await productPage.goToCart();

  // Proceed to checkout and fill in the information
  await cartPage.clickCheckout();
  await checkoutPage.fillInformation('Hend', 'Elsayed', '12345');
  await checkoutPage.finishCheckout();
  await confirmationPage.verifyOrderSuccess();
});