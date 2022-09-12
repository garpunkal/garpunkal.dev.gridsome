<template>
	<div class="w-full lg:w-2/5">
		<picture>
			<source type="image/webp" srcset="@/assets/images/profiles/profile.webp" />
			<img src="@/assets/images/profiles/profile.jpg" class=" rounded-none lg:rounded-lg shadow-2xl-black hidden lg:block dark:brightness-50 dark:hover:brightness-100" alt="Gareth Wright" width="960" height="960" title="Gareth Wright" />
		</picture>
	</div>
</template>
<script>
export default { name: "ProfileImage" };
</script>
  