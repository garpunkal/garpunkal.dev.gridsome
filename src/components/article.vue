<template>
	<div class="flex-1">
		<div class="center">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<figure class="relative">
					<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="rounded-t-lg dark:brightness-50 dark:hover:brightness-100" loading="lazy" width="404" height="170" />
				</figure>
			</a>
		</div>
		<div class="p-6">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<h2 class="mb-3 text-lg font-bold text-white dark:text-santa-grey min-h-56">
					{{ item.title }}
				</h2>
			</a>
			<p class="mb-3 leading-relaxed text-iron dark:text-santa-grey">
				{{ item.description }}
			</p>
			<div class="inline-flex items-center px-4 py-2 my-1 mr-1 text-xs font-medium text-mercury rounded bg-ocean dark:bg-ocean dark:text-mercury" v-for="tag in item.tag_list" :key="tag">
				<a :href="`https://dev.to/t/` + tag" target="_blank" rel="noopener" :title="tag" class="text-white dark:text-iron hover:text-mirage dark:hover:text-white">{{ tag }}</a>
			</div>
		</div>
	</div>
</template>
<script>
export default { props: { item: { type: Object, required: true } } };
</script>