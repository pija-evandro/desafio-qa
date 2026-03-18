class InteractionsPage {
  // O plugin permite arrastar um elemento para cima de outro pelo seletor
  sortItems(dragText, targetText) {
    // Pegamos o item que queremos mover e "soltamos" no item de destino
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
