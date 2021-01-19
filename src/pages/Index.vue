<template>
  <Layout>
    <Profile />
    <Projects />
    <Twitter />

    <section class="text-white bg-gray-900 body-font">
      <div class="container px-5 py-5 md:py-24 mx-auto">
        <div
          class="pt-0 pb-10 sm:items-start mx-auto"
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
        >
          <Experience :item="edge.node" />
        </div>
      </div>
    </section>

    <SiteFooter />
  </Layout>
</template>

<script>
import Experience from "@/components/experience.vue";
import SiteFooter from "@/components/sitefooter.vue";
import Twitter from "@/components/twitter.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";

export default {
  name: "Index",
  metaInfo: {
    title: "Gareth Wright - Development Manager - Senior C# .net MVC Developer",
  },
  components: {
    Experience,
    SiteFooter,
    Twitter,
    Projects,
    Profile,
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
   posts: allExperiences(sortBy: "id", order: ASC) {
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
      }
    }
  }
}
</page-query>
