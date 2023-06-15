import "../getting-started/spec.cy.js";
describe('Activities Page', () => {
  beforeEach(() => {
    // Open the website
    cy.visit('https://tvolearn.com/pages/grade-3-mathematics')

  });
  it('Learning Activities', () => {  
    cy.contains('Go To Learning Activities').click()
    cy.get('#activity-menu>li>span>a').each((link) => {
      const href = link.attr('href');
      expect(href).to.not.be.empty;
      cy.request(href).then((response) => {
        // Assert based on the status code
        expect(response.status).to.be.oneOf([200, 201, 202]);
      });
    }); 
  }); 
});
