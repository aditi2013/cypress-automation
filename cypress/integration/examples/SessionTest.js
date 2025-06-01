/// <reference types="cypress" />
import neatCSV from 'neat-csv';

let productName
describe('My first test suite for Session Login', function () {
    it('It is logged in through the local storage', async () => {
        cy.LoginApi().then(() => {
            cy.visit('https://rahulshettyacademy.com/client', {
                onBeforeLoad: (window) => {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });
        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get('[routerlink*="cart"').click();
        cy.contains("Checkout").click();
        cy.get('[placeholder*="Country"]').type('ind');
        cy.get('.ta-results button').each(($el, index, $list) => {
            if ($el.text() === ' India') {
                cy.wrap($el).click();
            }
        });
        cy.get('.action__submit').click();
        cy.wait(2000);
        //cy.contains('Click To Download Order Details in CSV').click();
        cy.get('.order-summary button').click();
        cy.readFile(Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_jaydiph.csv')
            .then(async function (text) {
                const csv = await neatCSV(text);
                console.log(csv);
                const actualProductCSV = csv[0]["Product Name"]
                console.log(actualProductCSV)
                expect(productName).to.equal(actualProductCSV)
            });

    });
});