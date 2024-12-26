/// <reference types= 'cypress' />


const username = Cypress.env('username')
const password = Cypress.env('password')


describe('template spec', () => {

    before(() => {
        cy.login(username, password)
    })

    it ('user clicking on each of the CATEGORIES', () => {
        // logging in with valid credentials
        cy.visit('/')

        // UI validation that user has clicked on the 'Phones' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Phones').click();

        // UI validation that user has clicked on the 'Laptops' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Laptops').click();

        // UI validation that user has clicked on the 'Monitors' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Monitors').click();

    })

       
})