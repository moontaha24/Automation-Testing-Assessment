# Q3 - Playwright UI Automation with performance_glitch_user

### Objective
1. Login with `performance_glitch_user`.
2. Reset App State.
3. Filter by name (Z to A) and select the first product.
4. Complete checkout.
5. Verify products and price.
6. Confirm success message.
7. Reset App State again and logout.

---

### 🧪 Tools Used
- Playwright
- JavaScript
- Allure Reporter

---

### 📦 Project Setup

#### 1. Install dependencies:
```bash
npm install

🔁 After running the test, Playwright automatically stores results.

💻 1. Prerequisites (Only once)
Install Allure dependencies in Q3_Playwright:

npm install -D allure-playwright allure-commandline
Make sure you have the following in your playwright.config.js:

reporter: [
  ['list'],
  ['allure-playwright'],
],


🚀 2. Run the Playwright Test

From Q3_Playwright folder:

npx playwright test

✅ This will generate allure-results/ in the folder.

🌐 3. Generate the Allure HTML Report:

allure generate ./allure-results --clean -o ./allure-report

To open the report:

allure open ./allure-report