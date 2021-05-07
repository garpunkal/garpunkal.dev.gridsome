<template>
  <section
    class="max-w-6xl flex items-center h-auto lg:h-screen/75 flex-wrap mx-auto lg:mx-10 xl:mx-auto mt-20 mb-10 md:my-12 lg:my-18"
  >
    <div
      id="profile"
      class="w-full lg:w-3/5 rounded-lg md:rounded-r-lg lg:rounded-l-lg xl:rounded-r-none shadow-2xl bg-white dark:bg-brand-dark dark:text-gray-300 mx-6 lg:mx-0"
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
          Senior C# .net MVC Developer
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
            <title>Microsoft Azure</title>
            <path
              d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505v.014L13.23 2.7z"
            />
          </svg>
          Azure Cloud and DevOps Engineer
        </p>

        <p
          class="pt-2 text-gray-600 dark:text-gray-300 text-sm lg:text-sm flex items-start justify-center lg:justify-start"
        >
          <svg
            class="hidden md:block h-5 fill-current text-brand dark:text-brand pr-2"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="100%"
          >
            <title>Umbraco</title>
            <path
              d="M0 11.982A12 12 0 1 1 12 24 12 12 0 0 1 0 11.982zm11.756 4.11a11.856 11.856 0 0 1-2.773-.25 2.12 2.12 0 0 1-1.514-1.218q-.41-.943-.396-2.895a18.419 18.419 0 0 1 .127-2.04q.118-.988.236-1.629l.082-.425a.201.201 0 0 0 0-.038.244.244 0 0 0-.201-.236l-1.544-.246H5.74a.243.243 0 0 0-.235.189 6.517 6.517 0 0 0-.089.409c-.088.455-.17.9-.26 1.548a19.99 19.99 0 0 0-.176 2.12 11.165 11.165 0 0 0 0 1.486q.05 1.977.675 3.155.626 1.179 2.106 1.695 1.482.517 4.135.506h.22q2.655.01 4.134-.506 1.478-.518 2.1-1.695.623-1.178.678-3.147a11.165 11.165 0 0 0 0-1.485 19.99 19.99 0 0 0-.176-2.121 30.014 30.014 0 0 0-.26-1.548 6.724 6.724 0 0 0-.088-.41.243.243 0 0 0-.236-.188h-.04l-1.548.242a.236.236 0 0 0-.203.236.201.201 0 0 0 0 .037l.081.426q.118.643.236 1.63a18.709 18.709 0 0 1 .126 2.039q.019 1.95-.396 2.892a2.12 2.12 0 0 1-1.502 1.22 11.82 11.82 0 0 1-2.769.247Z"
            />
          </svg>
          Umbraco CMS Expert, Contributor and Package Developer
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
          Vue, Tailwind and Front End Developer
        </p>

        <SocialLinks />
      </div>
    </div>
    <ProfileImage />
    <DownArrow />
  </section>
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
};
</script>