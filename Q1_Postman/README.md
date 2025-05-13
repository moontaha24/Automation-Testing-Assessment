# Q1 - Login with Locked Out User

### Objective
Test login functionality with the user `locked_out_user` and verify the error message on https://www.saucedemo.com/.

---

### Tools Used
- Postman
- Newman
- Allure Reporter

---

### How to Run

#### 1. Install dependencies globally if not already:
```bash
npm install -g newman newman-reporter-allure

✅ Step-by-Step: How to Generate Allure Report (Q1 & Q2)

💻 1. Prerequisites (Only once)
Make sure these are installed:

npm install -g newman
npm install -g newman-reporter-allure
npm install -g allure-commandline --save-dev

🚀 2. Run the Postman Collection & Generate Allure Result Files
Use this command inside the respective folder (Q1_Postman or Q2_Postman):

newman run postman_collection.json \
  -e postman_environment.json \
  -r allure \
  --reporter-allure-export "./allure-results"
✅ This will generate Allure result files in the allure-results/ folder.

🌐 3. Generate the Allure HTML Report:

allure generate ./allure-results --clean -o ./allure-report

📝 If you want to open the report locally:

allure open ./allure-report