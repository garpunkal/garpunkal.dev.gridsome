<template>
	<a href="#!" id="switchTheme" aria-label="dark mode" title="dark mode">
		<div class="w-48 h-48 mx-auto bg-center bg-cover rounded-full lg:w-auto lg:h-auto">
			<picture>
				<source type="image/webp" srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000&format=WEBP" />
				<source srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000" media="(min-width: 690px)" />
				<source srcset="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=192&height=192&cache=31536000" media="(min-width: 192px)" />
				<img
					src="https://cloud.squidex.io/api/assets/garpunkaldev/6e2fa349-4700-4197-b993-7605df7cac07/profile.png?width=690&height=690&cache=31536000"
					class="object-cover w-full h-full rounded-full lg:rounded-lg lg:block dark:brightness-50 dark:hover:brightness-100 ring-mirage dark:ring-ocean ring-4 filter-grayscale"
					alt="Gareth Wright"
					width="690"
					height="690"
					title="Gareth Wright"
				/>
			</picture>
		</div>
	</a>
</template>
<script>
export default {
	name: "ProfileImage",
	mounted: function() {
		document.getElementById("switchTheme").addEventListener("click", function() {
			let htmlClasses = document.querySelector("html").classList;
			if (localStorage.theme == "dark") {
				htmlClasses.remove("dark");
				localStorage.removeItem("theme");
			} else {
				htmlClasses.add("dark");
				localStorage.theme = "dark";
			}
		});
		if (localStorage.theme === "dark" || (!"theme" in localStorage && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.querySelector("html").classList.add("dark");
		} else if (localStorage.theme === "dark") {
			document.querySelector("html").classList.add("dark");
		}
	},
};
</script>
