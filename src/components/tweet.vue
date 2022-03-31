<template>
	<div class="w-100 mx-auto rounded-lg mb-14 text-gray-800">
		<a
			class="twitter-timeline"
			href="https://twitter.com/garpunkal"
			data-tweet-limit="1"
			data-theme="dark"
			data-width="800"
			data-height="200"
			data-chrome="noheader nofooter noborders"
		></a>
	</div>
</template>
<script>
export default {
	name: "Twitter",
	mounted() {
		let twitterWidgetsScript = document.createElement("script");
		twitterWidgetsScript.setAttribute(
			"src",
			"https://platform.twitter.com/widgets.js"
		);
		twitterWidgetsScript.setAttribute("async", "true");
		twitterWidgetsScript.setAttribute("defer", "true");
		twitterWidgetsScript.setAttribute("charset", "utf-8");
		document.head.appendChild(twitterWidgetsScript);
	},
};
</script>
