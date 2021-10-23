<template>
  <section
    class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
    id="experience"
  >
    <div class="container px-5 py-5 md:py-14 mx-auto">
      <div class="flex w-full flex-wrap mb-20">
        <h3
          class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10 lg:mt-0"
        >
          Experience
        </h3>
      </div>
      <div
        class="pt-0 pb-10 sm:items-start mx-auto"
        v-for="edge in items.edges"
        :key="edge.node.id"
      >
        <Experience :item="edge.node" />
      </div>
    </div>
  </section>   
</template>
<script>
import Experience from "@/components/experience.vue";
export default {
  components: {
    Experience,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
};
</script>