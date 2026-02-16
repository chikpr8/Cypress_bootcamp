/**
 * Test Data for Account Registration Test
 */

const testData = {
    signupName: 'John Cypress',
    signupEmail: `john.cypress.${Date.now()}@testmail.com`, // Unique email with timestamp
    accountDetails: {
        title: 'Mr',
        password: 'Test@1234',
        day: '15',
        month: '3',
        year: '1990',
        firstName: 'John',
        lastName: 'Cypress',
        company: 'Automation Inc',
        address: '123 Test Street',
        address2: 'Apt 456',
        country: 'United States',
        state: 'California',
        city: 'San Francisco',
        zipcode: '94105',
        mobileNumber: '9876543210'
    }
};

export default testData;
