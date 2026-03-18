Feature: Desafio Frontend DemoQA - Parte 1

  Scenario: Teste 1 - Preencher Practice Form com navegação completa
    Given que eu acesso o site "https://demoqa.com"
    When eu escolho a opção "Forms" na página inicial
    And clico no submenu "Practice Form"
    And preencho todo o formulário com dados aleatórios e faço upload do arquivo
    And submeto o formulário
    Then garanto que um popup foi aberto após o submit
    And fecho o popup

  Scenario: Teste 2 - Abrir nova janela e verificar
    Given que eu acesso o site "https://demoqa.com"
    When eu escolho a opção "Alerts, Frame & Windows" na página inicial
    And clico no submenu "Browser Windows"
    And clico no botão "New Window"
    Then devo ver a mensagem "This is a sample page" na nova página

  Scenario: Teste 3 - Gerenciar um registro na Web Table
    Given que eu acesso o site "https://demoqa.com"
    When eu escolho a opção "Elements" na página inicial
    And clico no submenu "Web Tables"
    And crio um novo registro com nome "Cypress", email "test@test.com" e idade "30"
    And edito o nome do registro criado para "Cypress Editado"
    Then deleto o registro editado

  @bonus
  Scenario: Bônus - Criar 12 registros dinâmicos
    Given que eu acesso o site "https://demoqa.com/webtables"
    When eu crio os seguintes registros de uma vez:

      | nome   | email           | idade |
      | User01 | u1@test.com     | 21    |
      | User02 | u2@test.com     | 22    |
      | User03 | u3@test.com     | 23    |
      | User04 | u4@test.com     | 24    |
      | User05 | u5@test.com     | 25    |
      | User06 | u6@test.com     | 26    |
      | User07 | u7@test.com     | 27    |
      | User08 | u8@test.com     | 28    |
      | User09 | u9@test.com     | 29    |
      | User10 | u10@test.com    | 30    |
      | User11 | u11@test.com    | 31    |
      | User12 | u12@test.com    | 32    | 
    
    And deleto apenas os registros criados no bônus
  
  Scenario: Teste 4 - Controlar Progress Bar
    Given que eu acesso o site "https://demoqa.com"
    When eu escolho a opção "Widgets" na página inicial
    And clico no submenu "Progress Bar"
    And inicio o progresso e paro antes de 25%
    Then o valor da barra deve ser <= 25%
    And inicio novamente até 100% e reseto a barra

  Scenario: Teste 5 - Ordenar Lista Sortable
    Given que eu acesso o site "https://demoqa.com"
    When eu escolho a opção "Interactions" na página inicial
    And clico no submenu "Sortable"
    And movo o item "Six" para o lugar do "One"
    Then o primeiro item da lista deve ser "Six"
