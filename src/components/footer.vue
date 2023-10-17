<template>
	<footer :if="items.edges.length">
		<div v-for="item in items.edges" :key="item.node.id" class="text-santa-grey bg-ocean dark:text-iron dark:bg-black"
		v-if="item.displayComponent" >
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
				<div class="grid w-full grid-cols-1 gap-2 m-auto mt-10 text-center lg:w-2/3 md:grid-cols-6 md:text-sm">
					<a :if="item.node.footerLinks.length" v-for="footerLink in item.node.footerLinks" :key="footerLink.title" :href="footerLink.url" 
					:title="footerLink.title" target="_blank" rel="noopener" class="text-white hover:text-mirage dark:text-pale-sky">{{ footerLink.title }}</a>
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
