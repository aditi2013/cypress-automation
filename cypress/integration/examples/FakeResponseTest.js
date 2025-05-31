/// <reference types="cypress" />
describe('My first test suite for interceptor', function () {
    it('my first test case for interceptor', function () {
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
        cy.wait('@bookRetrievals').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1);
        });
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    })

    it('my second test case without interceptor', function () {
        var l = 0;
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.request({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('Array');
            l = response.body.length;
            cy.log("Length : " + l);
            cy.get("button[class='btn btn-primary']").click();
            cy.get('tr').should('have.length', l + 1);
        })

    })
})