require("~/main.css");
import DefaultLayout from "~/layouts/Default.vue";
import Vue from "vue";

export default function (Vue, { router, head, isClient }) {

	head.meta.push({
		name: "keywords",
		content:
			"garpunkal, gareth wright, garpunkal.dev, technical development lead, senior backend developer, umbraco, umbraco certified developer, vendr, c# developer, dotnet, dotnet core, developer, umbraco certified expert, andover, hampshire, csharp, vue, tailwind, front end"
	});

	head.meta.push({
		name: "description",
		content:
			"Gareth Wright - Technical Development Lead - C# .net MVC Developer - Umbraco Certified Expert - Vue, Tailwind and Front End Developer - Umbraco Vendr Contributor"
	});

	head.meta.push({
		name: "author",
		content: "Gareth Wright"
	});

	head.meta.push({
		name: "theme-color",
		content: "#077DA0"
	});

	head.meta.push({
		name: "copyright",
		content: "Gareth Wright"
	});

	head.link.push({
		rel: 'canonical',
		href: 'https://garpunkal.dev'
	})

	head.meta.push(
		{ property: 'og:title', content: 'Gareth Wright - Technical Development Lead - Senior C# .net MVC Developer' },
		{ property: 'og:site_name', content: 'garpunkal.dev' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://garpunkal.dev' },
		{ property: 'og:image', content: 'https://en.gravatar.com/userimage/11972664/7a04387a8dd8f32161e728bc09686344.jpeg?size=400' },
		{ property: 'og:description', content: 'Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert.' },

		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:site', content: 'https://garpunkal.dev' },
		{ name: 'twitter:title', content: 'Gareth Wright - Technical Development Lead - Senior C# .net MVC Developer' },
		{ name: 'twitter:description', content: 'Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert.' },
		{ name: 'twitter:creator', content: '@garpunkal' },
		{ name: 'twitter:image:src', content: 'https://en.gravatar.com/userimage/11972664/7a04387a8dd8f32161e728bc09686344.jpeg?size=400' },
	);

	head.link.push({
		rel: 'preconnect',
		href: 'https://www.googletagmanager.com'
	})

	head.link.push({
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'crossOrigin'
	})

	head.link.push({
		rel: 'preconnect',
		href: 'https://fonts.googleapis.com'
	})

	head.link.push({
		rel: 'preconnect',
		href: 'https://www.google-analytics.com'
	})
	
	head.bodyAttrs = {
		class: "bg-brand dark:bg-black"
	};
 
	Vue.component("Layout", DefaultLayout);
}
