import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private categoryLink: Locator;
  private productLink: Locator;
  private addToCartButton: Locator;
  private proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.categoryLink =  page.locator('#SidebarContent').getByRole('link').first();
    this.productLink = page.getByRole('link', { name: 'FI-SW-01' }); // Update product name or locator if needed
    this.addToCartButton = page.getByRole('link', { name: 'Add to Cart' }).first();
    this.proceedToCheckoutButton = page.getByRole('link', { name: 'Proceed to Checkout' });
  }


  async addProductToCart(): Promise<void> {
    await this.categoryLink.click()
    await this.productLink.waitFor({ state: 'visible' });
    await this.productLink.click();
    await this.addToCartButton.waitFor({ state: 'visible' });
    await this.addToCartButton.click();
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
