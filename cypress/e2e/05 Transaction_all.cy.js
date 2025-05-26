describe('Transaction and balance test', () => {
  it('executes deposits and verifies transactions', () => {
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    // Verifica URL corretto
    cy.url().should('include', '/BankingProject/#/login');

    // Login come Customer
    cy.contains('Customer Login').click();
    cy.get('#userSelect').select('Harry Potter');
    cy.get('button[type="submit"]').click();
    cy.contains('Welcome Harry Potter').should('be.visible');

    // Funzione di deposito parametrica
    const deposit = (amount) => {
      cy.contains('Deposit').click();
      cy.get('input[placeholder="amount"]').clear().type(amount);
      cy.get('form button[type="submit"]').click();
      cy.contains('Deposit Successful').should('be.visible');
    };

    // Esegui depositi
    deposit(100);
    deposit(10);
    deposit(5);

    // Verifica saldo aggiornato
    cy.get('strong.ng-binding').eq(1).should('have.text', '115');

    // Vai alla pagina delle transazioni
    cy.contains('Transactions').click();

    // Attendi URL corretto e presenza della tabella
    cy.url().should('include', '/listTx');
    cy.get('table tbody tr', { timeout: 15000 }).should('have.length.at.least', 3);

    // Calcola e verifica il totale
    cy.get('table tbody tr').then($rows => {
      const total = Array.from($rows).reduce((sum, row) => {
        const amount = parseFloat(row.cells[1].innerText);
        return sum + (isNaN(amount) ? 0 : amount);
      }, 0);
      expect(total).to.equal(115);
    });
  });
});
