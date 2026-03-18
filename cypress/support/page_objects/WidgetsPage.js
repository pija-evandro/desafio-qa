class WidgetsPage {
  start() {
    cy.get('#startStopButton')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
  }

  // Monitora o texto da barra e clica quando atingir o alvo
    stopAt(targetValue) {
    // 1. Monitora a barra até que o valor chegue em PELO MENOS o target (ex: 25)
    // O Cypress vai ficar em "loop" aqui até a condição ser verdadeira
    cy.get('.progress-bar', { timeout: 20000 })
      .should(($el) => {
        const current = parseInt($el.text());
        expect(current).to.be.at.least(targetValue);
      })
      // 2. O .then() só executa QUANDO o should acima passar (chegou nos 25%)
      .then(() => {
        // 3. Agora sim, clicamos para parar com segurança
        cy.get('#startStopButton').click({ force: true });
        cy.log('Clique de parada executado!');
      });
  }


  validateValue(max) {
    cy.get('.progress-bar').invoke('text').then((val) => {
      expect(parseInt(val)).to.be.at.most(max);
    });
  }

  waitFinishAndReset() {
    cy.get('.progress-bar', { timeout: 30000 }).should('have.text', '100%').and('have.class', 'bg-success');
    cy.get('#resetButton').should('have.text', 'Reset').click({force:true});
     cy.get('.progress-bar', {timeout: 300000})
      .should('not.have.text', '100%'); // Valida o texto visual após a animação
  }
}
export default new WidgetsPage();
