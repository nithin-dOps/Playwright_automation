# Playwright TypeScript Test Automation

This project contains automated tests for web applications using Playwright with TypeScript.

## Project Structure

```
playwright_automation/
├── tests/
│   └── smoke tests/
│       └── login.spec.ts    # Login test scenarios
├── package.json             # Project dependencies and scripts
├── playwright.config.ts     # Playwright configuration
└── tsconfig.json           # TypeScript configuration
```

## Test Example: Login Test

### File: `tests/smoke tests/login.spec.ts`

This test automates the login functionality of the OpenCart demo application.

#### Test Steps:
1. Navigates to the login page
2. Fills in the email and password fields
3. Clicks the login button
4. Verifies successful login by checking the page title
5. Takes a screenshot for debugging

#### Key Components:
- **Page Navigation**: `page.goto()`
- **Element Location**: `page.locator()`
- **Form Interaction**: `fill()` and `click()` methods
- **Assertions**: `expect().toEqual()`
- **Debugging**: `console.log()` and `page.screenshot()`

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test File
```bash
npx playwright test tests/smoke\ tests/login.spec.ts
```

### Run in UI Mode (Headed Browser)
```bash
npx playwright test --headed
```

### View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Browser Support
- Chromium
- Firefox
- WebKit

## Configuration
- **Playwright Config**: `playwright.config.ts`
- **TypeScript Config**: `tsconfig.json`

## Best Practices
1. Use page object model for better maintainability
2. Add meaningful test descriptions
3. Include assertions for all test scenarios
4. Use proper selectors (prefer data-testid attributes)
5. Handle asynchronous operations with async/await

## Dependencies
- @playwright/test
- typescript
- @types/node
