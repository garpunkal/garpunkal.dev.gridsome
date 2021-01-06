module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	theme: {
		screens: {
			sm: "640px",
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
		extend: {
			colors: {
				cyan: "#9cdbff",
				brand: "#077da0",
				"brand-dark": "#111827",
			},
			spacing: {
				"96": "24rem",
				"128": "32rem",
			},
			height: (theme) => ({
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
				"screen/75": "75vh",
			}),
		},
	},
	purge: {
		layers: ["components", "utilities", "pages", "layouts"],
		content: ["./src/**/*.html", "./src/**/*.vue"],
	},
	darkMode: "media",
};
