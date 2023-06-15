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
      // Assert that the link has a valid href attribute
      expect(href).to.not.be.empty;
      // Check the link's validity by making an HTTP request
      cy.request(href).then((response) => {
        // Assert that the response is successful (status code 2xx)
        expect(response.status).to.be.oneOf([200, 201, 202]);
      });
    }); 
  }); 
});
