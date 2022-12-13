<template>
	<section class=" bg-brand-dark dark:bg-gray-900 body-font" id="content">
		<div class="container px-5 py-5 mx-auto md:py-14">
			<a class="w-full" href="https://dev.to/garpunkal" target="_blank" rel="noopener" title="dev.to">
				<h3 class="w-full mt-10 mb-20 text-3xl font-extrabold tracking-tighter text-center text-gray-400 sm:text-65xl lg:text-4xl dark:text-gray-300">
					Articles
				</h3>
			</a>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div v-for="edge in items.edges.slice(0, 3)" :key="edge.node.id">
					<div class="h-full rounded-lg shadow-lg ring-4 ring-brand dark:ring-brand">
						<Article :item="edge.node" />
					</div>
				</div>
			</div> 
			<div class="lg:mx-14">
				<div class="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2">
					<div v-for="edge in items.edges.slice(3, 11)" :key="edge.node.id">
						<div><ArticleNano :item="edge.node" /></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import Article from "@/components/article.vue";
import ArticleNano from "@/components/articlenano.vue";
export default {
	components: { Article, ArticleNano },
	props: { items: { type: Object, required: true } },
};
</script>
