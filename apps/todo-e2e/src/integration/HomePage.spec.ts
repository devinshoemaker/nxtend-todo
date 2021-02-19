import { BASE_URL } from '../support';

describe('HomePage', () => {
  beforeEach(() => {
    cy.createUser();
    cy.visit('/home');
  });

  it('should display welcome message', () => {
    cy.visit('/');
    cy.url().should('equal', `${BASE_URL}/home`);
  });
});
