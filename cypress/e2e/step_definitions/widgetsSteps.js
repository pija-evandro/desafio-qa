import WidgetsPage from "../../support/page_objects/WidgetsPage";

When('inicio o progresso e paro antes de 25%', () => {
  WidgetsPage.start();
  WidgetsPage.stopAt(20);
});

Then('o valor da barra deve ser <= 25%', () => {
  WidgetsPage.validateValue(25);
});

Then('inicio novamente até 100% e reseto a barra', () => {
  WidgetsPage.start();
  WidgetsPage.waitFinishAndReset();
});
