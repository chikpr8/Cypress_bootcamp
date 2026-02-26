describe("Hybrid Test - API + UI", () => {

    it("Create user via API and login via UI", () => {

        const user = {
            name: "PraveenQA",
            // email: `qa${Date.now()}@test.com`,
            email: "qa1772077883864@test.com",
            password: "Test@1234"
        }

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

            const body = JSON.parse(response.body)
            expect(body.responseCode).to.eq(201)

            // UI Login
            cy.visit("https://automationexercise.com/")
            cy.contains("Signup / Login").click()
            cy.get("[data-qa='login-email']").type(user.email)
            cy.get("[data-qa='login-password']").type(user.password)
            cy.get("[data-qa='login-button']").click()

            cy.contains("Logged in as").should("contain", user.name)

        })

    })


    describe("Add to cart intercept", () => {
        const user = {
            name: "PraveenQA",
            // email: `qa${Date.now()}@test.com`,
            email: "qa1772077883864@test.com",
            password: "Test@1234"
        }

        it.only("Login and intercept add to cart", () => {

            cy.visit("https://automationexercise.com/")
            cy.contains("Signup / Login").click()
            cy.get("[data-qa='login-email']").type(user.email)
            cy.get("[data-qa='login-password']").type(user.password)
            cy.get("[data-qa='login-button']").click()

            cy.contains("Logged in as").should("be.visible")

            // ✅ Intercept BEFORE clicking add to cart
            cy.intercept("GET", "**/add_to_cart/**").as("cartRequest")

            cy.contains("Products").click()

            cy.get(".product-image-wrapper")
                .first()
                .within(() => {
                    cy.contains("Add to cart").click({ force: true })
                })

            cy.wait("@cartRequest").then((interception) => {
                expect(interception.response.statusCode).to.eq(200)
            })

        })

    })
})