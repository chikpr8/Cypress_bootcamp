// Navigate to Home Page
Cypress.Commands.add('visitHomePage', () => {
  cy.visit('https://automationexercise.com/');
  cy.contains('Home').should('be.visible');
});

// Click Signup/Login
Cypress.Commands.add('clickSignupLogin', () => {
  cy.contains('Signup / Login').click();
  cy.contains('New User Signup!').should('be.visible');
});

// Fill Signup Name & Email
Cypress.Commands.add('signupUser', (name, email) => {
  cy.get('input[data-qa="signup-name"]').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[data-qa="signup-button"]').click();
});

// Fill Account Information
Cypress.Commands.add('fillAccountInformation', (user) => {

  if (user.title === "Mr") {
    cy.get('#id_gender1').check();
  } else {
    cy.get('#id_gender2').check();
  }

  cy.get('#password').type(user.password);
  cy.get('#days').select(user.day);
  cy.get('#months').select(user.month);
  cy.get('#years').select(user.year);

  cy.get('#newsletter').check();
  cy.get('#optin').check();
});

// Fill Address Details
Cypress.Commands.add('fillAddressDetails', (user) => {

  cy.get('#first_name').type(user.firstName);
  cy.get('#last_name').type(user.lastName);
  cy.get('#company').type(user.company);
  cy.get('#address1').type(user.address1);
  cy.get('#address2').type(user.address2);
  cy.get('#country').select(user.country);
  cy.get('#state').type(user.state);
  cy.get('#city').type(user.city);
  cy.get('#zipcode').type(user.zipcode);
  cy.get('#mobile_number').type(user.mobileNumber);
});

// Create Account
Cypress.Commands.add('createAccount', () => {
  cy.get('button[data-qa="create-account"]').click();
  cy.contains('Account Created!').should('be.visible');
});

// Continue Button
Cypress.Commands.add('clickContinue', () => {
  cy.get('a[data-qa="continue-button"]').click();
});

// Delete Account
Cypress.Commands.add('deleteAccount', () => {
  cy.contains('Delete Account').click();
  cy.contains('Account Deleted!').should('be.visible');
});

Cypress.Commands.add("createUserAPI", (user) => {
  cy.request({
    method: "POST",
    url: "https://automationexercise.com/api/createAccount",
    form: true,
    body: {
      name: user.name,
      email: user.email,
      password: user.password,
      title: "Mr",
      birth_date: "10",
      birth_month: "January",
      birth_year: "1995",
      firstname: "Praveen",
      lastname: "Raj",
      company: "QA Company",
      address1: "Test Street",
      country: "India",
      zipcode: "600001",
      state: "TN",
      city: "Chennai",
      mobile_number: "9999999999"
    }
  }).then((response) => {

    expect(response.status).to.eq(200)

    const parsedBody = JSON.parse(response.body)

    expect(parsedBody.responseCode).to.eq(201)
    expect(parsedBody.message).to.include("User created")

  })
})