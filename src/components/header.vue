<template>
	<section :if="items.edges.length">
		<div v-for="item in items.edges" :key="item.node.id" class="flex flex-wrap items-center h-auto max-w-6xl mx-auto my-8 mt-24 mb-10 lg:h-144 lg:mx-10 xl:mx-auto lg:my-18 xl:my-12">
			<div id="profile" class="order-2 w-full pt-32 mx-6 bg-white rounded-lg lg:w-3/5 md:rounded-r-lg lg:rounded-l-lg xl:rounded-r-none dark:bg-mirage dark:text-iron lg:mx-0 lg:order-1 -mt-36 md:-mt-40 md:pt-28 lg:-mt-0 lg:pt-0 shadow-2xl-black ">
				<div class="p-4 md:p-12">
					<div class="flex flex-col items-center w-full lg:items-start">
						<h1 class="mt-6 text-3xl font-extrabold tracking-tighter lg:mt-3 sm:text-4xl md:text-5xl lg:text-6xl">
							{{ item.node.title }}
						</h1>
						<h2 class="mb-5 text-2xl font-extrabold tracking-tighter md:mb-8 md:text-3xl lg:text-4xl sm:text-3xl">
							<a class="text-black dark:text-pale-sky hover:text-black" :href="item.node.githubUrl" target="_blank" rel="noopener" title="GitHub">
								{{ item.node.subTitle }}
							</a>
						</h2>

						<div class="flex flex-col w-full gap-1 text-sm text-davy-grey dark:text-iron lg:text-sm" :if="item.node.specialisms.length" v-for="specialism in item.node.specialisms" :key="specialism.title">
							<Bullet :title="specialism.title" :cssclass="specialism.cssClasses" :svgPath="specialism.svgPath" :stroke="specialism.svgStroke" :strokeWidth="specialism.svgStrokeWidth" :fill="specialism.svgFill" :strokeLineCap="specialism.svgStrokeLineCap" :strokeLineJoin="specialism.svgStrokeLineJoin" />
						</div>
					</div>

					<div class="grid w-full grid-cols-5 gap-6 m-auto mt-12 mb-3 text-center md:grid-cols-5 lg:auto-cols-min">
						<SocialLink :href="social.url" :title="social.title" :svgPath="social.svgPath" :rel="social.rel" :if="item.node.socials.length" v-for="social in item.node.socials" :key="social.title" />
					</div>
				</div>
			</div>
			<div class="z-10 order-1 w-full -mt-16 lg:w-2/5 lg:order-2 lg:mt-2">
				<ProfileImage :image="item.node.image" />
			</div>
			<div class="flex justify-center order-3 w-full pt-10 md:pt-10 lg:pt-6">
				<DownArrow id="projects" />
			</div>
		</div>
	</section>
</template>
<script>
import Bullet from "@/components/bullet.vue";
import SocialLink from "@/components/sociallink.vue";
import DownArrow from "@/components/downarrow.vue";
import ProfileImage from "@/components/profileimage.vue";

export default {
	name: "Profile",
	props: {
		items: { type: Object, required: true },
	},
	components: { Bullet, SocialLink, DownArrow, ProfileImage },
};
</script>
