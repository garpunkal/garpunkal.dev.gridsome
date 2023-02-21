<template>
	<section class=" bg-mirage dark:bg-gray-900 body-font" id="experience">
		<div class="container px-5 py-5 mx-auto md:py-14">
			<h3 class="w-full mt-10 mb-20 text-3xl font-extrabold tracking-tighter text-center text-santa-grey sm:text-65xl lg:text-4xl dark:text-pale-sky lg:mt-0" v-for="item in home.edges" :key="item.node.id">
				{{ item.node.experiencesLabel }}
			</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<div v-for="edge in items.edges" :key="edge.node.id">
					<Experience :item="edge.node" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Experience from "@/components/experience.vue";
export default {
	components: { Experience },
	props: {
		items: { type: Object, required: true },
		home: { type: Object, required: true },
	},
};
</script>
