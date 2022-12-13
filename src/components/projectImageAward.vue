<template>
	<figure class="relative">
		<picture v-if="item.position === 'left top'">
			<source type="image/webp" :srcset="item.image.webp" />
			<img
				:alt="item.image.alt"
				:title="item.image.alt"
				:src="isLarge() ? `${item.image.url}&width=615&height=340` : `${item.image.url}&width=300&height=165`"
				class="block object-left-top w-full h-full rounded-lg lg:rounded-l-lg object-fit dark:brightness-50 dark:hover:brightness-100 ring-brand-gold dark:ring-brand-dark ring-2 md:ring-4 shadow-2xl-gold dark:shadow-2xl-brand"
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
				:src="isLarge() ? `${item.image.url}&width=615&height=340` : `${item.image.url}&width=300&height=165`"
				class="block object-top w-full h-full rounded-lg lg:rounded-l-lg object-fit dark:brightness-50 dark:hover:brightness-100 ring-brand-gold dark:ring-brand-dark ring-2 md:ring-4 shadow-2xl-gold dark:shadow-2xl-brand"
				:width="isLarge() ? 615 : 300"
				:height="isLarge() ? 340 : 165"
				loading="lazy"
			/>
		</picture>
		<figcaption class="absolute bottom-0 left-0 px-2 py-1 text-xs text-black rounded-tr-lg rounded-bl-lg md:-left-1 md:-bottom-1 md:px-4 md:py-2 bg-brand-gold dark:bg-brand-dark dark:text-gray-400 ">
			<span class="hidden font-bold lg:inline-block">Award Winner:</span> {{ item.title }}
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
