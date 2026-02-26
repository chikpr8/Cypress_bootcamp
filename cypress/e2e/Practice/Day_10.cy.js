

/// <reference types="cypress" />


import 'cypress-mochawesome-reporter/register';

describe('File Upload Test', () => {

    beforeEach(()=>{
        cy.clearCookies()
    })

  it.only('Upload a file successfully', () => {

    cy.visit('https://the-internet.herokuapp.com/upload')

    // Upload file
    cy.get('#file-upload').selectFile('cypress/fixtures/sample.png')

    cy.get('#file-submit').click()

    // Validate success message
    cy.contains('File Uploaded!').should('be.visible')

    // Validate file name
    cy.get('#uploaded-files')
      .should('contain.text', 'sample.png')

  })


})

describe('File Download Test', () => {

  it('Download and verify file', () => {

    cy.visit('https://the-internet.herokuapp.com/download')

    cy.contains('some-file.txt').click()

    const filePath = 'cypress/downloads/some-file.txt'

    // Wait for download
    cy.readFile(filePath, { timeout: 10000 })
      .should('exist')

  })

})