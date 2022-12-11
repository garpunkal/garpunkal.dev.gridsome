const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const tailwindcssnesting = require("tailwindcss/nesting");

const postcssPlugins = [tailwindcssnesting(),tailwindcss(),autoprefixer()];

module.exports = {
	siteName: "garpunkal.dev",
	siteUrl: "https://garpunkal.dev",
	plugins: [		
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
		},
		{
			use: '@garpunkal/gridsome-source-devto-2022',
			options: {
			  typeName: 'DevToArticles',
			  apiKey: process.env.DEVTO_API_KEY, //get your API key from https://dev.to/settings/account
			}
		  }
	],
	// templates: {
	// 	DevToArticles: '/:title'
	// },
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
