import { Page, Locator, expect } from '@playwright/test';

export class OrderPage {
  private page: Page;
  private paymentDetailsCell: Locator;
  private continueButton: Locator;
  private orderSummaryText: Locator;
  private confirmOrderLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentDetailsCell = page.getByRole('cell', { name: 'Payment Details' });
    this.continueButton = page.locator('//input[@type="submit" and @value="Continue"]')
    this.confirmOrderLink = page.getByRole('link', { name: 'Confirm' });
  
  }

  async verifyPaymentDetailsVisible(): Promise<void> {
    await expect(this.paymentDetailsCell).toBeVisible();
  }

  async proceedToPlaceOrder(): Promise<void> {
    await this.continueButton.waitFor({ state: 'visible' });
    await this.continueButton.click();

    await this.confirmOrderLink.waitFor({ state: 'visible' });
    await this.confirmOrderLink.click();

  }
 
  async verifyThankYouMessage(): Promise<void> {
    const thankYouMessage = this.page.locator('text=Thank you, your order has');
    await expect(thankYouMessage).toBeVisible();
  }
}