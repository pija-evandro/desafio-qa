class AlertsPage {
  clickNewWindow() {
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url;
        }).as('windowOpen');
    });
    cy.get('#windowButton').click();
    cy.url().should('include', '/sample');
  }

  validateNewWindowMessage() {
    cy.get('#sampleHeading').should('be.visible').and('have.text', 'This is a sample page');
  }
}
export default new AlertsPage();
