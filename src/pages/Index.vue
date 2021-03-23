<template>
  <Layout>
    <Profile />

    <section
      class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
      id="articles"
    >
      <div class="container px-5 py-5 md:py-14 mx-auto">
        <div class="flex w-full flex-wrap mb-20">
          <h3
            class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10"
          >
            Articles
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="edge in $page.devToArticles.edges" :key="edge.node.id">
            <div
              class="rounded-lg shadow-lg border-2 border-brand dark:border-brand"
            >
              <Article :item="edge.node" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
      id="projects"
    >
      <div class="container px-5 py-5 md:py-14 mx-auto">
        <div class="flex w-full flex-wrap mb-20">
          <h3
            class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10 lg:mt-0"
          >
            Projects
          </h3>
        </div>

        <div class="flex flex-wrap md:-m-2 -m-1">
          <div
            class="flex flex-wrap w-1/2 md:w-1/2"
            v-for="edge in $page.projects.edges"
            :key="edge.node.id"
          >
            <div
              class="md:p-2 p-1 w-full"
              :class="{ 'md:w-1/2': project.large !== true }"
              v-for="project in edge.node.projects"
              :key="project.id"
            >
              <Project :item="project" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
      id="experience"
    >
      <div class="container px-5 py-5 md:py-14 mx-auto">
        <div class="flex w-full flex-wrap mb-20">
          <h3
            class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10 lg:mt-0"
          >
            Experience
          </h3>
        </div>
        <div
          class="pt-0 pb-10 sm:items-start mx-auto"
          v-for="edge in $page.experiences.edges"
          :key="edge.node.id"
        >
          <Experience :item="edge.node" />
        </div>
      </div>
    </section>

    <Statement />

    <section
      class="text-gray-500 bg-brand-dark dark:text-gray-300 dark:bg-gray-900 body-font"
      id="tweets"
    >
      <div class="container px-5 py-5 md:py-14 mx-auto">
        <div class="flex w-full flex-wrap mb-20">
          <h3
            class="text-3xl font-extrabold sm:text-65xl tracking-tighter lg:text-4xl text-gray-600 dark:text-gray-500 text-center w-full mt-10 lg:mt-0"
          >
            Tweets
          </h3>
        </div>
        <div class="flex w-full flex-wrap justify-center px-10 mt-10 md:mt-0">
          <Twitter />
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
import Project from "@/components/project.vue";
import Profile from "@/components/profile.vue";
import Statement from "@/components/statement.vue";
import Article from "@/components/article.vue";

export default {
  name: "Index",
  metaInfo: {
    title: "Gareth Wright - C# .net MVC Developer",
  },
  components: {
    Experience,
    SiteFooter,
    Twitter,
    Project,
    Profile,
    Statement,
    Article,
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
    devToArticles: allDevToArticles(page:0, perPage: 4, sortBy: "published_at", order: DESC) {
      edges {
        node {
        id
        title
        published_at
        readable_publish_date
        description
        tag_list
        canonical_url
        cover_image
        comments_count
        page_views_count
        time_to_read
        type_of
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
