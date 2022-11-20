<template>
	<div class="flex flex-row flex-wrap justify-center w-full text-gray-300 mb-14">	
		<div class="flex flex-row flex-wrap justify-center w-full gap-5">			
			<div class="flex flex-row flex-wrap justify-start w-auto mt-2">
				<a v-if="item.url" :href="item.url" target="_blank" rel="noopener" :title="item.title">
					<picture>
						<source type="image/webp" :srcset="item.logo.webp" />
						<img
							:alt="item.logo.alt"
							:src="item.logo.url"
							:style="{ backgroundColor: item.logo.background }"
							class="flex object-contain rounded-lg lg:rounded-l-lg dark:brightness-50 dark:hover:brightness-100 w-[100px] h-[100px] ring-brand dark:ring-brand-dark ring-4"
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
						class="flex object-contain rounded-lg lg:rounded-l-lg dark:brightness-50 dark:hover:brightness-100 w-[100px] h-[100px] ring-brand dark:ring-brand-dark ring-4"
						width="100"
						height="100"
						loading="lazy"
						:title="item.logo.alt"
					/>
				</picture>
			</div>
			<div class="flex flex-col flex-wrap w-full text-center">
				<h3 class="mb-1 text-xl font-bold text-white dark:text-brand">
					{{ item.job }}
				</h3>
				<h4 class="mb-1 text-lg font-medium text-gray-300 dark:text-gray-400">
					{{ item.title }}
				</h4>
				<p class="mb-5 text-sm font-smaller" v-if="item.url">
					<a :href="item.url" target="_blank" rel="noopener" class="inline-flex items-center" :title="item.title">{{ item.shortUrl }}</a>
				</p>
				<h5 class="mb-1 text-sm font-smaller dark:text-gray-400" v-if="item.url">
					{{ item.location }}
				</h5>
				<h5 class="mb-5 text-sm font-smaller dark:text-gray-400" v-else>
					{{ item.location }}
				</h5>
				
				<p class="text-sm font-smaller ">
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase bg-gray-800 rounded dark:text-gray-500 dark:bg-gray-800 last:mr-0">{{ GetMonthYear(item.from) }}</span>
					-
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase rounded bg-brand dark:text-gray-300 dark:bg-brand last:mr-0" v-if="item.isCurrent">CURRENT</span>
					<span class="inline-block px-4 py-2 my-1 text-sm text-white uppercase bg-gray-800 rounded dark:text-gray-500 dark:bg-gray-800 last:mr-0" v-else>{{ GetMonthYear(item.to) }}</span>
				</p>
				<div class="inline-block px-1 py-1 mt-2 text-xs text-gray-400 dark:text-gray-500" v-if="GetMonths(item.from, item.to) != '0 months'">{{ GetMonths(item.from, item.to) }}</div>
				<div class="mt-5 text-sm font-smaller md:pl-5 dark:text-gray-300" v-html="item.description" v-if="item.description !== '<p>-</p>'" v-show="!item.hideDescription"></div>

				<!-- <div class="flex flex-row flex-wrap content-start w-full pb-10 mt-10"  v-if="item.projects.title || item.contributions.title">
				<div class="w-full"  v-if="item.projects.title">
					<div class="mb-2 text-sm font-bold font-smaller " v-if="item.projects.title">
						{{ item.projects.title }}
					</div>
					<div class="mb-2 text-sm font-bold border-b-2 opacity-25 font-smaller border-brand " v-if="item.projects.title"></div>
					<div class="grid w-full grid-cols-1 gap-2 text-sm font-smaller md:grid-cols-2 xl:grid-cols-3">
						<div v-for="project in item.projects.items" v-bind:key="project.name">
							
							<a v-if="project.url" rel="noopener" :href="project.url" target="_blank" :title="project.name" class="inline-flex items-center">{{ project.name }}</a>
							<span v-else class="dark:text-gray-400">{{ project.name }}</span>
						</div>
						
					</div>
				</div>
		
				<div class="w-full mt-8" v-if="item.contributions.title">
					<div class="mb-2 text-sm font-bold font-smaller " v-if="item.contributions.title">
						{{ item.contributions.title }}
					</div>
					<div class="mb-2 text-sm font-bold border-b-2 opacity-25 font-smaller border-brand " v-if="item.contributions.title"></div>
					<div class="grid w-full grid-cols-1 gap-2 text-sm font-smaller md:grid-cols-2 xl:grid-cols-3">					
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
