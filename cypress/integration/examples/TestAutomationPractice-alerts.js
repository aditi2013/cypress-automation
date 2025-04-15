/// <reference types="cypress" />
describe('My second test suite', function() {
    it('my first test case of second test suite' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        // cy.get('[value="confirm"]').click();
        cy.get('#confirmbtn').click();
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });
    });

    // This is not from tutorial and this works on Electron browser
    it('Handling JS confirm - click cancel', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click();
        cy.on('window:confirm', ()=> false);
        cy.get('#result').contains('You clicked: Cancel');
    });
});