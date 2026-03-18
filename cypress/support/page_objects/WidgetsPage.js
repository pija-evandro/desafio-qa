class WidgetsPage {
  start() {
    cy.get('#startStopButton')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true });
  }

    stopAt(targetValue) {
      cy.get('.progress-bar', { timeout: 20000 })
        .should(($el) => {
          const current = parseInt($el.text());
          expect(current).to.be.at.least(targetValue);
        })
        .then(() => {
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
      .should('not.have.text', '100%'); 
  }
}
export default new WidgetsPage();
