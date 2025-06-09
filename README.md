# SauceDemo E-commerce Automation Testing Project

This repository contains automated tests for an e-commerce application using Playwright with TypeScript. The tests cover user login and add to cart with placing order flow.

## Features

- End-to-end testing of critical user journeys
- Page Object Model design pattern for better maintainability
- Parallel test execution capability
- Comprehensive test reporting
- TypeScript for type safety

## Prerequisites

Before running the tests, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- A modern web browser (tests are configured for Chromium, Firefox, and WebKit)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/hendelsayed1/SauceDemo.git
   cd SauceDemo/tests/
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
   ```

2. Update the test configuration in `playwright.config.ts` if needed.

## Running Tests

### Run all tests

```bash
npm test
```

### Run specific test files

```bash
npx playwright test tests/place-order.spec.ts
```

### Run tests in headed mode (to see the browser)

```bash
npx playwright test --headed
```

### Run tests in a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

## Test Structure

```
├── tests/                                         # Test files
│   └── place-order.spec.ts                        # Full test: login, add to cart, checkout
│
├── pages/                                         # Page Object Models
│   ├── LoginPage.ts                               # Login page
│   ├── ProductPage.ts                             # Handles adding product & navigating to cart
│   ├── CartPage.ts                                # Clicking 'Checkout'
│   ├── CheckoutPage.ts                            # Filling user info and clicking 'Continue'
│   └── ConfirmationPage.ts                        # Verifying "Thank you for your order!" message
│
├── utils/                                         # Helper data and utilities
│   └── testData.ts                                # Contains valid user credentials
│
├── playwright.config.ts                           # Playwright config with all browser projects
├── package.json                                   # NPM dependencies and scripts
├── tsconfig.json                                  # TypeScript config
└── playwright-report/                             # Auto-generated HTML test reports

```

## Test Reports

After running the tests, you can view the HTML report by running:

```bash
npx playwright show-report
```

## Running Tests on GitHub Actions (CI/CD)

This project uses GitHub Actions to automatically run tests on every push and pull request to main.

- It installs dependencies
- Installs Playwright browsers
- Runs Playwright tests
- Uploads a Playwright HTML report as an artifact

You can view the status and report directly inside the Actions tab of your GitHub repository.

