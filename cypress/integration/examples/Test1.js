/// <reference types="cypress" />
describe('My first test suite', function() {
    it('my first test case' , function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').should('have.length', 5);
        // cy.get('.product:visible').should('have.length', 4);
        // cy.get('.products').as('prdLocator'); // prdLocator is used as alias here
        // cy.get('@prdLocator').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').should('have.length', 4);
        // cy.get(':nth-child(3) > .product-action > button').click(); // Using CSS selector provided by cypress
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($el, indexe, $list) => {
            const vegName = $el.find('h4.product-name').text();
            if ( vegName.includes('Cashews')) {
                cy.wrap($el).contains('ADD TO CART').click();
            }
        });
        cy.get('.brand').should('have.text', 'GREENKART');
        // This is to print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text());
        })
    })
})