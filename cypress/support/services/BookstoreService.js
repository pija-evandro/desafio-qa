class BookStoreService {
  constructor() {
    this.baseUrl = 'https://demoqa.com';
    this.userId = '';
    this.token = '';
    this.selectedIsbns = [];
  }

  createUser(username, password) {
    return cy.request('POST', `${this.baseUrl}/Account/v1/User`, {
      userName: username,
      password: password
    });
  }

  generateToken(username, password) {
    return cy.request('POST', `${this.baseUrl}/Account/v1/GenerateToken`, {
      userName: username,
      password: password
    });
  }

  checkAuthorization(username, password) {
    return cy.request('POST', `${this.baseUrl}/Account/v1/Authorized`, {
      userName: username,
      password: password
    });
  }

  getBooks() {
    return cy.request('GET', `${this.baseUrl}/BookStore/v1/Books`);
  }

  addBooks(userId, token, isbns) {
    const collection = isbns.map(isbn => ({ isbn }));
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/BookStore/v1/Books`,
      auth: { bearer: token },
      body: {
        userId: userId,
        collectionOfIsbns: collection
      }
    });
  }

  getUserDetails(userId, token) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/Account/v1/User/${userId}`,
      auth: { bearer: token }
    });
  }
}
export default new BookStoreService();
