const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/',    //    per  aprire l'url 
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false
    defaultCommandTimeout: 20000,     // wait 20s
    pageLoadTimeout: 60000,           // max time
    retries: {
      runMode: 2,                     //  CI mode, re-try 2 times if fails
      openMode: 0                     // 
    },
    video: true,                      // record a video (utile in CI)
    screenshotOnRunFailure: true      // screenshot if fails
  }
})
