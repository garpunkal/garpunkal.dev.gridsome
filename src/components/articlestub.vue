<template>
  <div class="grid grid-cols-12 gap-2 mb-5 md:mb-0">
    <div class="col-span-3">
      <a
        v-if="item.canonical_url"
        :href="item.canonical_url"
        target="_blank"
        rel="noopener"
        :title="item.title"
        class="w-full h-full"
      >
        <figure class="relative">
          <img
            :src="item.cover_image"
            :alt="item.title"
            :title="item.alt"
            class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100 border-2 border-brand"
            loading="lazy"
            :style="{ width: '100%', height: 'auto' }"
          />
        </figure>
      </a>
    </div>
    <div class="col-span-9 p">
      <a
        v-if="item.canonical_url"
        :href="item.canonical_url"
        target="_blank"
        rel="noopener"
        :title="item.title"        
      >
        <h2
          class="title-font text-sm font-medium text-white dark:text-gray-200"
        >
          {{ item.title }}
        </h2>
         <p class="leading-relaxed text-gray-300 dark:text-gray-400 text-xs">
          {{ item.description }}
        </p>
      </a>     
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