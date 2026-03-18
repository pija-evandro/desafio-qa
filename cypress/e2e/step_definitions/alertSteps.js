import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AlertsPage from "../../support/page_objects/AlertsPage";

When('clico no botão "New Window"', () => {
  AlertsPage.clickNewWindow();
});

Then('devo ver a mensagem {string} na nova página', (mensagem) => {
  AlertsPage.validateNewWindowMessage();
});
