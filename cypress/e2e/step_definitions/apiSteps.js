import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BookStoreService from "../../support/services/BookstoreService";

const user = {
  userName: `user_${Math.floor(Math.random() * 10000)}`,
  password: 'Password123!' 
};

Given('que eu crio um novo usuário com credenciais aleatórias', () => {
  BookStoreService.createUser(user.userName, user.password).then((res) => {
    expect(res.status).to.eq(201);
    BookStoreService.userId = res.body.userID;
  });
});

Given('gero um token de acesso para o usuário', () => {
  BookStoreService.generateToken(user.userName, user.password).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.status).to.eq('Success');
    BookStoreService.token = res.body.token;
  });
});

Given('verifico se o usuário está autorizado no sistema', () => {
  BookStoreService.checkAuthorization(user.userName, user.password).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.eq(true);
  });
});

When('eu listo os livros disponíveis', () => {
  BookStoreService.getBooks().then((res) => {
    expect(res.status).to.eq(200);
    BookStoreService.selectedIsbns = [res.body.books[0].isbn, res.body.books[1].isbn];
  });
});

When('escolho dois livros para alugar', () => {
  BookStoreService.addBooks(
    BookStoreService.userId, 
    BookStoreService.token, 
    BookStoreService.selectedIsbns
  ).then((res) => {
    expect(res.status).to.eq(201);
  });
});

Then('os detalhes do usuário devem exibir os dois livros reservados', () => {
  BookStoreService.getUserDetails(
    BookStoreService.userId, 
    BookStoreService.token
  ).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.books).to.have.lengthOf(2);
    expect(res.body.books[0].isbn).to.eq(BookStoreService.selectedIsbns[0]);
    expect(res.body.books[1].isbn).to.eq(BookStoreService.selectedIsbns[1]);
  });
});
