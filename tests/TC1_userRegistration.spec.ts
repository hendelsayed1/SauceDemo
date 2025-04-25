import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { generateTestUser } from '../utils/testDataUtils';
import { saveTestUser } from '../utils/saveUserUtils';

test('User can register successfully', async ({ page }) => {
  const user = generateTestUser();
  const registerPage = new RegisterPage(page);


  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  await registerPage.navigateToRegistration();
  await registerPage.fillRegistrationForm(user);
  await registerPage.submit();

  // Save generated user for later use
  saveTestUser({ username: user.userID, password: user.password });

  // Verify Success registeration and redirection to main page again

  await expect(page.locator('#LogoContent').getByRole('link')).toBeVisible();
  await expect(page.locator('#MenuContent').getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
  
});