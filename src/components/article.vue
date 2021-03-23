<template>
  <div class="flex-1">
    <div class="center">
      <a
        v-if="item.canonical_url"
        :href="item.canonical_url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <figure class="relative">
          <img
            :src="item.cover_image"
            :alt="item.title"
            :title="item.alt"
            class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100 border-brand dark:border-brand-dark border-2 md:border-3"
            loading="lazy"
            :style="{ width: '100%', height: '100%' }"
          />
        </figure>
      </a>
    </div>

    <div class="p-6">
      <a
        v-if="item.canonical_url"
        :href="item.canonical_url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <h1 class="title-font text-lg font-medium text-white dark:text-gray-400 mb-3">
          {{ item.title }}
        </h1>
      </a>
      <p class="leading-relaxed mb-3 text-gray-300 dark:text-gray-500">
        {{ item.description }}
      </p>
      <span
        class="text-white mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 dark:border-gray-500 dark:text-gray-500"
      >
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle></svg
        >{{ item.page_views_count }}
      </span>
      <span class="text-white inline-flex items-center leading-none text-sm">
        <svg
          class="w-4 h-4 mr-1"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          ></path>
        </svg>
        {{ item.comments_count }}
      </span>

      <div class="my-3">
        <div
          class="inline-flex items-center px-2 py-0.5 mr-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-brand "
          v-for="tag in item.tag_list"
          :key="tag"
        >
          {{ tag }}
        </div>
      </div>
    </div>
  </div>
</template>
          
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>