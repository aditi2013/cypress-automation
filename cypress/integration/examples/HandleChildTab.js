/// <reference types="cypress" />
describe('Handle child window test suite', function() {
    it('Handle child window test case' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        // If we click new tab it opens a different site. Cypress is not allowing directly to access cross-origin pages so we need to 
        // perform all operations in isolated block named origin
        cy.origin("https://www.qaclickacademy.com", ()=>{
            cy.get('#navbarSupportedContent a[href*="about"]').click();
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy');
        });

    });
})