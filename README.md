# E-commerce Automation Testing Project

This repository contains automated tests for an e-commerce application using Playwright with TypeScript. The tests cover user registration, login and add to cart with placing order workflows.

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
   git clone https://github.com/hendelsayed1/Automation-Task.git
   cd Automation-Task/tests/
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
npx playwright test TC1_userRegistration.spec.ts
npx playwright test TC2_userLogin.spec.ts
npx playwright test TC3_addToCartPlaceOrder.test.ts
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
├── tests/                                     # Test files
│   ├── TC1_userRegistration.spec.ts           # Registration tests
│   ├── TC2_userLogin.spec.ts                     # Login tests
│   └── TC3_addToCartPlaceOrder.test.ts          # Cart and order placement tests
├── pages/                  # Page Object Models
│   ├── cartPage.ts.          # Base page with common methods
│   ├── RegisterPage.ts   # Registration page object
│   ├── LoginPage.ts          # Login page object
│   ├── Order.ts        # Order page object
├── utils/                  # Utility functions and helpers
└── reports/                # Test reports
```

## Test Reports

After running the tests, you can view the HTML report by running:

```bash
npx playwright show-report
```



