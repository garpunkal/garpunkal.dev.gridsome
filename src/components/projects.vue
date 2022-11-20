<template>
	<section class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font" id="projects">
		<div class="container px-5 py-5 mx-auto md:py-14">
			<div class="flex flex-wrap w-full mb-20">
				<h3 class="w-full mt-10 text-3xl font-extrabold tracking-tighter text-center text-gray-400 sm:text-65xl lg:text-4xl dark:text-gray-500 lg:mt-0">
					{{ title }}
				</h3>
			</div>
	

			<div class="flex flex-wrap -m-1 md:-m-2">
				<div class="flex flex-wrap w-full lg:flex-grow md:w-1/3 lg:w-1/3" v-for="project in items.edges.slice(0, 9)" :key="project.node.id">
					<div class="w-full p-1 md:p-2">
						<Project :item="project.node" :large="true" />						
					</div>
				</div>

				<div class="flex flex-wrap w-1/2 md:w-1/4 lg:w-1/4" v-for="project in this.orderedProjects(items.edges.slice(9, items.edges.length))" :key="project.node.id">
					<div class="w-full p-1 md:p-2">
						<Project :item="project.node" :large="false" />												
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Project from "@/components/project.vue";
var orderBy = require('lodash.orderby');

export default {
	components: { Project },
	props: {
		title: { type: String, required: true },
		items: { type: Object, required: true },
	},
	methods: {  
		orderedProjects: function(itemsSliced) { 
			return orderBy(itemsSliced, 'node.title');			
		} 
	}
};
</script>
