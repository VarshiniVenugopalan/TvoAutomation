describe('Simple Test', () => {
  it('Visit TVO Learn', () => {
   // expect(true).to.equal(false)
    cy.visit('https://tvolearn.com/')
    cy.get('.medium-up-hide-modified > .site-header__icons-wrapper > .site-header__menu').click()
    cy.get(':nth-child(1) > .mobile-nav__link').click()
    cy.get(':nth-child(1) > .mobile-nav__dropdown > :nth-child(6) > .mobile-nav__sublist-link').click()
    // Wait for an element with the selector to be visible for a maximum of 5 seconds
    cy.contains('Mathematics', { timeout: 5000 }).should('be.visible');
      cy.contains('Mathematics').click()       
    /*cy.get('.shogun-heading-component > h2').then(function(e){
      const t =e.text()
      expect(t).to.contains('Mathematics') 
    })*/
    cy.contains('Go To Learning Activities').click()
    cy.get('a[href*="/pages/grade-3-mathematics-number-learning-activity-1"]').contains('Number ').click()
    cy.get('.preview-hero-inner > h2').then(function(e){
      const t =e.text()
      expect(t).to.contains('Number') 
    })
    cy.screenshot("Sample Screenshot")
    cy.log('Test Case 1')
  })
})