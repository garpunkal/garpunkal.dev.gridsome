<template>
  <Layout>
    <Profile />
    <Articles :items="$page.articles" />
    <Projects :items="$page.projects" />
    <Experiences :items="$page.experiences" />
    <Statement />
    <Tweets />
    <SiteFooter />
  </Layout>
</template>

<script>
import Experiences from "@/components/experiences.vue";
import SiteFooter from "@/components/sitefooter.vue";
import Tweets from "@/components/tweets.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";
import Statement from "@/components/statement.vue";
import Articles from "@/components/articles.vue";

export default {  
  metaInfo: {
    title: "Gareth Wright - C# .net MVC Developer",
  },
  components: {
    Experiences,
    SiteFooter,
    Tweets,
    Projects,
    Profile,
    Statement,
    Articles,
  },
  mounted: function () {
    document.querySelectorAll('a[href^="#content"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    document.querySelectorAll('a[href^="#top"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
    });
  },
};
</script>
<page-query>
query {
    articles: allDevToArticles(page:0, perPage: 5, sortBy: "published_at", order: DESC) {
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
  projects : allProjects(sortBy: "orderNumber", order: ASC) {
    edges {
      node {
        id 
        orderNumber
        projects {
          title
          image {
            url
            alt
            width
            height
          }
          url
          position
          large
        }       
      }
    }
  } 
}
</page-query>
