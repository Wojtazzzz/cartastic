module.exports = {
	root: true,
	extends: ['custom'],
	plugins: ['eslint-plugin-storybook'],
	rules: {
		'@next/next/no-head-element': 'off',
	},
};
