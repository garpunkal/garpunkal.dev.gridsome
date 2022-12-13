<template>
	<div class="grid grid-cols-12 gap-2 mb-5 md:mb-0">
		<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full h-full col-span-4">
			<figure class="relative">
				<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="w-full h-auto block rounded-lg lg:rounded-l-lg object-fit object-left-top dark:brightness-50 dark:hover:brightness-100 border-4 border-brand" loading="lazy" width="172" height="72" />
			</figure>
		</a>
		<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full col-span-8 flex items-center pr-4">
			<h2 class=" text-sm font-medium text-white dark:text-gray-200">
				{{ item.title }}
			</h2>
		</a>
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
