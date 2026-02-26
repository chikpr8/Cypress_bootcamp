describe("ReqRes API Test", () => {

  const baseUrl = "https://reqres.in/api";

  it("GET Users with API Key", () => {

    cy.request({
      method: "GET",
      url: `${baseUrl}/users?page=2`,
      headers: {
        "x-api-key": "reqres_acd3de0bd5254d23873b88c8d3d73373"
      }
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);

    });

  });

  describe("ReqRes POST API Test", () => {

  it("POST - Create User", () => {

    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "x-api-key": "reqres_acd3de0bd5254d23873b88c8d3d73373"
      },
      body: {
        name: "Praveen",
        job: "QA Engineer"
      }
    }).then((response) => {

      // ✅ Validate Status Code
      expect(response.status).to.eq(201);

      // ✅ Validate Response Body
      expect(response.body.name).to.eq("Praveen");
      expect(response.body.job).to.eq("QA Engineer");

      // ✅ Validate Auto Generated Fields
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");

    });

  });

describe("ReqRes PUT API Test", () => {

  it("PUT - Update User", () => {

    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres_acd3de0bd5254d23873b88c8d3d73373"
      },
      body: {
        name: "Praveen Updated",
        job: "Senior QA Engineer"
      }
    }).then((response) => {

      // ✅ Status Code
      expect(response.status).to.eq(200);

      // ✅ Validate Response Body
      expect(response.body.name).to.eq("Praveen Updated");
      expect(response.body.job).to.eq("Senior QA Engineer");

      // ✅ Validate Updated Timestamp
      expect(response.body).to.have.property("updatedAt");

    });

  });
describe("ReqRes PATCH API Test", () => {

  it("PATCH - Update User Job Only", () => {

    cy.request({
      method: "PATCH",
      url: "https://reqres.in/api/users/2",
      headers: {
       "x-api-key": "reqres_acd3de0bd5254d23873b88c8d3d73373"
      },
      body: {
        job: "Automation Architect"
      }
    }).then((response) => {

      // ✅ Validate Status Code
      expect(response.status).to.eq(200);

      // ✅ Validate Only Updated Field
      expect(response.body.job).to.eq("Automation Architect");

      // ✅ Validate Timestamp
      expect(response.body).to.have.property("updatedAt");

    });

  });


  describe("ReqRes DELETE API Test", () => {

  it("DELETE - Remove User", () => {

    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers: {
        "x-api-key": "reqres_acd3de0bd5254d23873b88c8d3d73373"
      }
    }).then((response) => {

      // ✅ Validate Status Code
      expect(response.status).to.eq(204);

      // ✅ Validate Empty Body
      expect(response.body).to.be.empty;

    });

  });

});
});
});


});

});