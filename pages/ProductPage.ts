import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addBackpackToCart() {
    await this.page.click('#add-to-cart-sauce-labs-backpack');
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}