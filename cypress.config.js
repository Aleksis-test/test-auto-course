const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: 'http://www.automationpractice.pl',
		redirectionLimit: 3,
		retries: {
			runMode: 1,
			openMode: 1,
		},
		watchForFileChanges: true,
		chromeWebSecurity: false,
		viewportHeight: 1920,
		viewportWidth: 1800,
		waitForAnimations: true,
		testIsolation: false,
	},
});
