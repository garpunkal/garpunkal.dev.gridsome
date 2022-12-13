const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const tailwindcssnesting = require("tailwindcss/nesting");

const postcssPlugins = [tailwindcssnesting(), tailwindcss(), autoprefixer()];

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
			use: '@garpunkal/gridsome-source-devto',
			options: {
				typeName: 'DevToArticles',
				apiKey: process.env.DEVTO_API_KEY,
			}
		},
		{
			use: "gridsome-plugin-manifest",
			options: {
				background_color: "#111827",
				icon_path: "./src/favicon.png",
				name: "garpunkal.dev",
				short_name: "App",
				theme_color: "#077da0",
				lang: "en",
			},
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
	icon: {
		favicon: {
			src: './src/favicon.png',
			sizes: [16, 32, 96]
		},
		touchicon: {
			src: './src/favicon.png',
			sizes: [76, 152, 120, 167, 180],
			precomposed: true
		}
	}
};
