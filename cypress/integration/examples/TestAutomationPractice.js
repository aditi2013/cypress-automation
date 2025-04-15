/// <reference types="cypress" />
describe('My second test suite', function() {
    it('my first test case of second test suite' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
        cy.wait(2000);
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.wait(2000);
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        cy.get('select').select('option2').should('have.value', 'option2');

        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el, index, $list)=>{
            if ($el.text()==='India') {
                cy.wrap($el).click();
            }
        })
        // Auto complete
        cy.get('#autocomplete').should('have.value', 'India');
        // Visible Invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        // Radio buttons
        cy.get('input[value="radio2"]').check().should('be.checked');
    });
})