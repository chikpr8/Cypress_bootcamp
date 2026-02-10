//Type of actions in cypress/e2e/Practice/Day_2.js
/// <reference types="cypress" />

describe('My First Test Suite - Day 3', () => {

    it('keyboard and mouse actions', () => {
        cy.visit('https://automationexercise.com/login')
        //keyboard and mouse actions :

        // .type():-
        cy.get('input[data-qa="signup-name"]').type('Praveen');
        cy.get('input[data-qa="signup-email"]').type('Testing123@gmail.com');

        // .clear():-
        cy.get('input[data-qa="signup-name"]').clear();
        cy.get('input[data-qa="signup-email"]').clear();

        // .click():-
        cy.get('input[data-qa="signup-name"]').type('Praveen');
        cy.get('input[data-qa="signup-email"]').type('Testing123dfbdfb4@gmail.com');
        cy.get('button[data-qa="signup-button"]').click();

        // .dblclick():-
        cy.get('a[href="/login"]').dblclick();

        // .rightclick():-
        cy.get('a[href="/login"]').rightclick();

        // .check():-
        cy.visit('https://automationexercise.com/signup')
        cy.get('input[data-qa="signup-name"]').type('Praveen');
        cy.get('input[data-qa="signup-email"]').type('Testing123dfbdfb4@gmail.com');
        cy.get('button[data-qa="signup-button"]').click();
        // cy.get('input[id="id_gender1"]').check();
        // cy.get('input[id="id_gender2"]').check();

        // // // .uncheck():-
        // // cy.get('input[id="id_gender2"]').uncheck();

        // // .select():-
        // cy.get('select[id="days"]').select('10');
        // cy.get('select[id="months"]').select('May');
        // cy.get('select[id="years"]').select('1990');

        // // .scrollIntoView():-
        // cy.get('input[id="newsletter"]').scrollIntoView().check();
        // cy.get('input[id="optin"]').scrollIntoView().check();

        // // .scrollTo():-
        // cy.scrollTo('bottom');
        // cy.wait(2000);
        // cy.scrollTo('top');


        // // .trigger():-
        // cy.get('input[id="id_gender1"]').trigger('mouseover').check();
        // cy.get('input[id="id_gender2"]').trigger('mouseover').check();



        // // .focus():-
        // cy.get('[data-qa="create-account"]').focus().click();

        // // .blur():-
        // cy.get('input[id="first_name"]').focus().blur();    

        // // .hover():-

        // // Cypress does not have a built-in hover method, but we can simulate it using trigger
        // // cy.get('selector').trigger('mouseover');
        // // Example:
        // cy.get('input[id="id_gender1"]').trigger('mouseover').check();

        // .type() with special characters:-
        cy.get('input[id="first_name"]').type('Praveen{backspace}{del}{selectall}{esc}');

        //enter key press simulation:-
        //cy.get('input[id="first_name"]').type('Praveen{enter}');

        //tab key press simulation:-
        // cy.get('input[id="first_name"]').type('Praveen{tab}');
        // cy.focused().type('Kumar');

        //space key press simulation:-
        //cy.get('input[id="first_name"]').type('Praveen{space}Kumar');

        //caps lock simulation (using shift key):-
        // cy.get('input[id="first_name"]').type('{shift} praveen {enter}');

    })

    

})