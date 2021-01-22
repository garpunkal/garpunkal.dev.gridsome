  <template>
  <div>
    <div v-if="item.position === 'left top'">
      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <g-image
          :alt="item.image.alt"
          :src="
            require(`!!assets-loader?width=600&height=360&fit=cover&position=left%20top&quality=75!@images/${item.image.url}`)
          "
          class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
        />
      </a>

      <g-image
        v-if="!item.url"
        :alt="item.image.alt"
        :src="
          require(`!!assets-loader?width=600&height=360&fit=cover&position=left%20top&quality=75!@images/${item.image.url}`)
        "
        class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
      />
    </div>
    <div v-else-if="item.position === 'top'">
      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <g-image
          :alt="item.image.alt"
          :src="
            require(`!!assets-loader?width=600&height=360&fit=cover&position=top&quality=75!@images/${item.image.url}`)
          "
          class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
        />
      </a>

      <g-image
        v-if="!item.url"
        :alt="item.image.alt"
        :src="
          require(`!!assets-loader?width=600&height=360&fit=cover&position=top&quality=75!@images/${item.image.url}`)
        "
        class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
      />
    </div>

    <div v-else>
      <a
        v-if="item.url"
        :href="item.url"
        target="_blank"
        rel="noopener"
        :title="item.title"
      >
        <g-image
          :alt="item.image.alt"
          :src="
            require(`!!assets-loader?width=600&height=360&fit=cover&position=center%20top&quality=75!@images/${item.image.url}`)
          "
          class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
        />
      </a>

      <g-image
        v-if="!item.url"
        :alt="item.image.alt"
        :src="
          require(`!!assets-loader?width=600&height=360&fit=cover&position=center%20top&quality=75!@images/${item.image.url}`)
        "
        class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
      />
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
         