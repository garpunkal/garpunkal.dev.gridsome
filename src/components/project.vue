  <template>
  <div class="center">
    <a
      v-if="item.url"
      :href="item.url"
      target="_blank"
      rel="noopener"
      :title="item.title"
    >
      <img
        v-if="item.position === 'left top'"
        :alt="item.image.alt"
        :src="item.image.url"
        class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top dark:brightness-50 dark:hover:brightness-100 hover:animate-wiggle"
        :width="item.image.width"
        :height="item.image.height"
        loading="lazy"
        :style="{ width: '100%', height: '100%', }"
      />

      <img
        v-else
        :alt="item.image.alt"
        :src="item.image.url"
        class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-top dark:brightness-50 dark:hover:brightness-100 hover:animate-wiggle"
        :width="item.image.width"
        :height="item.image.height"
        loading="lazy"
        :style="{ width: '100%', height: '100%', }"
      />
    </a>
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
         