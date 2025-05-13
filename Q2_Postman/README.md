# 🧪 Q2 | SauceDemo Automation – Postman + JavaScript

## ✅ Scenario Description

> **Marks: 50**

**Scenario**:  
Log in with `standard_user`.  
Then:  
1. Reset the App State from the hamburger menu.  
2. Add any **three items** to the cart.  
3. Navigate to the final checkout page.  
4. Verify product names and total price.  
5. Finish the purchase journey and verify the **successful order message**.  
6. Reset the App State again and log out.


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