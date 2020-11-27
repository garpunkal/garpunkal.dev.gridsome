<template>
  <footer class="text-white body-font">
    <div class="container px-10 py-5 mx-auto flex flex-wrap">
      <UpArrow />
      <div class="flex w-full flex-wrap">
        <p class="mx-auto">&copy; 2020 Gareth Wright</p>
      </div>
    </div>
  </footer>
</template>
<script>
import UpArrow from "@/components/uparrow.vue";

export default {
  name: "SiteFooter",
  components: {
    UpArrow,
  },
};
</script>