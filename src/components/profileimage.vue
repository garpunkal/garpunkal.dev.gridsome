<template>
	<button id="switchTheme" aria-label="dark mode" title="dark mode" class="w-full">
		<div class="w-48 h-48 mx-auto bg-center bg-cover rounded-full lg:w-auto lg:h-auto">
			<picture>
				<source type="image/webp" :srcset="image.webp + `&width=690&height=690`" />
				<source :srcset="image.url + `&width=690&height=690`" media="(min-width: 690px)" />
				<source :srcset="image.url + `&width=192&height=192`" media="(min-width: 192px)" />
				<img
					:src="image.url + `&width=690&height=690`"
					:alt="image.alt"
					:title="image.alt"
					class="object-cover w-full h-full rounded-full lg:rounded-lg lg:block dark:brightness-50 dark:hover:brightness-100 ring-mirage dark:ring-ocean ring-4 filter-grayscale lg:shadow-2xl-black"					
					width="690"
					height="690"					
				/>
			</picture>		
		</div>
	</button>
</template>
<script>
export default {
	name: "ProfileImage",
	props: {
		image: { type: Object, required: true },
	},
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
