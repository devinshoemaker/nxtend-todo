import { BASE_URL } from '../support';

describe('HomePage', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.visit('/');
    cy.url().should('equal', `${BASE_URL}/home`);
  });
});
