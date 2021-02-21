// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    clearAuthentication(): void;
    clearUserAccounts(): void;
    createUser(): void;
  }
}

Cypress.Commands.add('clearAuthentication', () => {
  localStorage.removeItem('user');
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
});

Cypress.Commands.add('clearUserAccounts', () => {
  cy.request({
    url: 'http://localhost:9099/emulator/v1/projects/nxtend-todo/accounts',
    method: 'DELETE',
    auth: {
      bearer: 'owner',
    },
  });
  cy.clearAuthentication();
});

Cypress.Commands.add('createUser', () => {
  cy.clearUserAccounts();
  cy.visit('/register');
  cy.findByLabelText('Email').type('test@email.com');
  cy.findByLabelText('Password').type('password');
  cy.findByLabelText('Confirm Password').type('password');
  cy.findByText(/register/i).click();
});
