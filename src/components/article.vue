<template>
	<div class="flex-1">
		<div class="center">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<figure class="relative">
					<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="dark:brightness-50 dark:hover:brightness-100 rounded-t" loading="lazy" />
				</figure>
			</a>
		</div>
		<div class="p-6">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title">
				<h2 class="title-font text-lg font-medium text-white dark:text-gray-200 mb-3 min-h-56">
					{{ item.title }}
				</h2>
			</a>
			<p class="leading-relaxed mb-3 text-gray-300 dark:text-gray-400">
				{{ item.description }}
			</p>
			<div class="my-3">
				<div class="inline-flex items-center px-2 py-0.5 mr-1 rounded text-xs font-medium bg-brand text-gray-200 dark:bg-brand dark:text-gray-200" v-for="tag in item.tag_list" :key="tag">
					<a :href="`https://dev.to/t/` + tag" target="_blank" rel="noopener" :title="tag" class="text-white dark:text-gray-300 hover:text-brand-dark dark:hover:text-white">{{ tag }}</a>
				</div>
			</div>
			<div class="my-3">
				<div class="inline-flex items-center justify-end w-full px-2 py-0.5 mr-1 rounded text-xs font-medium">
				

					<span class="mx-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-flex" viewBox="0 0 20 20" fill="currentColor">
							<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
						</svg>
						{{item.positive_reactions_count }}
					</span>

					<span class="mx-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-flex" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
						</svg>

						{{ item.comments_count }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default { props: { item: { type: Object, required: true } } };
</script>
