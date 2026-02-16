/**
 * Login & Signup Page Object Model
 * Contains selectors and methods for authentication interactions
 */

class LoginSignupPage {
    // ════════════════════════════════════════════════════════════════════════════
    // LOGIN SECTION (Top right)
    // ════════════════════════════════════════════════════════════════════════════

    getLoginEmail() {
        return cy.get('[data-qa="login-email"]');
    }

    getLoginPassword() {
        return cy.get('[data-qa="login-password"]');
    }

    getLoginButton() {
        return cy.get('[data-qa="login-button"]');
    }

    getLoginErrorMessage() {
        return cy.contains('Your email or password is incorrect!');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SIGNUP SECTION (Left side)
    // ════════════════════════════════════════════════════════════════════════════

    getNewUserSignupHeading() {
        return cy.contains('h2', 'New User Signup!');
    }

    getSignupName() {
        return cy.get('[data-qa="signup-name"]');
    }

    getSignupEmail() {
        return cy.get('[data-qa="signup-email"]');
    }

    getSignupButton() {
        return cy.get('[data-qa="signup-button"]');
    }

    getSignupErrorMessage() {
        return cy.contains('Email Address already exist!');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE METHODS
    // ════════════════════════════════════════════════════════════════════════════

    /**
     * Verify New User Signup section is visible
     */
    verifyNewUserSignupVisible() {
        cy.log('🔍 Verifying New User Signup section...');
        this.getNewUserSignupHeading().should('be.visible');
        cy.log('✅ New User Signup section is visible');
    }

    /**
     * Enter name in signup form
     */
    enterSignupName(name) {
        cy.log(`📝 Entering signup name: ${name}`);
        this.getSignupName().type(name);
        cy.log('✅ Name entered');
    }

    /**
     * Enter email in signup form
     */
    enterSignupEmail(email) {
        cy.log(`📧 Entering signup email: ${email}`);
        this.getSignupEmail().type(email);
        cy.log('✅ Email entered');
    }

    /**
     * Click Signup button
     */
    clickSignupButton() {
        cy.log('🔘 Clicking Signup button...');
        this.getSignupButton().click();
        cy.log('✅ Signup button clicked');
    }

    /**
     * Fill signup form and submit
     */
    signupWithCredentials(name, email) {
        this.verifyNewUserSignupVisible();
        this.enterSignupName(name);
        this.enterSignupEmail(email);
        this.clickSignupButton();
    }

    /**
     * Verify Login section
     */
    verifyLoginSectionVisible() {
        cy.log('🔍 Verifying Login section...');
        cy.contains('h2', 'Login to your account').should('be.visible');
        cy.log('✅ Login section is visible');
    }

    /**
     * Enter login email
     */
    enterLoginEmail(email) {
        cy.log(`📧 Entering login email: ${email}`);
        this.getLoginEmail().type(email);
        cy.log('✅ Login email entered');
    }

    /**
     * Enter login password
     */
    enterLoginPassword(password) {
        cy.log('🔐 Entering login password...');
        this.getLoginPassword().type(password);
        cy.log('✅ Password entered');
    }

    /**
     * Click login button
     */
    clickLoginButton() {
        cy.log('🔘 Clicking Login button...');
        this.getLoginButton().click();
        cy.log('✅ Login button clicked');
    }

    /**
     * Login with credentials
     */
    loginWithCredentials(email, password) {
        this.verifyLoginSectionVisible();
        this.enterLoginEmail(email);
        this.enterLoginPassword(password);
        this.clickLoginButton();
    }
}

export default LoginSignupPage;
