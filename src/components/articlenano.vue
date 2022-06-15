<template>
	<div class="grid grid-cols-12 gap-2 mb-5 md:mb-0">
		<div class="col-span-4">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full h-full">
				<figure class="relative">
					<img :src="item.cover_image" :alt="item.title" :title="item.alt" class="w-full h-auto block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100 border-2 border-brand" loading="lazy" />
				</figure>
			</a>
		</div>
		<div class="col-span-8 flex items-center pr-4">
			<a v-if="item.canonical_url" :href="item.canonical_url" target="_blank" rel="noopener" :title="item.title" class="w-full">
				<h2 class="title-font text-xs font-medium text-white dark:text-gray-200">
					{{ item.title }}
				</h2>				
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
     