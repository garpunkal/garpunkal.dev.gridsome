<template>
	<div class="w-full md:pl-6 pl-0 text-gray-300">
	
		<div class="w-full justify-center flex flex-row flex-wrap">
			<div class="flex flex-row flex-wrap w-full md:w-auto md:pl-6 sm:mt-0 b-5">
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
					<img
						:alt="item.logo.alt"
						:src="item.logo.url"
						:style="{ backgroundColor: item.logo.background }"
						class="rounded-lg lg:rounded-l-lg flex object-contain dark:brightness-50 dark:hover:brightness-100 w-100pixel h-100pixel ring-brand dark:ring-brand-dark ring-4"
						height="100"
						loading="lazy"
						:title="item.logo.alt"
					/>
				</picture>
			</div>
			<div class="flex flex-col flex-wrap w-full md:w-8/12 lg:w-5/12 md:pl-6 mt-6 md:mt-0 md:pr-5 pb-10">
				<h3 class=" text-white dark:text-brand mb-1 text-xl md:text-2xl font-bold">
					{{ item.job }}
				</h3>
				<h4 class="font-medium text-gray-300 mb-1 text-lg md:text-lg">
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
				<p class="font-smaller text-sm ">
					<span class="text-sm inline-block px-4 py-2 my-1 rounded text-white bg-gray-800 dark:text-gray-500 dark:bg-gray-800 uppercase last:mr-0">{{ GetMonthYear(item.from) }}</span>
					-
					<span class=" text-sm inline-block px-4 py-2 my-1 rounded text-white bg-brand dark:text-gray-300 dark:bg-brand uppercase last:mr-0" v-if="item.isCurrent">CURRENT</span>
					<span class=" text-sm inline-block px-4 py-2 my-1 rounded text-white bg-gray-800 dark:text-gray-500 dark:bg-gray-800 uppercase last:mr-0 " v-else>{{ GetMonthYear(item.to) }}</span>
				</p>
				<div class="mt-2 inline-block py-1 px-1 text-gray-400 dark:text-gray-500 text-xs" v-if="GetMonths(item.from, item.to) != '0 months'">{{ GetMonths(item.from, item.to) }}</div>
				<div class="mt-5 font-smaller text-sm md:pl-5 dark:text-gray-300" v-html="item.description" v-if="item.description !== '<p>-</p>'" v-show="!item.hideDescription"></div>

				<!-- <div class="mt-10 pb-10 w-full flex flex-wrap content-start flex-row"  v-if="item.projects.title || item.contributions.title">
				<div class="w-full"  v-if="item.projects.title">
					<div class="font-smaller text-sm font-bold mb-2 " v-if="item.projects.title">
						{{ item.projects.title }}
					</div>
					<div class="font-smaller border-b-2 border-brand opacity-25 text-sm font-bold mb-2	 " v-if="item.projects.title"></div>
					<div class="w-full font-smaller text-sm grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
						<div v-for="project in item.projects.items" v-bind:key="project.name">
							
							<a v-if="project.url" rel="noopener" :href="project.url" target="_blank" :title="project.name" class="inline-flex items-center">{{ project.name }}</a>
							<span v-else class="dark:text-gray-400">{{ project.name }}</span>
						</div>
						
					</div>
				</div>
		
				<div class="w-full mt-8" v-if="item.contributions.title">
					<div class="font-smaller text-sm font-bold mb-2	 " v-if="item.contributions.title">
						{{ item.contributions.title }}
					</div>
					<div class="font-smaller border-b-2 border-brand opacity-25 text-sm font-bold mb-2 " v-if="item.contributions.title"></div>
					<div class="w-full font-smaller text-sm grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">					
						<div v-for="contribution in item.contributions.items" v-bind:key="contribution.name">
							<a v-if="contribution.url" rel="noopener" :href="contribution.url" target="_blank" :title="contribution.name" class="inline-flex items-center">{{ contribution.name }}</a>
							<span v-else class="dark:text-gray-400">{{ contribution.name }}</span>
						</div>
					</div>
				</div>
			</div> -->
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
