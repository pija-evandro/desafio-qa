class TablePage {
  fillRecordForm(user) {
    cy.get('#addNewRecordButton').click({force:true});
    cy.get('#firstName').clear().type(user.nome);
    cy.get('#lastName').clear().type('Sobrenome');
    cy.get('#userEmail').clear().type(user.email);
    cy.get('#age').clear().type(user.idade);
    cy.get('#salary').clear().type('5000');
    cy.get('#department').clear().type('QA');
    cy.get('#submit').click({force:true});
  }

  editFirstRecord(newName) {
    cy.get('[id^="edit-record"]').first().click({force:true});
    cy.get('#firstName').clear().type(newName);
    cy.get('#submit').click({force:true});
  }

  deleteFirstRecord() {
    cy.get('[id^="delete-record"]').first().click({force:true});
  }

  deleteAllRecords() {
    for (let i = 1; i <= 12; i++) {
    const emailUnico = `u${i}@test.com`;

    cy.get('#searchBox').clear().type(emailUnico, { delay: 50 });
    cy.get('body').then(($body) => {

    if ($body.find('#adplus-anchor').length > 0) {
      cy.get('#adplus-anchor').invoke('remove');
    }
    if ($body.find('#fixedban').length > 0) {
      cy.get('#fixedban').invoke('remove');
    }
    if ($body.find('footer').length > 0) {
      cy.get('footer').invoke('remove');
    }
    if ($body.find('iframe[id^="google_ads"]').length > 0) {
      cy.get('iframe[id^="google_ads"]').invoke('remove');
    }
    });
    cy.get('body').then(($body) => {
      if ($body.text().includes(emailUnico)) {
        cy.get('.action-buttons [title="Delete"]')
        .should('be.visible') 
        .click({ force: true });
      }
    });
  }
  }
}
export default new TablePage();
