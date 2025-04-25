import { Page, Locator } from '@playwright/test';
import { TestUser } from '../utils/testDataUtils';

export class RegisterPage {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly registerNowLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly address1Input: Locator;
  readonly cityInput: Locator;
  readonly stateInput: Locator;
  readonly zipInput: Locator;
  readonly countryInput: Locator;
  readonly newsletterCheckbox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.registerNowLink = page.getByRole('link', { name: 'Register Now!' });
    this.usernameInput = page.locator('input[name="username"]'); //
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="repeatedPassword"]');
    this.firstNameInput = page.locator('input[name="account\\.firstName"]');
    this.lastNameInput = page.locator('input[name="account\\.lastName"]');
    this.emailInput = page.locator('input[name="account\\.email"]');
    this.phoneInput = page.locator('input[name="account\\.phone"]');
    this.address1Input = page.locator('input[name="account\\.address1"]');
    this.cityInput = page.locator('input[name="account\\.city"]');
    this.stateInput = page.locator('input[name="account\\.state"]');
    this.zipInput = page.locator('input[name="account\\.zip"]');
    this.countryInput = page.locator('input[name="account\\.country"]');
    this.newsletterCheckbox = page.locator('input[name="account\\.listOption"]');
    this.saveButton = page.getByRole('button', { name: 'Save Account Information' });
  }

  async navigateToRegistration(): Promise<void> {
    await this.signInLink.click();
    await this.registerNowLink.click();
  }

  async fillRegistrationForm(user: TestUser ): Promise<void> {
    await this.usernameInput.fill(user.userID);
    await this.passwordInput.fill(user.password);
    await this.confirmPasswordInput.fill(user.password);
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill("TestLast");
    await this.emailInput.fill(user.email);
    await this.phoneInput.fill(user.mobile);
    await this.address1Input.fill(user.address1);
    await this.cityInput.fill(user.city);
    await this.stateInput.fill(user.city);
    await this.zipInput.fill("1234");
    await this.countryInput.fill(user.country);
    await this.newsletterCheckbox.check();
  }

  async submit(): Promise<void> {
    await this.saveButton.click();
  }
}