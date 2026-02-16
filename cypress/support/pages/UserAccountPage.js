/**
 * User Account Page Object Model
 * Contains selectors and methods for logged-in user interactions
 */

class UserAccountPage {
    // ════════════════════════════════════════════════════════════════════════════
    // HEADER SECTION (Logged in user)
    // ════════════════════════════════════════════════════════════════════════════

    getLoggedInAsText() {
        // Look for logged in indicator - more flexible selector
        return cy.contains(/Logged in as/i);
    }

    getUsernameInHeader() {
        // Get the logged in username from header
        return cy.get('body').then(($body) => {
            const text = $body.text();
            const match = text.match(/Logged in as\s+(.+?)(?:\n|$| \|)/);
            return match ? match[1].trim() : null;
        });
    }

    // ════════════════════════════════════════════════════════════════════════════
    // SIDEBAR / MENU OPTIONS
    // ════════════════════════════════════════════════════════════════════════════

    getDeleteAccountButton() {
        return cy.contains('a', 'Delete Account');
    }

    getLogoutButton() {
        return cy.contains('a', 'Logout');
    }

    getDownloadInvoiceLink() {
        return cy.contains('a', 'Download Invoice');
    }

    getMyDownloadsLink() {
        return cy.contains('a', 'My Downloads');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // ACCOUNT DELETED PAGE
    // ════════════════════════════════════════════════════════════════════════════

    getAccountDeletedHeading() {
        return cy.contains('h2', /ACCOUNT DELETED/i);
    }

    getContinueButtonOnDeletePage() {
        return cy.get('[data-qa="continue-button"]');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE METHODS
    // ════════════════════════════════════════════════════════════════════════════

    /**
     * Verify user is logged in
     */
    verifyUserLoggedIn(username) {
        cy.log(`🔍 Verifying user logged in as: ${username}`);
        cy.contains('Logged in as').should('be.visible');
        cy.log('✅ User is logged in');
    }

    /**
     * Verify logged in as message contains username
     */
    verifyLoggedInAsUsername() {
        cy.log('🔍 Verifying logged in as text...');
        this.getLoggedInAsText().should('be.visible');
        cy.log('✅ Logged in as text is visible');
    }

    /**
     * Click Delete Account button
     */
    clickDeleteAccountButton() {
        cy.log('🔘 Clicking Delete Account button...');
        this.getDeleteAccountButton().click();
        cy.log('✅ Delete Account button clicked');
    }

    /**
     * Verify account deleted message
     */
    verifyAccountDeletedMessage() {
        cy.log('🔍 Verifying Account Deleted message...');
        this.getAccountDeletedHeading().should('be.visible');
        cy.log('✅ Account Deleted message verified');
    }

    /**
     * Click Continue button on account deleted page
     */
    clickContinueButtonOnDeletePage() {
        cy.log('🔘 Clicking Continue button on delete page...');
        this.getContinueButtonOnDeletePage().click();
        cy.log('✅ Continue button clicked');
    }

    /**
     * Logout
     */
    logout() {
        cy.log('🚪 Clicking Logout...');
        this.getLogoutButton().click();
        cy.log('✅ Logged out');
    }
}

export default UserAccountPage;
