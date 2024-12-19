/// <reference types= 'cypress' />


const username = Cypress.env('username')
const password = Cypress.env('password')


describe('template spec', () => {

    before(() => {
        cy.login(username, password)
    })


    it('user logs in successfully with valid creds ', () => {


        //logging in with valid credentials
        cy.visit('/')



        // UI validation that user is logged in
        cy.get('#nameofuser').should('contain', username)
        cy.get('.card').first().click()
        cy.get('.name').should('be.visible')
        cy.get('.btn').contains('Add to cart').click()
        cy.on('window:alert',(txt)=>{
//Assertion
            expect(txt).to.contains('Product added');
        })
    })


})

