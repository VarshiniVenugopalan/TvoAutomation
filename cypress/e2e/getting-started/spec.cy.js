describe('My Simple Test', () => {
  it('Visit TVO Learn', () => {
   // expect(true).to.equal(false)
    cy.visit('https://tvolearn.com/')
    cy.get('.medium-up-hide-modified > .site-header__icons-wrapper > .site-header__menu').click()
    cy.get(':nth-child(1) > .mobile-nav__link').click()
    cy.get(':nth-child(1) > .mobile-nav__dropdown > :nth-child(6) > .mobile-nav__sublist-link').click()
    // Wait for an element with the selector to be visible for a maximum of 5 seconds
    cy.contains('Mathematics', { timeout: 5000 }).should('be.visible');
    cy.contains('Mathematics').click()
  });
});
