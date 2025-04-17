/// <reference types="cypress" />
describe('Handle Calendar Events', function() {
    it('Handle Calendar Events' , function(){
        const monthNum ="6";
        const dateNum="15";
        const yearNum="2027";
        const expectedValues=[monthNum,dateNum,yearNum];
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
        cy.get('.react-date-picker__inputgroup').click();
        cy.get('.react-calendar__navigation__label__labelText').click();
        cy.get('.react-calendar__navigation__label__labelText').click();
        cy.contains("button", yearNum).click();
        cy.get('.react-calendar__year-view__months__month').eq(Number(monthNum)-1).click();
        cy.contains("abbr", dateNum).click();
        
        //Assertions
        cy.get('.react-date-picker__inputGroup__input').each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', expectedValues[index]);
        })
    });
});