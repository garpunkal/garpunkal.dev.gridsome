<template>
  <Layout>
    <Profile />
    <Projects />
    <Twitter />
    <Experience />
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