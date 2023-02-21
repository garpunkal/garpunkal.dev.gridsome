<template>
	<a class="inline-flex justify-center link" :href="href" target="_blank" rel="noopener">
		<svg xmlns="http://www.w3.org/2000/svg" :class="cssclass || 'h-6 w-6 md:h-7 md:w-7 fill-current text-davy-grey hover:text-ocean dark:text-ocean dark:hover:text-white hover:animate-pulse'" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill || 'currentColor'" role="img" viewBox="0 0 24 24">
			<title>{{ title }}</title>
			<path :d="svgPath" :stroke-linecap="strokeLineCap || 'currentColor'" :stroke-linejoin="strokeLineJoin || 'currentColor'" :title="title" />
		</svg>
	</a>
</template>
<script>
export default {
	props: {
		href: { type: String, required: true },
		title: { type: String, required: true },
		svgPath: { type: String, required: true },
		strokeWidth: { dtype: String },
		stroke: { type: String },
		fill: { type: String },
		strokeLineCap: { type: String },
		strokeLineJoin: { type: String },
		cssclass: { type: String },
	},
};
</script>
