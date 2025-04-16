/// <reference types="cypress" />
describe('Handle Mouse hover', function() {
    it('Handle Mouse hover with click' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('div.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    });
    it('Handle mouse hover without click', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.contains('Top').click({force:true});
        cy.url().should('include', 'top');
    })
})