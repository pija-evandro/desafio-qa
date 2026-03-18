import InteractionsPage from "../../support/page_objects/InteractionsPage";

When('movo o item {string} para o lugar do {string}', () => {
  InteractionsPage.sortItems("Six", "One");
});

Then('o primeiro item da lista deve ser {string}', (expected) => {
  InteractionsPage.validateFirstItem(expected);
});
