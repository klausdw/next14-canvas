// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['fabric'],
	},
	webpack: (config) => {
		config.resolve.alias.canvas = false
		config.resolve.alias.encoding = false
		return config
	},
}

module.exports = nextConfig
