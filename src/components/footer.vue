<template>
	<footer :if="items.edges.length">
		<div v-for="item in items.edges" :key="item.node.id" class="text-santa-grey bg-ocean dark:text-iron dark:bg-black"
	>
			<div class="container flex flex-wrap px-10 py-8 mx-auto">
				<UpArrow />
				<div class="flex flex-wrap justify-center w-full" :if="item.node.githubSource.length">
					<a :href="item.node.githubSource.url" :title="item.node.githubSource.title" target="_blank" rel="noopener" class="inline-flex items-center font-bold text-white hover:text-mirage dark:text-pale-sky "
						><svg class="h-4 pr-2 text-white fill-current hover:text-mirage dark:text-pale-sky " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24px" height="100%">
							<title>{{item.node.githubSource.title}}</title>
							<path
								:d="item.node.githubSource.svgPath"
							/>
						</svg>
						{{item.node.githubSource.title}}</a
					>
				</div>
				<div class="w-full md:w-2/3 m-auto mt-10 mb-3 flex flex-wrap justify-center md:justify-between text-center">
 					<a :if="item.node.footerLinks.length" v-for="footerLink in item.node.footerLinks" v-if="footerLink.displayComponent" :key="footerLink.title" :href="footerLink.url" 
					:title="footerLink.title" target="_blank" rel="noopener" class="w-full md:w-auto text-white hover:text-mirage dark:text-pale-sky">{{ footerLink.title }}</a>
				</div>
			</div>
		</div>
	</footer>
</template>
<script>
import UpArrow from "@/components/uparrow.vue";
export default {
	name: "Footer",
	props: {
		items: { type: Object, required: true },
	},
	components: { UpArrow },
};
</script>
