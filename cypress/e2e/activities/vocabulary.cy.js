import "../getting-started/spec.cy.js";
describe('Activities Page', () => {
  beforeEach(() => {
    // Open the website
    cy.visit('https://tvolearn.com/pages/grade-3-mathematics');
  });
  it('Vocabulary Section', () => {
    cy.contains('Vocabulary').click()
    cy.get('.shogun-tab-title>strong').contains('Algebra').click()
    cy.get('#s-2b60d913-96df-4098-a4e5-6b906e646789').should('match', /algebra/);
    cy.get('.shogun-tab-title>strong').contains('Data').click()
    cy.get('#s-2b60d913-96df-4098-a4e5-6b906e646789').should('have.text', 'data');
    cy.get('.shogun-tab-title>strong').contains('Number').click()
    cy.get('.shogun-tab-title>strong').contains('Spatial Sense').click()
    cy.get('.shogun-tab-title>strong').contains('Financial Literacy').click()
     });
});
