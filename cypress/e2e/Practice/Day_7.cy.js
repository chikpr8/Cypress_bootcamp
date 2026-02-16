
import 'cypress-iframe'
/// <reference types="cypress" />
describe('Multiple Tabs in Cypress', () => {

    it('Handles new tab by opening in same tab', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.get('a[href="/windows/new"]')
            .invoke('removeAttr', 'target')
            .click()

        cy.contains('New Window').should('be.visible')
    })

    // it.only('Stubs window.open', () => {
    //     cy.visit('https://the-internet.herokuapp.com/windows')

    //     cy.window().then((win) => {
    //         cy.stub(win, 'open').callsFake((url) => {
    //             win.location.href = url
    //         })
    //     })

    //     cy.contains('Click Here').click()
    //     cy.contains('New Window').should('be.visible')
    // })


})