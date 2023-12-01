const { defineConfig } = require("cypress-cucumber-preprocessor");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    defaultCommandTimeout: 5000,
    execTimeout: 20000,
    pageLoadTimeout: 10000,
    excludeSpecPattern: ["*.js", "*.md"]
  },
});