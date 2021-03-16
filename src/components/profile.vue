<template>
  <div
    class="max-w-6xl flex items-center h-auto lg:h-screen/75 flex-wrap mx-auto lg:mx-10 xl:mx-auto mt-20 mb-10 md:my-12 lg:my-18"
  >
    <div
      id="profile"
      class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg shadow-2xl bg-white dark:bg-brand-dark dark:text-gray-300 mx-6 lg:mx-0 lg:rounded-r-none"
    >
      <div class="p-4 md:p-12 text-center lg:text-left">
        <ProfileImageSmall />

        <h1
          class="mt-3 text-4xl font-extrabold sm:text-6xl tracking-tighter lg:text-6xl text-brand dark:text-gray-300"
        >
          Gareth Wright
        </h1>
        <h2
          class="mb-5 md:mb-8 text-2xl font-extrabold sm:text-3xl tracking-tighter lg:text-4xl text-brand-dark dark:text-gray-500"
        >
          <a
            href="https://github.com/garpunkal"
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            @garpunkal
          </a>
        </h2>

        <p
          class="mt-5 pt-2 text-gray-600 dark:text-gray-300 text-sm lg:text-sm flex items-start justify-center lg:justify-start"
        >
         <svg
            class="hidden md:block h-5 fill-current text-brand dark:text-brand pr-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="100%"
          >
            <path
              d="M17.583.063a1.5 1.5 0 00-1.032.392 1.5 1.5 0 00-.001 0A.88.88 0 0016.5.5L8.528 9.316 3.875 5.5l-.407-.35a1 1 0 00-1.024-.154 1 1 0 00-.012.005l-1.817.75a1 1 0 00-.077.036 1 1 0 00-.047.028 1 1 0 00-.038.022 1 1 0 00-.048.034 1 1 0 00-.03.024 1 1 0 00-.044.036 1 1 0 00-.036.033 1 1 0 00-.032.035 1 1 0 00-.033.038 1 1 0 00-.035.044 1 1 0 00-.024.034 1 1 0 00-.032.05 1 1 0 00-.02.035 1 1 0 00-.024.05 1 1 0 00-.02.045 1 1 0 00-.016.044 1 1 0 00-.016.047 1 1 0 00-.015.055 1 1 0 00-.01.04 1 1 0 00-.008.054 1 1 0 00-.006.05A1 1 0 000 6.668v10.666a1 1 0 00.615.917l1.817.764a1 1 0 001.035-.164l.408-.35 4.653-3.815 7.973 8.815a1.5 1.5 0 00.072.065 1.5 1.5 0 00.057.05 1.5 1.5 0 00.058.042 1.5 1.5 0 00.063.044 1.5 1.5 0 00.065.038 1.5 1.5 0 00.065.036 1.5 1.5 0 00.068.031 1.5 1.5 0 00.07.03 1.5 1.5 0 00.073.025 1.5 1.5 0 00.066.02 1.5 1.5 0 00.08.02 1.5 1.5 0 00.068.014 1.5 1.5 0 00.075.01 1.5 1.5 0 00.075.008 1.5 1.5 0 00.073.003 1.5 1.5 0 00.077 0 1.5 1.5 0 00.078-.005 1.5 1.5 0 00.067-.007 1.5 1.5 0 00.087-.015 1.5 1.5 0 00.06-.012 1.5 1.5 0 00.08-.022 1.5 1.5 0 00.068-.02 1.5 1.5 0 00.07-.028 1.5 1.5 0 00.09-.037l4.944-2.377a1.5 1.5 0 00.476-.362 1.5 1.5 0 00.09-.112 1.5 1.5 0 00.004-.007 1.5 1.5 0 00.08-.125 1.5 1.5 0 00.062-.12 1.5 1.5 0 00.009-.017 1.5 1.5 0 00.04-.108 1.5 1.5 0 00.015-.037 1.5 1.5 0 00.03-.107 1.5 1.5 0 00.009-.037 1.5 1.5 0 00.017-.1 1.5 1.5 0 00.008-.05 1.5 1.5 0 00.006-.09 1.5 1.5 0 00.004-.08V3.942a1.5 1.5 0 000-.003 1.5 1.5 0 000-.032 1.5 1.5 0 00-.01-.15 1.5 1.5 0 00-.84-1.17L18.206.21a1.5 1.5 0 00-.622-.146zM18 6.92v10.163l-6.198-5.08zM3 8.574l3.099 3.427-3.1 3.426z"
            />
          </svg>
          C# .net MVC developer and Umbraco Expert
        </p>

        <p
          class="pt-2 text-gray-600 dark:text-gray-300 text-sm lg:text-sm flex items-center justify-center lg:justify-start"
        >
          <svg
            class="hidden md:block h-5 fill-current text-brand dark:text-brand pr-2"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
             width="24px"
            height="100%"
          >
            <title>Visual Studio Code</title>
            <path
              d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
            />
          </svg>
          Vue, Tailwind, Gridsome and Vercel Developer
        </p>

        <p
          class="pt-2 text-gray-600 dark:text-gray-300 text-xs lg:text-sm flex items-center justify-center lg:justify-start"
        >
          <a id="switchTheme" class="inline-flex cursor-pointer text-sm">
            <svg
              class="hidden md:block h-5 fill-current text-brand hover:text-brand-dark dark:text-brand dark:hover:text-white pr-2"
              viewBox="0 0 24 24"
              width="24px"
              role="img"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Dark Mode</title>
              <path
                d="M12 0C5.373 0 0 5.37 0 12s5.373 12 12 12c6.63 0 12-5.37 12-12S18.63 0 12 0zm-.84 4.67h1.68v8.36h-1.68V4.67zM12 18.155c-3.24-.002-5.865-2.63-5.864-5.868 0-2.64 1.767-4.956 4.314-5.655v1.71c-1.628.64-2.698 2.21-2.695 3.96 0 2.345 1.903 4.244 4.248 4.243 2.344-.002 4.244-1.903 4.243-4.248 0-1.745-1.07-3.312-2.694-3.95V6.63c2.55.7 4.314 3.018 4.314 5.66 0 3.24-2.626 5.864-5.865 5.864z"
              />
            </svg>
            Dark Mode
          </a>
        </p>

        <SocialLinks />
      </div>
    </div>
    <ProfileImage />
    <DownArrow />
  </div>
</template>

<script>
import SocialLinks from "@/components/sociallinks.vue";
import DownArrow from "@/components/downarrow.vue";
import ProfileImage from "@/components/profileimage.vue";
import ProfileImageSmall from "@/components/profileimagesmall.vue";

export default {
  name: "Profile",
  components: {
    SocialLinks,
    DownArrow,
    ProfileImage,
    ProfileImageSmall,
  },
  mounted: function () {
    document
      .getElementById("switchTheme")
      .addEventListener("click", function () {
        let htmlClasses = document.querySelector("html").classList;
        if (localStorage.theme == "dark") {
          htmlClasses.remove("dark");
          localStorage.removeItem("theme");
        } else {
          htmlClasses.add("dark");
          localStorage.theme = "dark";
        }
      });

    if (
      localStorage.theme === "dark" ||
      (!"theme" in localStorage &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.querySelector("html").classList.add("dark");
    } else if (localStorage.theme === "dark") {
      document.querySelector("html").classList.add("dark");
    }
  },
};
</script>