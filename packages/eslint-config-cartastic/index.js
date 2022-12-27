/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'turbo',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	parserOptions: {
		project: ['tsconfig.json'],
	},
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
		react: {
			version: 'detect',
		},
	},
	ignorePatterns: ['build/', '.turbo/', 'dist/', 'node_modules/', '*.js', '*.jsx'],
	rules: {
		'@typescript-eslint/require-await': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'import/order': 'off',
		'import/no-unresolved': 'off',
	},
};
