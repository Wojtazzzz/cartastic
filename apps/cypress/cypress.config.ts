import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {},
		viewportWidth: 1560,
		viewportHeight: 768,
		baseUrl: 'http://localhost:3000',
		fileServerFolder: './',
		supportFile: './support/e2e.ts',
		screenshotsFolder: './screenshots/',
		videosFolder: './videos/',
		specPattern: './e2e/**/*.ts',
		scrollBehavior: 'bottom',
	},
});
