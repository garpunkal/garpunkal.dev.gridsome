<template>
	<Layout>
		<Profile />
		<Projects :items="$page.highlights" title="Projects" />
		<Articles :items="$page.articles" />
		<Experiences :items="$page.experiences" />
		<Tweets />
		<SiteFooter />
	</Layout>
</template>

<script>
import Experiences from "@/components/experiences.vue";
import SiteFooter from "@/components/sitefooter.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";
import Articles from "@/components/articles.vue";
import Tweets from "@/components/tweets.vue";

export default {
	metaInfo: {
		title: "Gareth Wright - C# .net MVC Developer",
	},
	components: {
		Experiences,
		SiteFooter,
		Projects,
		Profile,
		Articles,
		Tweets,
	},
	mounted: function() {
		document.querySelectorAll('a[href^="#projects"]').forEach((anchor) => {
			anchor.addEventListener("click", function(e) {
				e.preventDefault();
				document.querySelector(this.getAttribute("href")).scrollIntoView({
					behavior: "smooth",
				});
			});
		});
		document.querySelectorAll('a[href^="#top"]').forEach((anchor) => {
			anchor.addEventListener("click", function(e) {
				e.preventDefault();
				window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			});
		});
	},
};
</script>
<page-query>
query {
    articles: allDevToArticles(page:0, perPage: 11, sortBy: "published_at", order: DESC) {
      edges {
        node {
        id
        title
        published_at        
        description
        tag_list
        canonical_url
        cover_image      
        }
      }
    }  
   experiences: allExperiences(sortBy: "orderDate", order: DESC) {
    edges {
      node {
        id
        title
        job
        location       
        logo {
          url			   
			    background
			    alt
        }
        url
        shortUrl  
        from
        to
        isCurrent
        hideDescription
        description
        projects {
          title
          items {
            name
            url
          }
        }       
        contributions {
           title
          items {
            name
            url
          }
        }
        orderDate
      }
    }
   }
  highlights : allHighlights(sortBy: "sortOrder", order: DESC) {
    edges {
      node {
        id        
        title
        image {
          url
          alt         
        }
        url
        position        
        sortOrder
        isHighlight
        isWinner
      }
    }
  } 
}
</page-query>
