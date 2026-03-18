Feature: API DemoQA Bookstore
  Scenario: Fluxo completo de gerenciamento de usuário e reserva de livros
    Given que eu crio um novo usuário com credenciais aleatórias
    And gero um token de acesso para o usuário
    And verifico se o usuário está autorizado no sistema
    When eu listo os livros disponíveis
    And escolho dois livros para alugar
    Then os detalhes do usuário devem exibir os dois livros reservados