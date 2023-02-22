<template>
	<Layout>
		<Profile :items="$page.homes" />
		<Projects :items="$page.highlights" :home="$page.homes" />
		<Articles :items="$page.articles" :home="$page.homes"  />
		<Experiences :items="$page.experiences" :home="$page.homes"  />
		<Footer :items="$page.homes" />
	</Layout>
</template>

<script>
import Experiences from "@/components/experiences.vue";
import Footer from "@/components/footer.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";
import Articles from "@/components/articles.vue";

export default {
	metaInfo: {
		title: "Gareth Wright - Technical Development Lead",
	},
	components: {
		Experiences,
		Footer,
		Projects,
		Profile,
		Articles	
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
   homes: allHomes(limit: 1) {        
    edges { 
      node {
        id
        title
        subTitle
        githubUrl       
        image {
          webp
          url
          alt
        }
        githubSource {
          title
          url
          svgPath
        }
        socials { 
          title         
          url
          cssClasses
          svgPath
          svgStroke
          svgStrokeWidth
          svgFill
          svgStrokeLineCap
          svgStrokeLineJoin
        }
        specialisms {           
          title         
          url
          cssClasses
          svgPath
          svgStroke
          svgStrokeWidth
          svgFill
          svgStrokeLineCap
          svgStrokeLineJoin
        }
        footerLinks { 
          title         
          url
          cssClasses
          svgPath
          svgStroke
          svgStrokeWidth
          svgFill
          svgStrokeLineCap
          svgStrokeLineJoin
        }
        projectsLabel
        articlesLabel
        experiencesLabel
        }
      } 
    }
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
          positive_reactions_count
          comments_count         
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
          webp
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
  highlights : allHighlights(sort: [{ by: "sortOrder", order: DESC }, { by: "title", order: ASC }]) {
    edges {
      node {
        id        
        title
        image {
          webp
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
