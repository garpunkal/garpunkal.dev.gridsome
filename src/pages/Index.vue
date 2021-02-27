<template>
  <Layout>
 
    <Profile />
   
    <section
      class="text-gray-500 bg-gray-900 dark:text-gray-300 dark:bg-gray-900 body-font"
    >
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap" id="content">
          <p
            class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-center text-white  dark:text-gray-400"
          >
            I love working with clients throughout the longevity of a project,
            from initial conversations to delivery and further. They're part of
            the team that ultimately delivers great creative projects to help
            businesses succeed.
          </p>
        </div>

        <div class="flex flex-wrap md:-m-2 -m-1">
          <div
            class="flex flex-wrap w-full md:w-1/2"
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

    <Twitter />

    <section class="text-white bg-gray-900 body-font">
      <div class="container px-5 py-5 md:py-24 mx-auto">
        <div
          class="pt-0 pb-10 sm:items-start mx-auto"
          v-for="edge in $page.experiences.edges"
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
import Project from "@/components/project.vue";
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
    Project,
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
  projects : allProjects(sortBy: "id", order: ASC) {
    edges {
      node {
        id 
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
