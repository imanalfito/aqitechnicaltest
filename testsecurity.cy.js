describe('AQI Website Security Tests', () => {
    beforeEach(() => {
      cy.visit('https://aqi.co.id/');
    });
  
    it('Should have secure response headers', () => {
      cy.request('https://aqi.co.id/').then((response) => {
        expect(response.headers).to.include.keys(
          'x-content-type-options',
          'x-frame-options',
          'x-xss-protection',
          'strict-transport-security'
        );
      });
    });
  
    it('Should not have any exposed sensitive data', () => {
      cy.get('body').should('not.contain', 'password');
      cy.get('body').should('not.contain', 'apikey');
    });
  });
  