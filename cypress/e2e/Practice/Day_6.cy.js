
import 'cypress-iframe'
/// <reference types="cypress" />
describe('Single iFrame - Automation Testing Demo', () => {

    it('Type text inside single iframe', () => {

        cy.visit('https://demo.automationtesting.in/Frames.html')

        cy.get('#singleframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('input[type="text"]')
            .type('Hello Cypress')

    })

})

describe('Nested iFrame - Automation Testing Demo', () => {

    it('Type text inside nested iframe', () => {

        cy.visit('https://demo.automationtesting.in/Frames.html')

        // Open nested iframe tab
        cy.contains('Iframe with in an Iframe').click()

        // Parent iframe
        cy.get('iframe[src="MultipleFrames.html"]')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('iframe')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
            .find('input[type="text"]')
            .type('Nested iframe handled')

    })

})

describe('Browser Navigation', () => {

    it.only('visit', () => {

        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.contains('Iframe with in an Iframe').click()
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.reload()
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(1)





    })

})



