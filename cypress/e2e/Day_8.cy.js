
/// <reference types="cypress" />





/*
╔════════════════════════════════════════════════════════════════════════════╗
║                    TEST CASE 1: REGISTER USER                              ║
├════════════════════════════════════════════════════════════════════════════┤
║  Objective:                                                                ║
║  Verify that a user can successfully register a new account,               ║
║  log in, delete the account, and confirm deletion.                         ║
║                                                                             ║
║  Test Steps:                                                               ║
║  1. Launch browser                                                          ║
║  2. Navigate to URL 'http://automationexercise.com'                        ║
║  3. Verify that home page is visible successfully                           ║
║  4. Click on 'Signup / Login' button                                        ║
║  5. Verify 'New User Signup!' is visible                                    ║
║  6. Enter name and email address                                             ║
║  7. Click 'Signup' button                                                    ║
║  8. Verify that 'ENTER ACCOUNT INFORMATION' is visible                      ║
║  9. Fill account details: Title, Name, Email, Password, Date of Birth       ║
║ 10. Select checkbox 'Sign up for our newsletter!'                           ║
║ 11. Select checkbox 'Receive special offers from our partners!'             ║
║ 12. Fill address details:                                                    ║
║        - First Name, Last Name                                               ║
║        - Company                                                             ║
║        - Address, Address2                                                   ║
║        - Country, State, City                                                ║
║        - Zipcode, Mobile Number                                              ║
║ 13. Click 'Create Account' button                                            ║
║ 14. Verify that 'ACCOUNT CREATED!' is visible                                ║
║ 15. Click 'Continue' button                                                  ║
║ 16. Verify that 'Logged in as username' is visible                           ║
║ 17. Click 'Delete Account' button                                            ║
║ 18. Verify that 'ACCOUNT DELETED!' is visible                                ║
║ 19. Click 'Continue' button                                                  ║
║                                                                             ║
║  Expected Result:                                                           ║
║  User should be able to successfully register, log in, delete              ║
║  the account, and return to the home page without errors.                  ║
╚════════════════════════════════════════════════════════════════════════════╝
*/

describe('Test Case 1: Register User using Fixture & Custom Commands', () => {

  let userData;
  let uniqueEmail;

  before(() => {
    cy.fixture('FormFilldata').then((data) => {
      userData = data;
      uniqueEmail = "testuser" + Date.now() + "@mail.com";
    });
  });

  it('Should register and delete user successfully', () => {

    // 1-3
    cy.visitHomePage();

    // 4-5
    cy.clickSignupLogin();

    // 6-7
    cy.signupUser(userData.name, uniqueEmail);

    // 8
    cy.contains('Enter Account Information').should('be.visible');

    // 9-11
    cy.fillAccountInformation(userData);

    // 12
    cy.fillAddressDetails(userData);

    // 13-14
    cy.createAccount();

    // 15
    cy.clickContinue();

    // 16
    cy.contains(`Logged in as ${userData.name}`).should('be.visible');

    // 17-18
    cy.deleteAccount();
    cy.clickContinue();
  });
});
