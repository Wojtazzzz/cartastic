module.exports = {
	root: true,
	extends: ['next', 'cartastic', 'plugin:storybook/recommended', 'next/core-web-vitals'],
	parserOptions: {
		tsconfigRootDir: __dirname,
	},
	rules: {},
};
