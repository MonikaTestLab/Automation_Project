# Playwright Automation Project

End-to-end UI test automation using **Playwright and TypeScript**, with a focus on maintainable test code, reusable components, and reliable test execution.

## Tech Stack

- **Language:** TypeScript
- **Automation:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Version Control:** Git and GitHub

## Project Structure

```text
Automation_Project/
├── .github/             # GitHub configuration and workflows
├── fixtures/            # Reusable test fixtures
├── pages/               # Page Object Model classes
├── tests/               # Automated test cases
├── playwright.config.ts # Playwright configuration
├── package.json         # Dependencies and test scripts
├── package-lock.json    # Locked dependency versions
└── README.md            # Project documentation
```

*The structure above describes the intended framework layout; update it to match the final repository after cleanup.*

## Key Features

- Browser-based UI test automation
- Reusable page classes and methods using POM
- Locators and assertions using Playwright
- Test execution and failure debugging
- Screenshots, traces, and HTML reports for troubleshooting

## Getting Started

### 1. Install dependencies

```bash
npm install
npx playwright install chromium
```

### 2. Run tests

```bash
npx playwright test
```

### 3. Run tests with the browser visible

```bash
npm run test:headed
```

### 4. View the HTML report

```bash
npm run report
```

## Project Goals

This project demonstrates practical skills in Playwright automation, TypeScript, reusable test design, debugging, and test reporting.

---

**Author:** QA Automation Tester
