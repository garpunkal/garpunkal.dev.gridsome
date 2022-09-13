<template>
	<figure :class="!isLarge() ? `relative hover:scale-150 ease-out duration-500 transform-gpu hover:z-50` : `relative`">
		<picture v-if="item.position === 'left top'">
			<source type="image/webp" :srcset="item.image.webp" />
			<img
				:alt="item.image.alt"
				:title="item.image.alt"
				:src="item.image.url"
				class="w-full h-full block rounded-lg lg:rounded-l-lg object-fit object-left-top dark:brightness-50 dark:hover:brightness-100 ring-brand-gold dark:ring-brand-dark ring-2 md:ring-4 shadow-2xl-gold dark:shadow-2xl-brand"
				:width="isLarge() ? 615 : 300"
				:height="isLarge() ? 340 : 165"
				loading="lazy"
			/>
		</picture>

		<picture v-else>
			<source type="image/webp" :srcset="item.image.webp" />
			<img
				:alt="item.image.alt"
				:title="item.image.alt"
				:src="item.image.url"
				class="w-full h-full block rounded-lg lg:rounded-l-lg object-fit object-top dark:brightness-50 dark:hover:brightness-100 ring-brand-gold dark:ring-brand-dark ring-2 md:ring-4 shadow-2xl-gold dark:shadow-2xl-brand"
				:width="isLarge() ? 615 : 300"
				:height="isLarge() ? 340 : 165"
				loading="lazy"
			/>
		</picture>
		<figcaption class="absolute left-0 bottom-0 md:-left-1 md:-bottom-1 px-2 md:px-4 py-1 md:py-2 bg-brand-gold dark:bg-brand-dark text-xs text-black dark:text-gray-400 rounded-bl-lg rounded-tr-lg ">
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
