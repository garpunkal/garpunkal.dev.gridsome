<template>
	<figure class="relative">
		<img
			v-if="item.position === 'left top'"
			:alt="item.image.alt"
			:title="item.image.alt"
			:src="item.image.url"
			class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100 border-brand dark:border-brand-dark border-2 md:border-3 "
			:width="isLarge() ? 615 : 300"
			:height="isLarge() ? 340 : 165"
			loading="lazy"
		/>
		<img
			v-else
			:alt="item.image.alt"
			:title="item.image.alt"
			:src="item.image.url"
			class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-top dark:brightness-50 dark:hover:brightness-100 border-brand dark:border-brand-dark border-2 md:border-3 "
			:width="isLarge() ? 615 : 300"
			:height="isLarge() ? 340 : 165"
			loading="lazy"
		/>
		<figcaption class="absolute left-0 bottom-0 px-4 py-1 bg-brand dark:bg-brand-dark text-xs text-gray-200 dark:text-gray-400 rounded-bl-lg rounded-tr-lg ">
			{{ item.title }}
		</figcaption>
	</figure>
</template>
<script>
export default {
	props: {
		item: { type: Object, required: true },
		large: { type: Boolean, required: true },
	},
	methods: {
		isLarge: function() {
			return this.large;
		},
	},
};
</script>
