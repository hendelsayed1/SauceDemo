import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loadTestUser, saveTestUser } from '../utils/saveUserUtils';

test('User can sign in successfully', async ({ page }) => {
  const user = loadTestUser();
  console.log (user.userID, user.password);
  const loginPage = new LoginPage(page);

  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');


  // Login using the same credentials
  await loginPage.login(user.userID, user.password);
  await loginPage.verifyLoginSuccess();

  // Assert that login is successful (adjust this selector/text as per your app)
  await expect(page.getByRole('link', { name: 'My Account' })).toBeVisible();
});