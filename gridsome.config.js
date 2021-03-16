const tailwind = require("tailwindcss");

const postcssPlugins = [tailwind()];

module.exports = {
	siteName: "garpunkal.dev",
	siteUrl: "https://garpunkal.dev",
	favicon: "./src/images/profile.jpg",
	plugins: [
		{
			use: "gridsome-plugin-gtm",
			options: {
				id: "GTM-54WJV5",
				enabled: true,
				debug: false,
			},
		},
		{
			use: "@gridsome/plugin-sitemap"
		},
		{
			use: 'gridsome-plugin-robots-txt',
			options: {
				host: 'https://garpunkal.dev',
				sitemap: 'https://garpunkal.dev/sitemap.xml',
				policy: [
					{
						userAgent: "Googlebot",
						allow: "/",						
						crawlDelay: 2
					},
					{
						userAgent: "*",
						allow: "/",						
						crawlDelay: 10
					}
				]
			}
		}
	],
	css: {
		loaderOptions: {
			postcss: {
				plugins: postcssPlugins,
			},
		},
	},
	chainWebpack: (config) => {
		config.resolve.alias.set("@images", "@/assets/images");
	},
	images: {
		defaultBlur: 0
	},
};
