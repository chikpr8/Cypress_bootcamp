


/// <reference types="cypress" />


import 'cypress-mochawesome-reporter/register';


describe('Login Test Case using Environment Variables', () => {

  it('Should login successfully with valid credentials', () => {

    // Get credentials from env file
    const email = Cypress.env('credentials').email;
    const password = Cypress.env('credentials').password;

    // Visit home page
    cy.visit('/');

    // Click Signup / Login
    cy.contains('Signup / Login').click();

    // Verify Login section visible
    cy.contains('Login to your account').should('be.visible');

    // Enter email & password
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(password);

    // Click Login button
    cy.get('[data-qa="login-button"]').click();

    // Verify successful login
    cy.contains('Logged in as').should('be.visible');
  });

});