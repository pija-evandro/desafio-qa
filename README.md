Este repositório contém a solução para o desafio técnico de automação da Accenture, focado em testes de API e Frontend utilizando o framework Cypress com Cucumber (BDD) e o padrão de projeto Page Object Model (POM).
🚀 Estrutura do Projeto

🛠️ Tecnologias Utilizadas

    Cypress: Framework principal de automação.

    JavaScript: Linguagem base do projeto.

    Cucumber: Para suporte ao desenvolvimento orientado a comportamento (BDD).

    Page Object Model (POM): Padrão de arquitetura de testes.

📋 Detalhes dos Desafios Implementados

Parte 1: API (DemoQA)

Fluxo contínuo executado em uma única rodada:

    Criação de usuário.

    Geração de token de acesso.

    Confirmação de autorização.

    Listagem e aluguel de dois livros.

    Validação dos detalhes do usuário com os livros reservados.

Parte 2: Frontend (Elementos Visuais)

Automação de diversos componentes no site DemoQA:

    Practice Form: Preenchimento completo, upload de arquivo .txt e validação de popup.

    Browser Windows: Validação de abertura de nova janela e mensagem de texto.

    Web Tables: Operações de CRUD (Criar, Editar, Deletar).

    Progress Bar: Controle de fluxo (parar em ≤25%, finalizar em 100% e resetar).

    Sortable: Ordenação de elementos via drag and drop.

    Bônus: Criação e deleção dinâmica de 12 registros utilizando Cucumber.

⚙️ Como Executar

Instale as dependências:

    npm install

Execute em modo Headless (Terminal):
   
    npx cypress run

Abra a Interface Gráfica do Cypress:

    npx cypress open
