<template>
	<section class="text-white bg-brand dark:bg-black body-font" id="tweets">
		<div class="container md:px-5 py-5 md:py-14 mx-auto">
			<a class="w-full" href="https://twitter.com/garpunkal" target="_blank" rel="noopener" title="Twitter">
				<h3 class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-white dark:text-gray-500 text-center w-full mt-10 lg:mt-0 l mb-20">
					Tweets
				</h3>
			</a>
			<div class="flex w-full flex-wrap justify-center px-2 md:px-10 mt-10 md:mt-0">
				<Tweet />
			</div>
		</div>
	</section>
</template>
<script>
import Tweet from "@/components/tweet.vue";
export default {
	components: { Tweet },
};
</script>
