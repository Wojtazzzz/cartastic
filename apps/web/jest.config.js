const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	setupFilesAfterEnv: ['./jest.setup.ts'],
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules/'],
	modulePaths: ['./'],
};

module.exports = createJestConfig(customJestConfig);
