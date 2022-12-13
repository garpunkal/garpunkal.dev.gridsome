<template>
	<div class="w-full mx-auto text-gray-800 rounded-lg mb-14">
		<div id="twitter-timeline"></div>
	</div>
</template>
<script>
export default {
	name: "Twitter",
	mounted() {
		window.twttr = (function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0],
				t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function(f) {
				t._e.push(f);
			}; 

			return t;
		})(document, "script", "twitter-wjs");
		
		var dataSource = {
			sourceType: "profile",
			screenName: "garpunkal",
		};

		var target = document.getElementById("twitter-timeline");
		
		var options = {
			chrome: "noheader nofooter noborder",
			height: "auto",
			width: "auto",
			dnt: true,
			theme: "dark",
			lang: "en",
			tweetLimit: 3,
			ariaPolite: "polite",
		};

		twttr.ready(function(twttr) {
			twttr.widgets.createTimeline(dataSource, target, options);
		});
	},
};
</script>
