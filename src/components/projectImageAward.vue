<template>
	<figure class="relative hover:scale-150 ease-out duration-500 transform-gpu hover:z-50">
		<img
			v-if="item.position === 'left top'"
			:alt="item.image.alt"
			:title="item.image.alt"
			:src="item.image.url"
			class="w-full h-full block rounded-lg lg:rounded-l-lg object-fit object-left-top dark:brightness-50 dark:hover:brightness-100 border-brand-gold dark:border-brand-dark border-2 md:border-4 shadow-2xl-gold dark:shadow-2xl-brand"
			:width="isLarge() ? 615 : 300"
			:height="isLarge() ? 340 : 165"
			loading="lazy"
		/>
		<img
			v-else
			:alt="item.image.alt"
			:title="item.image.alt"
			:src="item.image.url"
			class="w-full h-full block rounded-lg lg:rounded-l-lg object-fit object-top dark:brightness-50 dark:hover:brightness-100 border-brand-gold dark:border-brand-dark border-2 md:border-4 shadow-2xl-gold dark:shadow-2xl-brand"
			:width="isLarge() ? 615 : 300"
			:height="isLarge() ? 340 : 165"
			loading="lazy"
		/>
		<figcaption class="absolute left-0 bottom-0 px-4 py-1 bg-brand-gold dark:bg-brand-dark text-xs text-black dark:text-gray-400 rounded-bl-lg rounded-tr-lg ">
			<span class="hidden lg:inline-block"><strong>Award Winner</strong>:</span> {{ item.title }}
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
