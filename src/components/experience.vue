<template>
	<div class="flex flex-row flex-wrap w-full">
		<div class="flex justify-center w-full mb-2 rounded-lg ring-ocean dark:ring-mirage ring-4 dark:brightness-50 dark:hover:brightness-100" :style="`background-color:` + item.logo.background + `;background-size:auto;`">		
			<a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.title" class="flex justify-center w-full h-full">
				<picture>
					<source type="image/webp" :srcset="item.logo.webp" />
					<img :alt="item.logo.alt" :src="item.logo.url" :style="{ backgroundColor: item.logo.background }" class="flex object-contain rounded-lg lg:rounded-l-lg w-100pixel h-100pixel" width="100" height="100" loading="lazy" :title="item.logo.alt" />
				</picture>
			</a>
			<picture v-if="!item.url">
				<source type="image/webp" :srcset="item.logo.webp" />
				<img :alt="item.logo.alt" :src="item.logo.url" :style="{ backgroundColor: item.logo.background }" class="flex object-contain rounded-lg lg:rounded-l-lg w-100pixel h-100pixel" width="100" height="100" loading="lazy" :title="item.logo.alt" />
			</picture>		
		</div>
		<div class="w-full h-full mt-2 ">
			<div class="w-full ">
				<h3 class="mb-1 text-xl font-bold text-white dark:text-santa-grey">
					{{ item.job }}
				</h3>
				<h4 class="mb-1 text-lg text-iron dark:text-santa-grey">
					{{ item.title }}
				</h4>			
				<p class="mt-4 text-sm text-white font-smaller">
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase rounded bg-ocean dark:text-iron dark:bg-ocean last:mr-0" v-if="item.isCurrent">CURRENT</span>
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase bg-gray-800 rounded dark:text-pale-sky dark:bg-gray-800 last:mr-0" v-else>{{ GetMonthYear(item.to) }}</span>
					-
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase bg-gray-800 rounded dark:text-pale-sky dark:bg-gray-800 last:mr-0">{{ GetMonthYear(item.from) }}</span>
				</p>
				<div class="inline-block px-1 py-1 text-xs text-santa-grey dark:text-pale-sky" v-if="GetMonths(item.from, item.to) != '0 months'">{{ GetMonths(item.from, item.to) }}</div>				
			</div>
		</div>
	</div>
</template>
<script>
import humanizeDuration from "humanize-duration";
export default {
	props: { item: { type: Object, required: true } },
	methods: {
		GetMonthYear: function(date) {
			if (date === null || date === undefined) {
				return "";
			} else {
				var dt = new Date(date);
				return dt.toLocaleString("default", { month: "short" }) + " " + dt.getFullYear();
			}
		},
		GetMonths: function(d1, d2) {
			if (d1 === null) d1 = new Date();
			else d1 = new Date(d1);
			if (d2 === null) d2 = new Date();
			else d2 = new Date(d2);
			return humanizeDuration(d2 - d1, {
				conjunction: " and ",
				units: ["y", "mo"],
				round: true,
			});
		},
	},
};
</script>
