/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['source.unsplash.com', 'loremflickr.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack', 'url-loader'],
		});

		return config;
	},
};

module.exports = nextConfig;
