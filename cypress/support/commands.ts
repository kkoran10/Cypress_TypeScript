// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to log in.
         * @param username - The username for login
         * @param password - The password for login
         */
        login(username: string, password: string): Chainable<void>
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.session('username', () => {
        cy.intercept('POST', '/login').as('loginAPI')
        // navigate to the URL
        cy.visit('/')
        // log in with valid credentials
        cy.get('#login2').click()
        cy.get('#logInModal').should("be.visible");
        cy.wait(1000)
        cy.get('#loginusername').type(username)
        cy.get('#loginpassword').type(password)
        cy.contains('.btn-primary', 'Log in').click()

        // API validation that user is logged in
        cy.wait('@loginAPI').then((object) => {
            expect(object.response?.statusCode).to.eq(200)
        })

        //UI interface validations of the successful login
        cy.get('#nameofuser').should('contain', username)
        cy.get('#logout2').should('contain', 'Log out')

    })
})

