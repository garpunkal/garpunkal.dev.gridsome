<template>
	<div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
		<picture>
			<source type="image/webp" srcset="@/assets/images/profiles/profile.webp" />
			<img src="@/assets/images/profiles/profile.jpg"
			 class="w-full object-cover h-full object-center block rounded-lg dark:brightness-50 dark:hover:brightness-100 filter-grayscale
			 shadow-xl-black border border-brand-dark"
			  alt="Gareth Wright" width="192" height="192" title="Gareth Wright" />
		</picture>
	</div>
</template>
<script>
export default { name: "ProfileImageSmall" };
</script>
