<template>
  <Layout>
    <div class="max-w-6xl flex items-center h-auto lg:h-screen/75 flex-wrap mx-auto lg:mx-10 xl:mx-auto mt-20 mb-10 md:my-12 lg:my-18" >
      <Profile />
      <ProfileImage />
      <DownArrow />
    </div>
    <Projects />    
    <Twitter />
    <Experience />
    <SiteFooter />
  </Layout>
</template>/


<script>
import Experience from "@/components/experience.vue";
import SiteFooter from "@/components/sitefooter.vue";
import Twitter from "@/components/twitter.vue";
import Projects from "@/components/projects.vue";
import Profile from "@/components/profile.vue";
import DownArrow from "@/components/downarrow.vue";
import ProfileImage from "@/components/profileimage.vue";

export default {
  name: "Home",
  metaInfo: {
    title: "Gareth Wright - Development Manager - C# .net MVC Developer",
  },
  components: {
    Experience,
    SiteFooter,
    Twitter,
    Projects,
    Profile,
    DownArrow,
    ProfileImage,
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