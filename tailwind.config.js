const { findLastIndex } = require("lodash");

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
			display: ["sans-serif"],
			body: ["sans-serif"],
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
			colors: {
				cyan: "#9cdbff",
				brand: "#077da0",
				"brand-dark": "#111827",
				"brand-gold": "#e3b440",
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
				"screen/55": "55vh",
				"144": "40rem",
				"100pixel": "100px"
			}),
			boxShadow: {
				"2xl-black": '0 25px 50px -12px rgba(0, 0, 0, 5)',
				"2xl-gold": '10px 10px 80px -20px rgba(231,166,26,1)',
				"2xl-brand": '10px 10px 80px -20px rgba(7, 125, 160, 5)',
			}

		}
	},
	variants: {
		animation: ['responsive', 'hover'],
		visibility: ['hover', 'focus'],
		boxShadow: ['dark']
	},
	purge: {
		content:
			[
				'./src/**/*.html',
				'./src/**/*.vue',
				'./src/**/*.js'
			],
		options: {
			safelist: [
				"list-outside",
				"list-disc",
				"text-brand-gold"]
		}
	},
	darkMode: "class"
}  