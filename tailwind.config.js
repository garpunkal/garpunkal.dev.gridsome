const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			display: ["Open Sans", "sans-serif"],
			body: ["Open Sans", "sans-serif"],
		},
		borderWidth: {
			default: "1px",
			"0": "0",
			"2": "2px",
			"4": "4px",
		},
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			'56': "56px"
		},
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				cyan: "#9cdbff",
				brand: "#077da0",
				"brand-dark": "#111827",
			},
			spacing: {
				"96": "24rem",
				"128": "32rem",
			},
			width: (theme) => ({
				"100pixel": "100px"
			}),
			height: (theme) => ({
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
				"screen/75": "75vh",
				"100pixel": "100px"
			})

		}
	},
	variants: {
		animation: ['responsive', 'hover'],
		visibility: ['hover', 'focus']
	},
	purge: {
		enabled: process.env.NODE_ENV = "production",
		content: ['./src/**/*.{html,md,vue,njk}'],
		options: {
			safelist: [
				'w-1/8',
				'w-2/8',
				'w-3/8',
				'w-4/8',
				'w-5/8',
				'w-6/8',
				'w-7/8',
				'list-inside',
				'list-outside',
				'list-disc',
				'items-center',
				'mr-2',
				'flex-row'				
			]						
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms')
	],
	darkMode: "class"
}  