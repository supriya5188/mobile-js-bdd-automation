## Mobile Automation using Webdriverio and Browserstack

### Requirements
1. Node JS (use latest)
2. VS Code
3. create free account on [brwserStack](https://www.browserstack.com/)
4. upload App on browserstack
5. take User Name, and User Access Key from your browserstack account

### Install and Run
1. clone repo
2. npm install
3. create .env file in project root dir and set BROWSERSTACK_USERID and BBROWSERSTACK_ACCESSKEY
4. How to Run: npm run wdio
5. After execution "allure-results" folder will genrate and user can see failed test case screenshot 

### Report
1. Allure report are added to see test case execution results.
2. to see report 
   2.1. Open index.html file in "allure-report" folder
   2.2. run command: npx allure serve allure-results
4. On browserstack afetr execution vedio will be genrate  and we can dowonload
5. specs report is also added to see report on console
