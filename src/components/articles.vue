<template>
	<section class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font" id="content">
		<div class="container px-5 py-5 md:py-14 mx-auto">
			<div class="flex w-full flex-wrap mb-20">
				<a class="w-full" href="https://dev.to/garpunkal" target="_blank" rel="noopener" title="dev.to">
					<h3 class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-center w-full mt-10">
						Articles
					</h3>
				</a>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div v-for="edge in items.edges.slice(0, 3)" :key="edge.node.id">
					<div class="rounded-lg shadow-lg border-4 border-brand dark:border-brand h-full">
						<Article :item="edge.node" />
					</div>
				</div> 
			</div>
			<div class="lg:mx-14">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
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
import ArticleStub from "@/components/articlestub.vue";
import ArticleNano from "@/components/articlenano.vue";
export default {
	components: { Article, ArticleStub, ArticleNano },
	props: { items: { type: Object, required: true } },
};
</script>
