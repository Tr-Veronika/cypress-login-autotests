const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for all E2E tests
    baseUrl: "https://login.qa.studio",

    // Browser viewport size
    viewportWidth: 1920,
    viewportHeight: 1080,

    // Block Yandex Metrica requests to avoid unnecessary tracking
    blockHosts: ["*mc.yandex.ru"],

    // Node.js event listeners configuration
    // setupNodeEvents(on, config) {},
  },
});
