import { When, Given } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/page_objects/HomePage";

Given('que eu acesso o site {string}', (url) => {
  cy.visit(url);
});

When('eu escolho a opção {string} na página inicial', (categoria) => {
  HomePage.selectCategory(categoria);
});

When('clico no submenu {string}', (submenu) => {
  HomePage.selectSubMenu(submenu);
});
