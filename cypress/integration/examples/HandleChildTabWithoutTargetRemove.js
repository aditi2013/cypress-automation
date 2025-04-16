/// <reference types="cypress" />
describe('Handle child window test suite', function() {
    it('Handle child window test case' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#opentab').then(function(el){
            const url = el.prop('href');
            cy.visit(url);
            cy.origin(url, ()=>{
                cy.get("div.sub-menu-bar a[href*='about']").click();
            })
        });
    });
})