const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../components/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config) => {
		config.resolve.plugins = [new TsconfigPathsPlugin()];
		config.module.rules = [
			...config.module.rules.map((rule) => {
				if (/svg/.test(rule.test)) {
					// Silence the Storybook loaders for SVG files
					return { ...rule, exclude: /\.svg$/i };
				}

				return rule;
			}),
			// Add your custom SVG loader
			{
				test: /\.svg$/i,
				use: ['@svgr/webpack', 'url-loader'],
			},
		];

		return config;
	},
};
