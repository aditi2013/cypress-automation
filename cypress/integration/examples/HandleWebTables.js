/// <reference types="cypress" />
describe('Handle web tables', function() {
    it('Handle Web table' , function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                });
            }
        });
    });
    // This is not part of tutorial. This is additionally searched from internet
    it('Experimental test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.contains('Master Selenium Automation in simple Python Language').parent('tr').find('td:nth-child(3)').should('have.text', '25');
    })
})