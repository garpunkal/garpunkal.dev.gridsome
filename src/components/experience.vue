<template>
  <div class="lg:grid lg:grid-cols-5 md:pl-8 pl-6">
    <div
      class="sm:pl-6 mt-6 sm:mt-0 flex items-start justify-start lg:justify-end mb-5"
    >
      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <g-image
          :alt="item.logo.alt"
          :src="require(`!!assets-loader?background=transparent&width=100&height=100&fit=contain&position=center&quality=75!@images/${item.logo.url}`)"
          class="object-cover rounded-lg lg:rounded-l-lg flex"
          :style="{ backgroundColor: '#' + item.logo.background }"
          loading="lazy"
        />
      </a>

      <g-image
        v-if="!item.url"
        :alt="item.logo.alt"
        :src="require(`!!assets-loader?background=transparent&width=100&height=100&fit=contain&position=center&quality=75!@images/${item.logo.url}`)"
        class="object-cover rounded-lg lg:rounded-l-lg flex"
        :style="{ backgroundColor: '#' + item.logo.background }"
        loading="lazy"
      />
    </div>
    <div
      class="col-span-3 sm:pl-6 mt-6 sm:mt-0 md:pr-5 lg:border-r-2 lg:border-brand lg:border-opacity-25"
    >
      <h2
        class="font-medium title-font text-white dark:text-brand mb-1 text-xl"
      >
        {{ item.job }}
      </h2>

      <h3 class="font-medium title-font text-gray-400 mb-1 text-l">
        {{ item.title }}
      </h3>

      <h4 class="font-smaller title-font mb-1 text-sm" v-if="item.url">
        {{ item.location }}
      </h4>
      <h4 class="font-smaller title-font mb-5 text-sm" v-else>
        {{ item.location }}
      </h4>

      <h5 class="font-smaller title-font mb-5 text-sm" v-if="item.url">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener"
          class="text-gray-400 dark:text-brand inline-flex items-center"
          :title="item.title"
          >{{ item.shortUrl }}</a
        >
      </h5>

      <p class="font-smaller title-font text-sm mb-5">
        <span
          class="text-xs inline-block py-1 px-2 rounded text-white bg-gray-800 uppercase last:mr-0"
          >{{ item.from }}</span
        >
        -
        <span
          class="text-xs inline-block py-1 px-2 rounded text-white bg-brand uppercase last:mr-0"
          v-if="item.isCurrent"
          >{{ item.to }}</span
        >
        <span
          class="text-xs inline-block py-1 px-2 rounded text-white bg-gray-800 uppercase last:mr-0"
          v-else
          >{{ item.to }}</span
        >
      </p>

      <ul
        class="list-outside list-disc font-smaller text-sm pl-5"
        v-html="item.description"
      ></ul>
    </div>
    <div class="sm:pl-6 mt-6 sm:mt-0">
      <div class="font-smaller title-font mb-1 text-xs mt-5 font-bold">
        {{ item.projects.title }}
      </div>

      <ul class="list-outside list-disc font-smaller text-xs pl-5">
        <li v-for="project in item.projects.items" v-bind:key="project.name">
          <a
            v-if="project.url"
            rel="noopener"
            :href="project.url"
            target="_blank"
            :title="project.name"
            class="text-gray-400 dark:text-brand inline-flex items-center"
            >{{ project.name }}</a
          >
          <span v-else>{{ project.name }}</span>
        </li>
      </ul>

      <div class="font-smaller title-font mb-1 text-xs mt-5 font-bold">
        {{ item.contributions.title }}
      </div>

      <ul class="list-outside list-disc font-smaller text-xs pl-5">
        <li
          v-for="contribution in item.contributions.items"
          v-bind:key="contribution.name"
        >
          <a
            v-if="contribution.url"
            rel="noopener"
            :href="contribution.url"
            target="_blank"
            :title="contribution.name"
            class="text-gray-400 dark:text-brand inline-flex items-center"
            >{{ contribution.name }}</a
          >
          <span v-else>{{ contribution.name }}</span>
        </li>
      </ul>
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
  }
};
</script>