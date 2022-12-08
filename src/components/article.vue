<template>
	<div class="flex-1">
		<div class="center">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<figure class="relative">
					<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="dark:brightness-50 dark:hover:brightness-100 rounded-t" loading="lazy" width="404" height="170" />
				</figure>
			</a>
		</div>
		<div class="p-6">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<h2 class=" text-lg font-bold text-white dark:text-gray-400 mb-3 min-h-56">
					{{ item.title }}
				</h2>
			</a>
			<p class="leading-relaxed mb-3 text-gray-300 dark:text-gray-400">
				{{ item.description }}
			</p>
			<div class="inline-flex items-center px-4 py-2 my-1 mr-1 rounded text-xs font-medium bg-brand text-gray-200 dark:bg-brand dark:text-gray-200" v-for="tag in item.tag_list" :key="tag">
				<a :href="`https://dev.to/t/` + tag" target="_blank" rel="noopener" :title="tag" class="text-white dark:text-gray-300 hover:text-brand-dark dark:hover:text-white">{{ tag }}</a>
			</div>
		</div>
	</div>
</template>
<script>
export default { props: { item: { type: Object, required: true } } };
</script>
