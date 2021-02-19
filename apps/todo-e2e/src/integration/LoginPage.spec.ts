import { BASE_URL } from '../support';

describe('Login Page', () => {
  beforeEach(() => {
    cy.clearAuthentication();
    cy.clearUserAccounts();
    cy.createUser();
    cy.clearAuthentication();
    cy.visit('/login');
  });

  it('should login', () => {
    cy.findByLabelText('Email').type('test@email.com');
    cy.findByLabelText('Password').type('password');
    cy.findByRole('button', { name: /login/i }).click();
    cy.url().should('equal', `${BASE_URL}/home`);
  });

  it('should throw an error if the password is inncorrect', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.findByLabelText('Email').type('test@email.com');
    cy.findByLabelText('Password').type('password1');
    cy.findByRole('button', { name: /login/i }).click();
    cy.findByText(/password is invalid/i);
  });

  it('should throw an error if the user does not exist', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.findByLabelText('Email').type('test1@email.com');
    cy.findByLabelText('Password').type('password1');
    cy.findByRole('button', { name: /login/i }).click();
    cy.findByText(/no user/i);
  });

  it('should go to register page when register button is clicked', () => {
    cy.findByText(/register/i).click();
    cy.url().should('equal', `${BASE_URL}/register`);
  });
});
