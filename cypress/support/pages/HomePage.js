/**
 * Home Page Object Model
 * Contains selectors and methods for home page interactions
 */

class HomePage {
    // ════════════════════════════════════════════════════════════════════════════
    // PAGE ELEMENTS (Selectors)
    // ════════════════════════════════════════════════════════════════════════════

    // Header elements
    getHeaderLogo() {
        return cy.get('img[alt="Website for automation practice"]');
    }

    getSignupLoginButton() {
        return cy.contains('a', 'Signup / Login');
    }

    getHomeLink() {
        return cy.contains('a', 'Home');
    }

    // ════════════════════════════════════════════════════════════════════════════
    // PAGE METHODS
    // ════════════════════════════════════════════════════════════════════════════

    /**
     * Navigate to home page
     */
    navigateToHome() {
        cy.visit('http://automationexercise.com/');
        cy.log('✅ Navigated to Home Page');
    }

    /**
     * Verify home page is loaded
     */
    verifyHomePageLoaded() {
        cy.log('🔍 Verifying home page visibility...');
        
        // Check if header logo is visible (main home page indicator)
        this.getHeaderLogo().should('be.visible');
        cy.log('✅ Header logo verified');
        
        // Check if page has loaded by looking for common page elements
        cy.get('body').should('be.visible');
        
        // Wait for page to be fully loaded
        cy.get('.container').should('exist');
        
        cy.log('✅ Home page verified successfully');
    }

    /**
     * Click on Signup/Login button
     */
    clickSignupLoginButton() {
        cy.log('🔘 Clicking Signup/Login button...');
        this.getSignupLoginButton().click();
        cy.log('✅ Signup/Login button clicked');
    }

    /**
     * Click on Home link
     */
    clickHomeLink() {
        cy.log('🏠 Clicking Home link...');
        this.getHomeLink().click();
        cy.log('✅ Home link clicked');
    }
}

export default HomePage;
