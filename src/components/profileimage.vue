<template>
  <div class="w-full lg:w-2/5">
    <g-image
      src="~/assets/images/profile.jpg"
      class="rounded-none lg:rounded-lg lg:rounded-l-none shadow-2xl hidden lg:block"
      alt="Gareth Wright"
      quality="75"
      width="960"
      height="960"     
      loading="lazy"      
    />
  </div>
</template>
<script>
export default {
  name: "ProfileImage",
};
</script>