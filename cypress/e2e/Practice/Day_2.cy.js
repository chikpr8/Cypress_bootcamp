//Type of actions in cypress/e2e/Practice/Day_2.js


describe('My First Test Suite - Day 2', () => {

        it('Common chaining methods in cypress locators', () => {
                cy.visit('https://automationexercise.com/login')
                //Common chaining methods in cypress locators :

                // //.eq():-
                        

                // cy.get('[action="/signup"]>input').eq(1).type('praveen');
                // cy.get('[action="/signup"]>input').eq(2).type('Testing123@gmail.com');


                // //.find():-
                // cy.get('form[action="/signup"]').find('input[type="text"]').type('Praveen');
                // cy.get('form[action="/signup"]').find('input[type="email"]').type('Testing123@gmail.com');
                


                // // .first():-
                // cy.get('form[action="/signup"]').find('input[type="text"]').first().type('Praveen');
                // cy.get('form[action="/signup"]').find('input[type="email"]').first().type('Test@gmail.com');


                // .last():- 
                //cy.get('[class="searchform"]>input').last().type('testing@gmail.com');


                // .children():-
                //  cy.get('form[action="/signup"]').children('input[type="text"]').type('Praveen');
                //  cy.get('form[action="/signup"]').children('input[type="email"]').type('Test@gmail.com');


                // .parent():-
                // cy.get('input[data-qa="signup-name"]').parent().find('input[data-qa="signup-name"]').type('Parent Input');
                // cy.get('input[data-qa="signup-email"]').parent().find('input[data-qa="signup-email"]').type('Parent Input Email');


                // .parents():-
                // cy.get('input[data-qa="signup-name"]').parents('form').find('input[data-qa="signup-name"]').type('Parents Input');
                // cy.get('input[data-qa="signup-email"]').parents('form').find('input[data-qa="signup-email"]').type('Parents Input Email');


                // .closest():-
                // cy.get('input[data-qa="signup-name"]').closest('form').find('input[data-qa="signup-name"]').type('Closest Input');
                // cy.get('input[data-qa="signup-email"]').closest('form').find('input[data-qa="signup-email"]').type('Closest Input Email');


                // .siblings():-
                // cy.get('input[data-qa="signup-name"]').siblings('input[data-qa="signup-email"]').type('Sibling Input Email');
                // cy.get('input[data-qa="signup-email"]').siblings('input[data-qa="signup-name"]').type('Sibling Input Name');

                // .next():-
                // cy.get('input[data-qa="signup-email"]').next().next().type('Next to Next Input name');
                // cy.get('input[data-qa="signup-name"]').next().type('Next Input Email');


                // .prev():-
                 //cy.get('input[data-qa="signup-email"]').prev().type('Previous Input Name');

                // .filter():-

                // cy.get('form[action="/signup"]>input').filter('[type="email"]').type('Filter Input Email');
                // cy.get('form[action="/signup"]>input').filter('[type="text"]').type('Filter Input Name');

                // .not():-     
               // cy.get('form[action="/signup"]>input').not('[type="hidden"]').not('[type="text"]').type('test@gmail.com');


                // .contains():-
                
                //cy.get('[type="submit"]').contains('Signup').click();

                // .as():-
                //  cy.get('form[action="/signup"]>input[type="text"]').as('username');
                //         cy.get('@username').type('Praveen');


                //.then():-
                // cy.get('form[action="/signup"]>input[type="email"]').then( ($el) => {
                //         const emailField = $el;
                //         cy.wrap(emailField).type('Testing123@gmail.com');
                // });


                //.each():-    
                // cy.get('form[action="/signup"]>input[type="text"], form[action="/signup"]>input[type="email"]').each( ($el, index, $list) => {
                //         if (index === 0) {
                //                 cy.wrap($el).type('Praveen');
                //         }
                //         if (index === 1) {
                //                 cy.wrap($el).type('Testing123@gmail.com');
                //         }
                // });  

                //.should():-
                // cy.get('input[data-qa="signup-name"]').should('be.visible').and('be.enabled').and('have.attr', 'placeholder', 'Name').type('Praveen');
                // cy.get('input[data-qa="signup-email"]').should('be.visible').and('be.enabled').and('have.attr', 'placeholder', 'Email Address').type('Testing123@gmail.com')    ;


                //.and():-
                // cy.get('input[data-qa="signup-name"]').should('be.visible').and('be.enabled').and('have.attr', 'placeholder', 'Name');
                // cy.get('input[data-qa="signup-email"]').should('be.visible').and('be.enabled').and('have.attr', 'placeholder', 'Email Address');
                
                //.contains:-

                 


                        

        })
})