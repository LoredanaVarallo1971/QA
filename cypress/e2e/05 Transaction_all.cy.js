describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.url().should('include', '/BankingProject/#/login')

    // Login
    cy.contains('button', 'Customer Login').click()
    cy.get('#userSelect').select('Harry Potter')
    cy.get('button[type="submit"]').click()
    cy.contains('Welcome Harry Potter').should('be.visible')

    // Deposit 100
    cy.contains('button', 'Deposit').click()
    cy.get('input[placeholder="amount"]').type('100')
    cy.get('form button[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')

    // Deposit 10
    cy.get('input[placeholder="amount"]').clear().type('10')
    cy.get('form button[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')

    // Deposit 5
    cy.get('input[placeholder="amount"]').clear().type('5')
    cy.get('form button[type="submit"]').click()
    cy.contains('Deposit Successful').should('be.visible')

    // Verifica saldo
    cy.get('strong.ng-binding').eq(1).should('have.text', '115')

    // Vai a Transactions
    cy.contains('Transactions').click()
    
// Aspetta che l'URL contenga /listTx
cy.url().should('include', '/listTx')

// Aspetta che la tabella appaia
cy.get('table tbody tr', { timeout: 10000 }).should('exist')

    cy.get('.ng-binding', { timeout: 10000 }).should('exist')
    
    cy.get('table tbody tr').then($rows => {
      const total = Array.from($rows).reduce((sum, row) => {
        const amount = parseFloat(row.cells[1].innerText)
        return sum + (isNaN(amount) ? 0 : amount)
      }, 0)
      expect(total).to.equal(115)
    })
  })
})