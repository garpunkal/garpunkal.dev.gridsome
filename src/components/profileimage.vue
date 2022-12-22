<template>
	<div class="w-48 h-48 mx-auto bg-center bg-cover rounded-full lg:w-auto lg:h-auto">
		<picture>
			<source type="image/webp" srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000&format=WEBP" />
			<source srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000" media="(min-width: 690px)" />
			<source srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=192&height=192&cache=31536000" media="(min-width: 192px)" />
			<img src="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000"
				class="object-cover w-full h-full rounded-full lg:rounded-lg lg:block dark:brightness-50 dark:hover:brightness-100 ring-brand-dark dark:ring-brand ring-4 filter-grayscale"
				alt="Gareth Wright"
				width="690"
				height="690"
				title="Gareth Wright"
			/>
		</picture>
	</div>
</template>
<script>
export default { name: "ProfileImage" };
</script>
 