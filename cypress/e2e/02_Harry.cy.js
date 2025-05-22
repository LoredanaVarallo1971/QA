describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
            cy.url().should('include', 'www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    // Click the button with the test 'Customer Login'
cy.contains('button', 'Customer Login').click()
cy.get('#userSelect').select('Harry Potter')

    // Clicca sul bottone "Login"
    cy.get('button[type="submit"]').click()

    // Verifica che sia loggato correttamente
    cy.contains('Welcome Harry Potter').should('be.visible')

  })
})