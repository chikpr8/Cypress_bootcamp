/// <reference types="cypress" />


describe('Handle JavaScript Alert Box', () => {

    it('Should handle alert box and validate message', () => {

        // Step 1: Visit the URL
        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Step 2: Listen to alert and validate text
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('I am an alert box!')
        })

        // Step 3: Click on Alert Box button
        cy.contains('Alert Box').click()

        // Step 4: Validate text after alert is accepted
        cy.get('#demotwo')
            .should('be.visible')
            .and('have.text', 'You clicked on OK!')

        // | Step                       | Explanation           |
        // | -------------------------- | --------------------- |
        // | `cy.visit()`               | Opens the application |
        // | `cy.on('window:alert')`    | Captures JS alert     |
        // | `expect(alertText)`        | Asserts alert message |
        // | `cy.contains('Alert Box')` | Clicks the button     |
        // | `cy.get('#demotwo')`       | Validates result text |
    })

    it('Should click OK on confirm alert', () => {

        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Handle confirm alert - OK
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Confirm pop up with OK and Cancel button')
            return true   // Click OK
        })

        // Click Confirm Alert Box button
        cy.contains('Confirm Alert Box').click()

        // Validate result message
        cy.get('#demo')
            .should('be.visible')
            .and('have.text', 'You clicked on OK!')
    })

    it('Should click Cancel on confirm alert', () => {

        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Handle confirm alert - Cancel
        cy.on('window:confirm', (confirmText) => {
            expect(confirmText).to.equal('Confirm pop up with OK and Cancel button')
            return false   // Click Cancel
        })

        // Click Confirm Alert Box button
        cy.contains('Confirm Alert Box').click()

        // Validate result message
        cy.get('#demo')
            .should('be.visible')
            .and('have.text', 'You clicked on Cancel!')
        //       Concept	Explanation
        //         window:confirm	Captures confirm popup
        //         return true	Simulates clicking OK
        //         return false	Simulates clicking Cancel
        // Cypress behavior	Automatically handles browser popups
    })

    it('Should accept prompt and enter Yes', () => {

        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Stub prompt with Yes
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Yes')
        })

        // Click Prompt Alert Box
        cy.contains('Prompt Alert Box').click()

        // Validate success message
        cy.get('#demoone')
            .should('be.visible')
            .and('have.text', 'Thanks for Liking Automation')
    })

    it('Should accept prompt and enter No', () => {

        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Stub prompt with No
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('No')
        })

        // Click Prompt Alert Box
        cy.contains('Prompt Alert Box').click()

        // Validate message
        cy.get('#demoone')
            .should('be.visible')
            .and('have.text', 'Sad to hear it ! ')
    })

    it('Should cancel the prompt alert', () => {

        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        // Stub prompt with null (Cancel)
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })

        // Click Prompt Alert Box
        cy.contains('Prompt Alert Box').click()

        // Validate cancel message
        cy.get('#demoone')
            .should('be.visible')
            .and('have.text', 'User cancelled the prompt.')

        //             | Concept            | Explanation                    |
        // | ------------------ | ------------------------------ |
        // | `window.prompt`    | Captures prompt popup          |
        // | `cy.stub()`        | Overrides browser behavior     |
        // | `.returns('Yes')`  | Simulates typing Yes           |
        // | `.returns(null)`   | Simulates clicking Cancel      |
        // | Cypress limitation | Cannot type directly in prompt |

    })
})


// | Concept            | Explanation                    |
// | ------------------ | ------------------------------ |
// | `window.prompt`    | Captures prompt popup          |
// | `cy.stub()`        | Overrides browser behavior     |
// | `.returns('Yes')`  | Simulates typing Yes           |
// | `.returns(null)`   | Simulates clicking Cancel      |
// | Cypress limitation | Cannot type directly in prompt |


import 'cypress-iframe'

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



