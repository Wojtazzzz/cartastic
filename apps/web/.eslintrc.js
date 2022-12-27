module.exports = {
	root: true,
	extends: ['next', 'cartastic', 'plugin:storybook/recommended', 'next/core-web-vitals'],
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
	},
};
