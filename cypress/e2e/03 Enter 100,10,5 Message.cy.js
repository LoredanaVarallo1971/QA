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
 // Click the button with the test 'Deposit'
 cy.contains('button', 'Deposit ').click()
 cy.get('input[placeholder="amount"]').type('100')
cy.get('form button[type="submit"]').click()
cy.contains('Deposit Successful').should('be.visible')
cy.contains('Deposit Successful', { timeout: 30000 }).should('be.visible')

//10
cy.get('input[placeholder="amount"]').type('10')
cy.get('form button[type="submit"]').click()
cy.contains('Deposit Successful').should('be.visible')
cy.contains('Deposit Successful', { timeout: 30000 }).should('be.visible')
//5
cy.get('input[placeholder="amount"]').type('5')
cy.get('form button[type="submit"]').click()
cy.contains('Deposit Successful').should('be.visible')
cy.contains('Deposit Successful', { timeout: 30000 }).should('be.visible')
  })
})