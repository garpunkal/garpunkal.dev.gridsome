<template>
	<a :href="'#' + id" title="down">
		<svg class="w-6 h-6 animate-bounce" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="white" width="24px" height="100%">
			<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</a>
</template>
<script>
export default {
	name: "DownArrow",
	props: { id: { type: String, required: true } },
};
</script>
