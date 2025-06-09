import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async verifyOrderSuccess() {
    const text = await this.page.textContent('.complete-header');
    expect(text).toBe('Thank you for your order!');
  }
}