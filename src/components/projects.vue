<template>
  <section
    class="
      text-gray-500
      bg-brand-dark
      dark:text-gray-300 dark:bg-gray-900
      body-font
    "
    id="projects"
  >
    <div class="container px-5 py-5 md:py-14 mx-auto">
      <div class="flex w-full flex-wrap mb-20">
        <h3
          class="
            text-3xl
            font-extrabold
            sm:text-65xl
            tracking-tighter
            lg:text-4xl
            text-gray-600
            dark:text-gray-500
            text-center
            w-full
            mt-10
            lg:mt-0
          "
        >
          Projects
        </h3>
      </div>

      <div class="flex flex-wrap md:-m-2 -m-1">
        <div
          class="flex flex-wrap w-1/2 md:w-1/2"
          v-for="(chunk, chunkindex) in chunked"
          :key="chunkindex"
        >
          <div
            class="md:p-2 p-1 w-full"
            v-for="(project, index) in chunk"
            :key="project.node.id"
            :class="{
              'md:w-1/2':
                ((chunkindex + 1) % 2 !== 0 && index !== 0) ||
                ((chunkindex + 1) % 2 === 0 && index !== 2),
            }"
          >
            <Project :item="project.node" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Project from "@/components/project.vue";
import lodash from "lodash";

export default {
  components: {
    Project,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chunked() {
      return lodash.chunk(this.items.edges, 3);
    },
  },
};
</script>