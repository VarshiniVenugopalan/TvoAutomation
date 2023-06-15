describe('Activities Page', () => {
  beforeEach(() => {
    // Open the website
    cy.visit('https://tvolearn.com/pages/grade-3-mathematics');
  });
  it('Learning Activities', () => {
    cy.contains('Resources for Learning').click()
    cy.contains('TVO Learn mPower | Cyber-Siege: Spyware Squasher').click()
    cy.contains('Odd Squad | Oona and the Oonabots The Ninja Situation').click()
    cy.request({
      url: 'https://www.tvokids.com/school-age/videos/coding/oswald-machine',
      failOnStatusCode: true, 
    }).then((response) => {
      expect(response.status).to.eq(404); 
    });
    cy.contains('MathXplosion | Birthday Probability').click()
    cy.request({
      url: 'https://www.tvokids.com/school-age/mathxplosion/videos/birthday-probability', 
      failOnStatusCode: true, 
    }).then((response) => {
      expect(response.status).to.eq(404); 
    });
    cy.log("Checking all the links in the resources section ")
    cy.get('#resources>li>a').each((link) => {
      const href = link.attr('href');
      expect(href).to.not.be.empty;
      cy.request(href).then((response) => {
        // Assert based on the response status
        expect(response.status).to.be.oneOf([200, 201, 202]);
      });
    });     
    cy.log('Test Case to navigate to resource learning')
  }); 
  it('Apply the learning', () => {  
  cy.get(':nth-child(3) > span > .button-small').click()
  cy.get('#s-b8a62a1b-1308-4017-9c3c-20fd8f58443b > .shogun-heading-component > h2').should('contain.text', 'Apply the Learning')
  cy.log('Test Case to navigate to apply learning')
  });
});
