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
			"Gareth Wright - Technical Development Lead - C# .net MVC Developer - Umbraco Certified Expert - Vue, Tailwind and Front End Developer"
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
		rel: 'publisher',
		href: 'https://garpunkal.dev'
	})

	head.link.push({
		rel: 'canonical',
		href: 'https://garpunkal.dev'
	})

	head.meta.push(
		{ property: 'og:title', content: 'Gareth Wright - Technical Development Lead' },
		{ property: 'og:site_name', content: 'garpunkal.dev' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: 'https://garpunkal.dev' },
		{ property: 'og:image', content: 'https://en.gravatar.com/userimage/11972664/1f60f14a9a99398eefe01621f2c73860.png?size=400' },
		{ property: 'og:description', content: 'Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert.' },
		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:site', content: 'https://garpunkal.dev' },
		{ name: 'twitter:title', content: 'Gareth Wright - Technical Development Lead' },
		{ name: 'twitter:description', content: 'Technical Development Lead, Senior C# .net MVC Developer & Umbraco Certified Expert.' },
		{ name: 'twitter:creator', content: '@garpunkal' },
		{ name: 'twitter:image:src', content: 'https://en.gravatar.com/userimage/11972664/1f60f14a9a99398eefe01621f2c73860.png?size=400' },
	);

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
	rel:'me' ,
	href:'https://mastodon.social/@garpunkal'
	})

	head.bodyAttrs = {
		class: "bg-ocean dark:bg-black"
	};

	head.script.push({
		src: 'https://www.googletagmanager.com/gtag/js?id=G-3TJPB46KB1',
		async: true
	})
		
	const gIndex = head.meta.findIndex(e => e.name === 'generator')
	if (gIndex !== -1) head.meta.splice(gIndex, 1)

	if (isClient) {
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());
		gtag('config', 'G-3TJPB46KB1');
	}

	Vue.component("Layout", DefaultLayout);
}
   