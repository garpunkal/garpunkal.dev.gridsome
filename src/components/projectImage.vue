<template>
	<figure class="relative">
		<picture v-if="item.position === 'left top'">
			<source type="image/webp" :srcset="isLarge() ? `${item.image.webp}&width=615&height=340` : `${item.image.webp}&width=300&height=165`" />
			<img				
				:alt="item.image.alt"
				:title="item.image.alt"
				:src="isLarge() ? `${item.image.url}&width=615&height=340` : `${item.image.url}&width=300&height=165`"
				class="block object-left-top w-full h-full rounded-lg lg:rounded-l-lg object-fit dark:brightness-50 dark:hover:brightness-100 ring-brand dark:ring-brand-dark ring-4"
				:width="isLarge() ? 615 : 300"
				:height="isLarge() ? 340 : 165"
				loading="lazy"
			/>
		</picture>

		<picture v-else>
			<source type="image/webp" :srcset="isLarge() ? `${item.image.webp}&width=615&height=340` : `${item.image.webp}&width=300&height=165`" />
			<img
				:alt="item.image.alt"
				:title="item.image.alt"
				:src="isLarge() ? `${item.image.url}&width=615&height=340` : `${item.image.url}&width=300&height=165`"
				class="block object-top w-full h-full rounded-lg lg:rounded-l-lg object-fit dark:brightness-50 dark:hover:brightness-100 ring-brand dark:ring-brand-dark ring-4"
				:width="isLarge() ? 615 : 300"
				:height="isLarge() ? 340 : 165"
				loading="lazy" 
			/>
		</picture>
		<figcaption class="absolute px-2 py-1 text-xs text-white rounded-tr-lg rounded-br-lg rounded-bl-lg -left-1 -bottom-1 md:px-4 md:py-2 bg-brand dark:bg-brand-dark dark:text-gray-400 ">
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
