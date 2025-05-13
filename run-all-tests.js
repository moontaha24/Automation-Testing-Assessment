const { execSync } = require("child_process");

console.log("\n🔁 Running Q1 (Postman)...");
execSync("npx newman run ./Q1_Postman/Q1_postman_collection.json -e ./Q1_Postman/Q1_env.postman_environment.json -r cli,allure", { stdio: "inherit" });

console.log("\n🔁 Running Q2 (Postman)...");
execSync("npx newman run ./Q2_Postman/Q2_postman_collection.json -r cli,allure", { stdio: "inherit" });

console.log("\n🔁 Running Q3 (Playwright)...");
execSync("npx playwright test ./Q3_Playwright/tests/q3.test.js --reporter=line,allure-playwright", { stdio: "inherit" });