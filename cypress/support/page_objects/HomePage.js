class HomePage {
  visit() {
    cy.visit('https://demoqa.com');
  }

  selectCategory(categoryName) {
    cy.contains('.card-body', categoryName).click({ force: true });
  }

  selectSubMenu(subMenuName) {
    cy.get('.menu-list').contains(subMenuName).click({ force: true });
  }
}
export default new HomePage();
