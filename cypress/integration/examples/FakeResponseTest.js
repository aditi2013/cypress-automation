/// <reference types="cypress" />
describe('My first test suite', function () {
    it('my first test case', function () {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "LSA",
                    "aisle": "2303"
                }
            ]
        }).as('bookRetrievals');
        cy.get("button[class='btn btn-primary']").click();
        cy.wait('@bookRetrievals');
        cy.get('p').should('have.text','Oops only 1 Book available');
    })
})