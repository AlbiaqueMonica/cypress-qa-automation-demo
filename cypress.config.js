const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  //video: true,
  allowCypressEnv: false,
  env: {
    email: process.env.USER_EMAIL,
    password: process.env.USER_PASSWORD
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
