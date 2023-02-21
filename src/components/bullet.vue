<template>
	<div class="flex flex-row items-center justify-start w-full md:justify-center lg:justify-start">
		<svg class="flex flex-grow-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" :class="cssclass || 'h-6 w-6 fill-current text-ocean dark:text-ocean p-1'" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill || 'currentColor'" role="img" viewBox="0 0 24 24">
			<title>{{ title }}</title>
			<path :d="svgPath" :stroke-linecap="strokeLineCap || 'currentColor'" :stroke-linejoin="strokeLineJoin || 'currentColor'" />
		</svg>
		<span class="flex-shrink pl-1">
			{{ title }}
		</span>
	</div>
</template>
<script>
export default {
	props: {
		title: { type: String, required: true },
		svgPath: { type: String, required: true },
		strokeWidth: { type: String },
		stroke: { type: String },
		fill: { type: String },
		strokeLineCap: { type: String },
		strokeLineJoin: { type: String },
		cssclass: { type: String },
	},
};
</script>
