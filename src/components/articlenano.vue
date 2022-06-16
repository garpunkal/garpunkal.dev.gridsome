<template>
	<div class="grid grid-cols-12 gap-2 mb-5 md:mb-0">
		<div class="col-span-4">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full h-full">
				<figure class="relative">
					<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="w-full h-auto block rounded-lg lg:rounded-l-lg object-fit object-left-top dark:brightness-50 dark:hover:brightness-100 border-4 border-brand" loading="lazy" />
				</figure>
			</a>
		</div>
		<div class="col-span-8 flex items-center pr-4">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full">
				<h2 class="title-font text-sm font-medium text-white dark:text-gray-200">
					{{ item.title }}
				</h2>
				<div class="inline-flex items-start justify-start w-full text-xs font-medium">
					<span class="mr-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-flex align-bottom" viewBox="0 0 20 20" fill="currentColor">
							<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
						</svg>
						{{ item.positive_reactions_count }}
					</span>
					<span class="mx-2">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-flex  align-bottom" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
						</svg>

						{{ item.comments_count }}
					</span>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
};
</script>
