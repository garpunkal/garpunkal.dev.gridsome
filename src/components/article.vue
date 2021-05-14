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
            class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100"
            loading="lazy"  
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
        <h2
          class="title-font text-lg font-medium text-white dark:text-gray-200 mb-3"
        >
          {{ item.title }}
        </h2>
      </a>
      <p class="leading-relaxed mb-3 text-gray-300 dark:text-gray-400">
        {{ item.description }}
      </p>
      
      <div class="my-3">
        <div
          class="inline-flex items-center px-2 py-0.5 mr-1 rounded text-xs font-medium bg-brand text-gray-200 dark:bg-brand dark:text-gray-200"
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