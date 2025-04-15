/// <reference types="cypress" />
describe('My first test suite', function() {
    it('my first test case' , function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length', 5);
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').each(($el, indexe, $list) => {
            const vegName = $el.find('h4.product-name').text();
            if ( vegName.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click();
            }
        });
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    });
})