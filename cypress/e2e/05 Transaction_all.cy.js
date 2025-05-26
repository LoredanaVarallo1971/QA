describe('Transaction and balance test', () => {
  it('executes deposits and verifies transactions', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    cy.url().should('include', '/BankingProject/#/login')

    // Login
    cy.contains('button', 'Customer Login').click()
    cy.get('#userSelect').select('Harry Potter')
    cy.get('button[type="submit"]').click()
    cy.contains('Welcome Harry Potter').should('be.visible')

    // Deposits
    const deposits = [100, 10, 5];
    deposits.forEach(amount => {
      cy.contains('button', 'Deposit').click()
      cy.get('input[placeholder="amount"]').clear().type(amount.toString())
      cy.get('form button[type="submit"]').click()
      cy.contains('Deposit Successful').should('be.visible')
    })

    // Check sum
    cy.get('strong.ng-binding').eq(1).should('have.text', '115')

    // Transactions
    cy.contains('Transactions').click()
    cy.url().should('include', '/listTx').then(() => {
      cy.log('✔ URL corretto: /listTx')
    })

    // Screenshot after click helping debug
    cy.screenshot('after-clicking-transactions')

    // Table
    cy.get('table tbody', { timeout: 20000 }).should('exist')
    
    // Debug: aspetta un attimo per evitare race condition Angular
    cy.wait(1000)

    // Check if the rows exist
    cy.get('table tbody tr', { timeout: 10000 }).should('have.length.at.least', 1).then($rows => {
      const total = Array.from($rows).reduce((sum, row) => {
        const amount = parseFloat(row.cells[1].innerText)
        return sum + (isNaN(amount) ? 0 : amount)
      }, 0)
      expect(total).to.equal(115)
    })
  })
})
