<template>
	<section class="text-pale-sky bg-mirage dark:text-iron dark:bg-gray-900 body-font" id="projects">
		<div class="container px-5 py-5 mx-auto md:py-14">
			<h3 class="w-full mt-10 mb-20 text-3xl font-extrabold tracking-tighter text-center text-santa-grey sm:text-65xl lg:text-4xl dark:text-pale-sky lg:mt-0">
				{{ title }}
			</h3>
			<div class="flex flex-wrap -m-1 md:-m-2">			
				<div class="flex flex-wrap w-full lg:flex-grow md:w-1/3 lg:w-1/3 p-2" v-for="project in items.edges.slice(0, 9)" :key="project.node.id">
					<Project :item="project.node" :large="true" />
				</div>				
				<div class="flex flex-wrap w-1/2 md:w-1/4 lg:w-1/4 p-2" v-for="project in this.orderedProjects(items.edges.slice(9, items.edges.length))" :key="project.node.id">
					<Project :item="project.node" :large="false" />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Project from "@/components/project.vue";
var orderBy = require("lodash.orderby");

export default {
	components: { Project },
	props: {
		title: { type: String, required: true },
		items: { type: Object, required: true },
	},
	methods: {
		orderedProjects: function(itemsSliced) {
			return orderBy(itemsSliced, "node.title");
		},
	},
};
</script>
 