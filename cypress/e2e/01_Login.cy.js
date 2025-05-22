describe('Open page', () => {
  it('Go to homepage', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
            cy.url().should('include', 'www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
  })
})