class FormPage {
  fillForm() {
    const user = {
      firstName: 'João',
      lastName: 'Silva',
      email: `teste${Date.now()}@email.com`,
      phone: '11988887777'
    };

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('[value="Male"]').click({ force: true });
    cy.get('#userNumber').type(user.phone);
    
    // Upload do arquivo (deve estar em cypress/fixtures/example.txt)
    cy.get('#uploadPicture').selectFile('cypress/fixtures/example.txt');
    
    cy.get('#currentAddress').type('Endereço de teste aleatório');
  }

  submit() {
    cy.get('#submit').click({ force: true });
  }

  validatePopupVisible() {
    cy.get('.modal-content').should('be.visible');
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting');
  }

  closePopup() {
    cy.get('#closeLargeModal').scrollIntoView().should('be.visible').click({ force: true });
  }
}
export default new FormPage();
