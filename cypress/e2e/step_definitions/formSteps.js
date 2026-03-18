import { When, Then } from "cypress-cucumber-preprocessor/steps";
import FormPage from "../../support/page_objects/FormPage";

When('preencho todo o formulário com dados aleatórios e faço upload do arquivo', () => {
  FormPage.fillForm();
});

When('submeto o formulário', () => {
  FormPage.submit();
});

Then('garanto que um popup foi aberto após o submit', () => {
  FormPage.validatePopupVisible();
});

Then('fecho o popup', () => {
  FormPage.closePopup();
});
