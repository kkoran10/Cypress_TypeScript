/// <reference types= 'cypress' />


const username = Cypress.env('username')
const password = Cypress.env('password')


describe('template spec', () => {

    before(() => {
                // logging in with valid credentials

        cy.login(username, password)
    })

    it ('user clicking on each of the CATEGORIES', () => {

        cy.intercept('POST', 'https://api.demoblaze.com/bycat').as('filterByCategory')


        cy.visit('/')

        // UI validation that user has clicked on the 'Phones' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Phones').click();

        cy.wait('@filterByCategory').then((object) => {
            expect(object.response.statusCode).to.eq(200);


            //const firstItem = object.response.body[0];
            const firstItem = object.response.body.Items[0];
            //expect(firstItem.cat).to.eq('phone');
           expect (firstItem).to.have.property('cat', 'phone');

        })


        // UI validation that user has clicked on the 'Laptops' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Laptops').click();

        // UI validation that user has clicked on the 'Monitors' category (ALTHOUGH NOT SURE HOW TO VALIDATE THIS AS URL DOES NOT CHANGE)
        cy.get('.list-group-item').contains('Monitors').click();

    })

       
})