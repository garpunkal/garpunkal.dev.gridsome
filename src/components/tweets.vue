<template>
	<section class="text-white bg-ocean dark:bg-black body-font" id="tweets">
		<div class="container py-5 mx-auto md:px-5 md:py-14">
			<a class="w-full" href="https://twitter.com/garpunkal" target="_blank" rel="noopener" title="Twitter">
				<h3 class="w-full mt-10 mb-20 text-3xl font-extrabold tracking-tighter text-center text-white sm:text-65xl lg:text-4xl dark:text-pale-sky lg:mt-0 l">
					Tweets
				</h3>
			</a>
			<div class="flex flex-wrap justify-center w-full px-2 mt-10 md:px-10 md:mt-0">
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
