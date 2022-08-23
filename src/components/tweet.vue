<template>
	<div class="w-full mx-auto rounded-lg mb-14 text-gray-800">		
		<a class="twitter-timeline" 
		 data-tweet-limit="3"
		 data-lang="en" 		
		 data-theme="dark" 
		 show-replies="false"
		 href="https://twitter.com/garpunkal?ref_src=twsrc%5Etfw" 
		 data-chrome="noheader nofooter noborders transparent"
		 dnt="true"
		 ></a>		
	</div>
</template>
<script>
export default {
	name: "Twitter",
	mounted() {
		let twitterWidgetsScript = document.createElement("script");
		twitterWidgetsScript.setAttribute("src", "https://platform.twitter.com/widgets.js");
		twitterWidgetsScript.setAttribute("async", "true");
		twitterWidgetsScript.setAttribute("defer", "true");
		twitterWidgetsScript.setAttribute("charset", "utf-8");
		document.head.appendChild(twitterWidgetsScript);
	},
};
</script>
    