  <template>
  <div>
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
        :src="require(`~/assets/images/projects/${item.image.url}`)"
        class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-left-top"
        :width="item.image.width"
        :height="item.image.height"
        loading="lazy"
        :style="{ width: item.image.width + 'px', height: item.image.height + 'px', }"
      />

      <img
        v-else
        :alt="item.image.alt"
        :src="require(`~/assets/images/projects/${item.image.url}`)"
        class="w-full h-full block rounded-lg lg:rounded-l-lg object-cover object-top"
        :width="item.image.width"
        :height="item.image.height"
        loading="lazy"
        :style="{ width: item.image.width + 'px', height: item.image.height + 'px', }"
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
         