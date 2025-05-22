./node_modules/.bin/cypress cache clear
./node_modules/.bin/cypress install
npm install -D cypress-iframe
./node_modules/.bin/cypress open

# Below command is used run cypress via CLI 
npx cypress run --spec cypress/integration/examples/EndToEndECommerceWithEnvVars.js --env base_url="https://rahulshettyacademy.com"


npm i --save-dev cypress-mochawesome-reporter

npm install @badeball/cypress-cucumber-preprocessor

# Below command is used to run specific tests annotated with @Smoke
npx cypress run --env tags="@Smoke"

# install below plugin to generate html report from json output
npm install multiple-cucumber-html-reporter --save-dev
# to run report simply run command. For more details see https://www.npmjs.com/package/multiple-cucumber-html-reporter
node multiple-html-reporter.js
