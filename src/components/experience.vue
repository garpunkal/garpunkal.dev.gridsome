<template>
	<div class="md:pl-6 xl:grid xl:grid-cols-5 pl-0 text-gray-300">
		<div class="md:pl-6 sm:mt-0 flex items-start justify-start xl:justify-end mb-5">
			<a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.title">
				<picture>
					<source type="image/webp" :srcset="item.logo.webp" />
					<img
						:alt="item.logo.alt"
						:src="item.logo.url"
						:style="{ backgroundColor: item.logo.background }"
						class=" rounded-lg lg:rounded-l-lg flex object-contain dark:brightness-50 dark:hover:brightness-100 w-100pixel h-100pixel ring-brand dark:ring-brand-dark ring-4"
						width="100"
						height="100"
						loading="lazy"
						:title="item.logo.alt"
					/>
				</picture>
			</a>

			<picture v-if="!item.url">
				<source type="image/webp" :srcset="item.logo.webp" />
				<img :alt="item.logo.alt" :src="item.logo.url" :style="{ backgroundColor: item.logo.background }" class="rounded-lg lg:rounded-l-lg flex object-contain dark:brightness-50 dark:hover:brightness-100 w-100pixel h-100pixel ring-brand dark:ring-brand-dark ring-4" height="100" loading="lazy" :title="item.logo.alt" />
			</picture>
		</div>
		<div class="md:pl-6 col-span-3 mt-6 sm:mt-0 md:pr-5 xl:border-r-2 xl:border-brand xl:border-opacity-25 pb-10 ">
			<h3 class=" text-white dark:text-brand mb-1 text-xl md:text-2xl font-bold">
				{{ item.job }}
			</h3>
			<h4 class="font-medium  text-gray-300 mb-1 text-lg md:text-xl">
				{{ item.title }}
			</h4>
			<h5 class="font-smaller  mb-1 text-sm dark:text-gray-300" v-if="item.url">
				{{ item.location }}
			</h5>
			<h5 class="font-smaller  mb-5 text-sm dark:text-gray-300" v-else>
				{{ item.location }}
			</h5>
			<p class="font-smaller  mb-5 text-sm" v-if="item.url">
				<a :href="item.url" target="_blank" rel="noopener" class="inline-flex items-center" :title="item.title">{{ item.shortUrl }}</a>
			</p>
			<p class="font-smaller text-sm mb-5">
				<span class="text-sm inline-block py-1 px-2 rounded text-white bg-gray-800 dark:text-gray-500 dark:bg-gray-800 uppercase last:mr-0">{{ GetMonthYear(item.from) }}</span>
				-
				<span class=" text-sm inline-block py-1 px-2 rounded text-white bg-brand dark:text-gray-300 dark:bg-brand uppercase last:mr-0" v-if="item.isCurrent">CURRENT</span>
				<span class=" text-sm inline-block py-1 px-2 rounded text-white bg-gray-800 dark:text-gray-500 dark:bg-gray-800 uppercase last:mr-0 " v-else>{{ GetMonthYear(item.to) }}</span>
			</p>
			<div class="inline-block py-1 px-1 text-gray-400 dark:text-gray-500 text-xs" v-if="GetMonths(item.from, item.to) != '0 months'">{{ GetMonths(item.from, item.to) }}</div>
			<div class="mt-5 font-smaller text-sm md:pl-5 dark:text-gray-300" v-html="item.description" v-if="item.description !== '<p>-</p>'" v-show="!item.hideDescription"></div>
		</div>
		<div class="md:pl-2 mt-0 sm:mt-0 pb-10 w-full flex flex-wrap justify-evenly" v-if="item.projects.title || item.contributions.title">
			
			
			<div class="w-full md:w-1/2 xl:w-full md:px-4">
				<div class=" font-smaller  mb-1 text-sm font-bold dark:text-gray-400 " v-if="item.projects.title" v-show="!item.hideDescription">
					{{ item.projects.title }}
				</div>
				<ul v-show="!item.hideDescription" class=" list-outside font-smaller text-sm pl-5 list-none space-y-1 mt-3 break-words mb-6 ">
					<li v-for="project in item.projects.items" v-bind:key="project.name">
						<a v-if="project.url" rel="noopener" :href="project.url" target="_blank" :title="project.name" class="inline-flex items-center">{{ project.name }}</a>
						<span v-else class="dark:text-gray-400">{{ project.name }}</span>
					</li>
				</ul>
			</div>

			<div 
			:class="item.contributions.title ? `w-full md:w-1/2 xl:w-full md:px-4 md:border-l-2 md:border-brand md:border-opacity-25 xl:border-none` : `w-full md:w-1/2 xl:w-full md:px-4 `"
			>
				<div v-show="!item.hideDescription" class=" font-smaller  mb-1 text-sm font-bold dark:text-gray-400 " v-if="item.contributions.title">
					{{ item.contributions.title }}
				</div>
				<ul v-show="!item.hideDescription" class=" list-outside font-smaller text-sm pl-5 list-none space-y-1 mt-3 break-words mb-6 ">
					<li v-for="contribution in item.contributions.items" v-bind:key="contribution.name">
						<a v-if="contribution.url" rel="noopener" :href="contribution.url" target="_blank" :title="contribution.name" class="inline-flex items-center">{{ contribution.name }}</a>
						<span v-else class="dark:text-gray-400">{{ contribution.name }}</span>
					</li>
				</ul>
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
