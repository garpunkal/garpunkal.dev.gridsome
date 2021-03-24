<template>
  <section
    class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
    id="tweets"
  >
    <div class="container px-5 py-5 md:py-14 mx-auto">
      <div class="flex w-full flex-wrap mb-20">
        <a
          class="w-full"
          href="https://twitter.com/garpunkal"
          target="_blank"
          rel="noopener"
          title="Twitter"
        >
          <h3
            class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10 lg:mt-0"
          >
            Tweets
          </h3>
        </a>
      </div>
      <div class="flex w-full flex-wrap justify-center px-10 mt-10 md:mt-0">
        <Tweet />
      </div>
    </div>
  </section>
</template>
<script>
import Tweet from "@/components/tweet.vue";
export default {
  components: {
    Tweet,
  },
};
</script>