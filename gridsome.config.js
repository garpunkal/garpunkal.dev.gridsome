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
			use: "@gridsome/plugin-sitemap",
		},
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
