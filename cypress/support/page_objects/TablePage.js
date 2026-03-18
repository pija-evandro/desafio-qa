class TablePage {
  // Preenche o formulário de novo registro
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

  // Deleta todos os registros que encontrar na tabela
  deleteAllRecords() {
    for (let i = 1; i <= 12; i++) {
    const emailUnico = `u${i}@test.com`;

    // 1. Pesquisa o e-mail
    cy.get('#searchBox').clear().type(emailUnico, { delay: 50 });

    // 2. Espera explicitamente que a célula com o e-mail apareça na tabela
    // Isso evita o erro de "element not found" na estrutura da linha

    cy.get('body').then(($body) => {
    // Verifica se o elemento existe antes de tentar removê-lo
    if ($body.find('#adplus-anchor').length > 0) {
      cy.get('#adplus-anchor').invoke('remove');
    }
    if ($body.find('#fixedban').length > 0) {
      cy.get('#fixedban').invoke('remove');
    }
    if ($body.find('footer').length > 0) {
      cy.get('footer').invoke('remove');
    }
    // Remove iframes de anúncios do Google que sobrepõem a UI
    if ($body.find('iframe[id^="google_ads"]').length > 0) {
      cy.get('iframe[id^="google_ads"]').invoke('remove');
    }
    });
    cy.get('body').then(($body) => {
      // Verifica se a busca retornou algum resultado real
      if ($body.text().includes(emailUnico)) {
        cy.get('.action-buttons [title="Delete"]')
        .should('be.visible') // Garante que o elemento carregou
        .click({ force: true });
      }
    });
  }
  }
}
export default new TablePage();
