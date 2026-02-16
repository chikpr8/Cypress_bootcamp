/**
 * Account Details Page Object Model
 * Contains selectors and methods for account creation and management
 */

class AccountDetailsPage {
    // ════════════════════════════════════════════════════════════════════════════
    // ACCOUNT INFORMATION SECTION
    // ════════════════════════════════════════════════════════════════════════════

    getAccountInformationHeading() {
        return cy.contains('h2', /ENTER ACCOUNT INFORMATION/i);
    }

    getTitleMr() {
        return cy.get('#id_gender1');
    }

    getTitleMrs() {
        return cy.get('#id_gender2');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getDayDropdown() {
        return cy.get('#days');
    }

    getMonthDropdown() {
        return cy.get('#months');
    }

    getYearDropdown() {
        return cy.get('#years');
    }

    getNewsletterCheckbox() {
        return cy.get('#newsletter');
    }

    getOffersCheckbox() {
        return cy.get('#optin');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // ADDRESS SECTION
    // ════════════════════════════════════════════════════════════════════════════

    getFirstNameField() {
        return cy.get('[data-qa="first_name"]');
    }

    getLastNameField() {
        return cy.get('[data-qa="last_name"]');
    }

    getCompanyField() {
        return cy.get('[data-qa="company"]');
    }

    getAddress1Field() {
        return cy.get('[data-qa="address"]');
    }

    getAddress2Field() {
        return cy.get('[data-qa="address2"]');
    }

    getCountryDropdown() {
        return cy.get('[data-qa="country"]');
    }

    getStateField() {
        return cy.get('[data-qa="state"]');
    }

    getCityField() {
        return cy.get('[data-qa="city"]');
    }

    getZipcodeField() {
        return cy.get('[data-qa="zipcode"]');
    }

    getMobileNumberField() {
        return cy.get('[data-qa="mobile_number"]');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // BUTTONS
    // ════════════════════════════════════════════════════════════════════════════

    getCreateAccountButton() {
        return cy.get('[data-qa="create-account"]');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SUCCESS MESSAGES
    // ════════════════════════════════════════════════════════════════════════════

    getAccountCreatedHeading() {
        return cy.contains('h2', /ACCOUNT CREATED/i);
    }

    getContinueButton() {
        return cy.get('[data-qa="continue-button"]');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE METHODS
    // ════════════════════════════════════════════════════════════════════════════

    /**
     * Verify account information form is visible
     */
    verifyAccountInformationVisible() {
        cy.log('🔍 Verifying Account Information section...');
        this.getAccountInformationHeading().should('be.visible');
        cy.log('✅ Account Information section is visible');
    }

    /**
     * Select title (Mr or Mrs)
     */
    selectTitle(title) {
        cy.log(`👤 Selecting title: ${title}`);
        if (title.toLowerCase() === 'mr') {
            this.getTitleMr().check();
        } else if (title.toLowerCase() === 'mrs') {
            this.getTitleMrs().check();
        }
        cy.log('✅ Title selected');
    }

    /**
     * Enter password
     */
    enterPassword(password) {
        cy.log('🔐 Entering password...');
        this.getPasswordField().type(password);
        cy.log('✅ Password entered');
    }

    /**
     * Select date of birth
     */
    selectDateOfBirth(day, month, year) {
        cy.log(`📅 Selecting date of birth: ${day}/${month}/${year}`);
        this.getDayDropdown().select(day);
        this.getMonthDropdown().select(month);
        this.getYearDropdown().select(year);
        cy.log('✅ Date of birth selected');
    }

    /**
     * Check newsletter subscription
     */
    checkNewsletter() {
        cy.log('📬 Checking newsletter subscription...');
        this.getNewsletterCheckbox().check();
        cy.log('✅ Newsletter checked');
    }

    /**
     * Check special offers
     */
    checkSpecialOffers() {
        cy.log('🎁 Checking special offers...');
        this.getOffersCheckbox().check();
        cy.log('✅ Special offers checked');
    }

    /**
     * Enter first name
     */
    enterFirstName(firstName) {
        cy.log(`👤 Entering first name: ${firstName}`);
        this.getFirstNameField().type(firstName);
        cy.log('✅ First name entered');
    }

    /**
     * Enter last name
     */
    enterLastName(lastName) {
        cy.log(`👤 Entering last name: ${lastName}`);
        this.getLastNameField().type(lastName);
        cy.log('✅ Last name entered');
    }

    /**
     * Enter company
     */
    enterCompany(company) {
        cy.log(`🏢 Entering company: ${company}`);
        this.getCompanyField().type(company);
        cy.log('✅ Company entered');
    }

    /**
     * Enter address 1
     */
    enterAddress1(address) {
        cy.log(`📍 Entering address: ${address}`);
        this.getAddress1Field().type(address);
        cy.log('✅ Address entered');
    }

    /**
     * Enter address 2
     */
    enterAddress2(address) {
        cy.log(`📍 Entering address 2: ${address}`);
        this.getAddress2Field().type(address);
        cy.log('✅ Address 2 entered');
    }

    /**
     * Select country
     */
    selectCountry(country) {
        cy.log(`🌍 Selecting country: ${country}`);
        this.getCountryDropdown().select(country);
        cy.log('✅ Country selected');
    }

    /**
     * Enter state
     */
    enterState(state) {
        cy.log(`📍 Entering state: ${state}`);
        this.getStateField().type(state);
        cy.log('✅ State entered');
    }

    /**
     * Enter city
     */
    enterCity(city) {
        cy.log(`🏙️ Entering city: ${city}`);
        this.getCityField().type(city);
        cy.log('✅ City entered');
    }

    /**
     * Enter zipcode
     */
    enterZipcode(zipcode) {
        cy.log(`📮 Entering zipcode: ${zipcode}`);
        this.getZipcodeField().type(zipcode);
        cy.log('✅ Zipcode entered');
    }

    /**
     * Enter mobile number
     */
    enterMobileNumber(mobileNumber) {
        cy.log(`📱 Entering mobile number: ${mobileNumber}`);
        this.getMobileNumberField().type(mobileNumber);
        cy.log('✅ Mobile number entered');
    }

    /**
     * Click Create Account button
     */
    clickCreateAccountButton() {
        cy.log('🔘 Clicking Create Account button...');
        this.getCreateAccountButton().click();
        cy.log('✅ Create Account button clicked');
    }

    /**
     * Fill all account details
     */
    fillAccountDetails(accountData) {
        this.verifyAccountInformationVisible();
        this.selectTitle(accountData.title);
        this.enterPassword(accountData.password);
        this.selectDateOfBirth(accountData.day, accountData.month, accountData.year);
        this.checkNewsletter();
        this.checkSpecialOffers();
        this.enterFirstName(accountData.firstName);
        this.enterLastName(accountData.lastName);
        this.enterCompany(accountData.company);
        this.enterAddress1(accountData.address);
        this.enterAddress2(accountData.address2);
        this.selectCountry(accountData.country);
        this.enterState(accountData.state);
        this.enterCity(accountData.city);
        this.enterZipcode(accountData.zipcode);
        this.enterMobileNumber(accountData.mobileNumber);
    }

    /**
     * Verify account created message
     */
    verifyAccountCreatedMessage() {
        cy.log('🔍 Verifying Account Created message...');
        this.getAccountCreatedHeading().should('be.visible');
        cy.log('✅ Account Created message verified');
    }

    /**
     * Click Continue button
     */
    clickContinueButton() {
        cy.log('🔘 Clicking Continue button...');
        this.getContinueButton().click();
        cy.log('✅ Continue button clicked');
    }
}

export default AccountDetailsPage;
