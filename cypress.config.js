const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/',    //    per  aprire l'url 
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false
  }
})