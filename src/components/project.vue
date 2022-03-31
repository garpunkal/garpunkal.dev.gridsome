<template>
	<div class="center">
		<a
			v-if="item.url"
			:href="item.url"
			:title="item.title"
			target="_blank"
			rel="noopener"
		>
			<ProjectImage :item="item" :large="large" />
		</a>
		<div v-if="!item.url"><ProjectImage :item="item" :large="large" /></div>
	</div>
</template>
<script>
import ProjectImage from "@/components/projectImage.vue";
export default {
	components: { ProjectImage },
	props: {
		item: { type: Object, required: true },
		large: { type: Boolean, required: true },
	},
};
</script>
