./node_modules/.bin/cypress cache clear
./node_modules/.bin/cypress install
npm install -D cypress-iframe
./node_modules/.bin/cypress open

# Below command is used run cypress via CLI 
npx cypress run --spec cypress/integration/examples/EndToEndECommerceWithEnvVars.js --env base_url="https://rahulshettyacademy.com"


npm i --save-dev cypress-mochawesome-reporter

npm install @badeball/cypress-cucumber-preprocessor