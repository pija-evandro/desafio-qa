class InteractionsPage {
  sortItems(dragText, targetText) {
   cy.contains('.vertical-list-container .list-group-item', 'Six')
      .drag('.vertical-list-container .list-group-item:nth-child(1)', {
        force: true
      });
  }

  validateFirstItem(expectedFirstItem) {
    cy.get('.vertical-list-container .list-group-item')
      .first()
      .should('have.text', expectedFirstItem);
  }
}
export default new InteractionsPage();
