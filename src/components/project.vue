<template>
	<div class="center" v-if="item.isWinner">		
		<a v-if="item.url" :href="item.url" :title="item.title" target="_blank" rel="noopener">
			<ProjectImageAward :item="item" :large="large" />
		</a>
		<div v-if="!item.url"><ProjectImage :item="item" :large="large" /></div>	
	</div>
	<div class="center" v-else>		
		<a v-if="item.url" :href="item.url" :title="item.title" target="_blank" rel="noopener">
			<ProjectImage :item="item" :large="large" />
		</a>
		<div v-if="!item.url"><ProjectImage :item="item" :large="large" /></div>	
	</div>
	
</template>
<script>
import ProjectImage from "@/components/projectImage.vue";
import ProjectImageAward from "@/components/projectImageAward.vue";

export default {
	components: { ProjectImage, ProjectImageAward},
	props: {
		item: { type: Object, required: true },
		large: { type: Boolean, required: true },
	},
};
</script>
