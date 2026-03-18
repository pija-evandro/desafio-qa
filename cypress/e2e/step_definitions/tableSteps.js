import { When, Then } from "cypress-cucumber-preprocessor/steps";
import TablePage from "../../support/page_objects/TablePage";

When('crio um novo registro com nome {string}, email {string} e idade {string}', (nome, email, idade) => {
  TablePage.fillRecordForm({ nome, email, idade });
});

When('edito o nome do registro criado para {string}', (novoNome) => {
  TablePage.editFirstRecord(novoNome);
});

Then('deleto o registro editado', () => {
  TablePage.deleteFirstRecord();
});

When('eu crio os seguintes registros de uma vez:', (tabela) => {
  const dados = tabela.hashes(); 

  dados.forEach((usuario) => {
    TablePage.fillRecordForm({ 
      nome: usuario.nome, 
      email: usuario.email, 
      idade: usuario.idade 
    });
  });
});


Then('deleto apenas os registros criados no bônus', () => {
  TablePage.deleteAllRecords();
});
