<template>
	<a class="link" :href="href" target="_blank" rel="noopener">
		<svg xmlns="http://www.w3.org/2000/svg" :class="cssclass" :stroke-width="strokeWidth" :stroke="stroke" :fill="fill" role="img" viewBox="0 0 24 24">
				<title>{{title}}</title>
            <path :d="svgPath" :stroke-linecap="strokeLineCap" :stroke-linejoin="strokeLineJoin" :title="title" />
		</svg>
	</a>
</template>
<script>

export default {
	props: {
        href: {type:String, required:true },
		title: { type: String, required: true },
		svgPath: { type: String, required: true },
		strokeWidth: { default: "", type: String },
		stroke: { default: "", type: String },
		fill: { default: "currentColor", type: String},
		strokeLineCap: { default: "currentColor", type: String },
		strokeLineJoin: { default: "currentColor", type: String },
		cssclass: { default: "h-6 w-6 md:h-7 md:w-7 fill-current text-gray-600 hover:text-brand dark:text-brand dark:hover:text-white hover:animate-pulse", type: String },
	},
};
</script>
