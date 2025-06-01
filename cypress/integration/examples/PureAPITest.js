/// <reference types="cypress" />
describe('My first test suite for API Testing', function () {
    it('my first test case for API Testing', function () {
        // https://rahulshettyacademy.com/Library/Addbook.php
        cy.request('POST', 'https://rahulshettyacademy.com/Library/Addbook.php',
            {
                "name": "Learn Appium Automation with Java",
                "isbn": "abcdef",
                "aisle": "9540",
                "author": "John foe"
            }
        ).then(function(response){
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('Msg','successfully added');
            expect(response.body).to.have.property('ID','abcdef9540');
        });
    })
})
