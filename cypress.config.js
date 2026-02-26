const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports/my-custom-folder",  // folder
    reportFilename: "registration_test_report",    // file
    overwrite: false,                              // keep multiple runs
    html: true,                                    // generate HTML
    json: true,                                    // generate JSON (needed for charts)
    charts: true,                                  // ENABLE charts
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "https://automationexercise.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    }
  }
});

export default defineConfig({
  e2e: {
    baseUrl: "https://reqres.in/api",
    setupNodeEvents(on, config) {
      config.env.apiKey = "reqres-free-v1";
      return config;
    }
  }
});