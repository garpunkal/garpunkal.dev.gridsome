<template>
	<footer class="text-gray-300 bg-brand dark:text-gray-300 dark:bg-black ">
		<div class="container flex flex-wrap px-10 py-8 mx-auto">
			<UpArrow />
			<div class="flex flex-wrap justify-center w-full">
				<a href="https://github.com/garpunkal/garpunkal.dev" target="_blank" rel="noopener" class="inline-flex items-center font-bold text-white dark:text-gray-500 hover:text-brand-dark" title="garpunkal.github.io"
					><svg class="h-4 pr-2 text-white fill-current dark:text-gray-500 " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24px" height="100%">
						<title>garpunkal.dev</title>
						<path
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/>
					</svg>
					garpunkal.dev</a>
			</div>
			<div class="grid w-full grid-cols-1 gap-2 m-auto mt-10 text-center lg:w-2/3 md:grid-cols-6 md:text-sm">
				<div><a href="https://github.com/garpunkal/garpunkal.dev" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="github">GitHub</a></div>
				<div><a href="https://squidex.io/" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="SquidexCMS">SquidexCMS</a></div>
				<div><a href="https://gridsome.org/" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="Gridsome">Gridsome</a></div>
				<div><a href="https://vuejs.org/" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="Vue.js">Vue.js</a></div>
				<div><a href="https://tailwindcss.com/" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="TailwindCSS">TailwindCSS</a></div>
				<div><a href="https://vercel.com/" target="_blank" rel="noopener" class="text-white dark:text-gray-500 hover:text-brand-dark" title="Vercel">Vercel</a></div>
			</div>
		</div>
	</footer>
</template>
<script>
import UpArrow from "@/components/uparrow.vue";
export default { name: "SiteFooter", components: { UpArrow } };
</script>
