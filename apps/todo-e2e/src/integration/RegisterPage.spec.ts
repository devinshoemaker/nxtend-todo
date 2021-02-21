import { BASE_URL } from '../support';

describe('Register Page', () => {
  beforeEach(() => {
    cy.clearUserAccounts();
    cy.clearAuthentication();
    cy.visit('/register');
  });

  it('should register new user', () => {
    cy.findByLabelText('Email').type('test@email.com');
    cy.findByLabelText('Password').type('password');
    cy.findByLabelText('Confirm Password').type('password');
    cy.findByText(/register/i).click();
    cy.url().should('equal', `${BASE_URL}/home`);
  });

  it('should throw an error if the email is not formatted correctly', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.findByLabelText('Email').type('test');
    cy.findByLabelText('Password').type('password');
    cy.findByLabelText('Confirm Password').type('password');
    cy.findByText(/register/i).click();
    cy.findByText(/badly formatted/i);
  });

  it('should throw an error if the user is already registered', () => {
    cy.on('uncaught:exception', () => {
      return false;
    });

    cy.findByLabelText('Email').type('test@email.com');
    cy.findByLabelText('Password').type('password');
    cy.findByLabelText('Confirm Password').type('password');
    cy.findByText(/register/i).click();

    cy.clearAuthentication();
    cy.reload();
    cy.url().should('equal', `${BASE_URL}/login`);
    cy.findByText(/register/i);
    cy.visit('/register');
    cy.findByLabelText('Email').type('test@email.com');
    cy.findByLabelText('Password').type('password');
    cy.findByLabelText('Confirm Password').type('password');
    cy.findByText(/register/i).click();
    cy.findByText(/already in use/i);
  });

  it('should go to login page when login button is clicked', () => {
    cy.findByText(/login/i).click();
    cy.url().should('equal', `${BASE_URL}/login`);
  });
});
