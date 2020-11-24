<template>
  <Layout>
    <div class="max-w-6xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-6 lg:mx-0">
        <div class="p-4 md:p-12 text-center lg:text-left">
          <!-- Image for mobile view-->
          <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center">
            <g-image alt="Gareth Wright" class="w-full object-cover h-full object-center block rounded-full "
              src="../images/profile.jpg" fit="cover" position="center top" immediate="false" quality="60" />
          </div>

          <h1 class="text-3xl font-bold pt-8 lg:pt-0">Gareth Wright</h1>

          <div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 brand-color opacity-25"></div>

          <p class="pt-4 text-base flex items-center justify-center lg:justify-start">
            <svg class="h-4 fill-current text-brand pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            Development Manager
          </p>

          <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg class="h-4 fill-current text-brand pr-4" role="img" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <title>Visual Studio icon</title>
              <path
                d="M17.583.063a1.5 1.5 0 00-1.032.392 1.5 1.5 0 00-.001 0A.88.88 0 0016.5.5L8.528 9.316 3.875 5.5l-.407-.35a1 1 0 00-1.024-.154 1 1 0 00-.012.005l-1.817.75a1 1 0 00-.077.036 1 1 0 00-.047.028 1 1 0 00-.038.022 1 1 0 00-.048.034 1 1 0 00-.03.024 1 1 0 00-.044.036 1 1 0 00-.036.033 1 1 0 00-.032.035 1 1 0 00-.033.038 1 1 0 00-.035.044 1 1 0 00-.024.034 1 1 0 00-.032.05 1 1 0 00-.02.035 1 1 0 00-.024.05 1 1 0 00-.02.045 1 1 0 00-.016.044 1 1 0 00-.016.047 1 1 0 00-.015.055 1 1 0 00-.01.04 1 1 0 00-.008.054 1 1 0 00-.006.05A1 1 0 000 6.668v10.666a1 1 0 00.615.917l1.817.764a1 1 0 001.035-.164l.408-.35 4.653-3.815 7.973 8.815a1.5 1.5 0 00.072.065 1.5 1.5 0 00.057.05 1.5 1.5 0 00.058.042 1.5 1.5 0 00.063.044 1.5 1.5 0 00.065.038 1.5 1.5 0 00.065.036 1.5 1.5 0 00.068.031 1.5 1.5 0 00.07.03 1.5 1.5 0 00.073.025 1.5 1.5 0 00.066.02 1.5 1.5 0 00.08.02 1.5 1.5 0 00.068.014 1.5 1.5 0 00.075.01 1.5 1.5 0 00.075.008 1.5 1.5 0 00.073.003 1.5 1.5 0 00.077 0 1.5 1.5 0 00.078-.005 1.5 1.5 0 00.067-.007 1.5 1.5 0 00.087-.015 1.5 1.5 0 00.06-.012 1.5 1.5 0 00.08-.022 1.5 1.5 0 00.068-.02 1.5 1.5 0 00.07-.028 1.5 1.5 0 00.09-.037l4.944-2.377a1.5 1.5 0 00.476-.362 1.5 1.5 0 00.09-.112 1.5 1.5 0 00.004-.007 1.5 1.5 0 00.08-.125 1.5 1.5 0 00.062-.12 1.5 1.5 0 00.009-.017 1.5 1.5 0 00.04-.108 1.5 1.5 0 00.015-.037 1.5 1.5 0 00.03-.107 1.5 1.5 0 00.009-.037 1.5 1.5 0 00.017-.1 1.5 1.5 0 00.008-.05 1.5 1.5 0 00.006-.09 1.5 1.5 0 00.004-.08V3.942a1.5 1.5 0 000-.003 1.5 1.5 0 000-.032 1.5 1.5 0 00-.01-.15 1.5 1.5 0 00-.84-1.17L18.206.21a1.5 1.5 0 00-.622-.146zM18 6.92v10.163l-6.198-5.08zM3 8.574l3.099 3.427-3.1 3.426z" />
            </svg>
            C# .net MVC developer and Umbraco Expert
          </p>

          <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg class="h-4 fill-current text-brand pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>
            Andover, Hampshire, UK
          </p>

          <p class="pt-8 text-sm">
            I have worked for digital agencies for 20 years and I love their
            fast paced, highly creative and collaborative environments.
            <br /><br />
            I'm very much a team player who can't get enough of those tight
            deadlines.
            <br /><br />Development isn't just coding, it's about being
            understanding, empathetic and passionate. This always delivers the
            best results.
          </p>

          <p class="pt-8 text-sm">
            Check out my latest Skrift article:<br /><a href="https://skrift.io/authors/gareth-wright"
              class="font-bold">https://skrift.io/authors/gareth-wright</a>
          </p>

          <!-- <div class="pt-6 pb-8">
				<button class="brand-color bg-brand hover:bg-black text-white font-bold py-2 px-4 rounded-full">
				  Get In Touch
				</button> 
			</div> -->

          <div class="mt-12 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            <a class="link" href="https://twitter.com/garpunkal" data-tippy-content="@twitter_handle" target="_blank"
              rel="nonopener"><svg class="h-6 fill-current text-gray-600 hover:text-brand" role="img"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Twitter</title>
                <path
                  d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg></a>
            <a class="link" href="https://github.com/garpunkal" data-tippy-content="@github_handle" target="_blank"
              rel="nonopener"><svg class="h-6 fill-current text-gray-600 hover:text-brand" role="img"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg></a>
            <a class="link"
              href="https://umbraco.com/training/certified-developers/developer/?id=e0ad657a-e715-4852-8063-f11e398d686a"
              data-tippy-content="@umbraco_handle" target="_blank" rel="nonopener"><svg
                class="h-6 fill-current text-gray-600 hover:text-brand" role="img" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>Umbraco Certified Developer</title>
                <path
                  d="M0 12C0 5.522 5.363.319 12 .319S24 5.522 24 12c0 6.476-5.363 11.681-12 11.681S0 18.477 0 12zm11.734 3.98c-1.168 0-2.123-.104-2.76-.211-.744-.158-1.223-.584-1.541-1.168-.266-.586-.424-1.539-.371-2.814 0-.689.053-1.327.104-1.965.108-.636.16-1.167.267-1.594l.105-.424v-.052c0-.105-.105-.213-.212-.213l-1.54-.212h-.052c-.105 0-.213.105-.266.16 0 .104-.053.159-.104.371-.108.478-.161.902-.267 1.486-.109.685-.163 1.378-.159 2.071 0 0-.053.159 0 1.434s.266 2.283.69 3.08c.425.742 1.116 1.326 2.124 1.645 1.01.32 2.389.479 4.142.479h.213c1.753 0 3.132-.158 4.14-.479 1.01-.318 1.701-.902 2.126-1.645.425-.795.638-1.805.69-3.08.053-1.275 0-1.434 0-1.434 0-.743-.104-1.435-.16-2.069-.105-.638-.158-1.063-.266-1.487-.053-.212-.053-.319-.105-.371 0-.107-.105-.16-.266-.16h-.053l-1.54.212c-.105 0-.213.107-.213.213v.052l.106.424c.106.427.158.957.266 1.593.105.639.105 1.275.105 1.965 0 1.275-.104 2.177-.371 2.814-.266.586-.795 1.01-1.539 1.168-.639.16-1.594.213-2.762.213h-.531v-.002z" />
              </svg></a>

            <a class="link" href="https://www.reddit.com/user/garpunkal" data-tippy-content="@reddit_handle"
              target="_blank" rel="nonopener"><svg class="h-6 fill-current text-gray-600 hover:text-brand" role="img"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Reddit</title>
                <path
                  d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg></a>
            <a class="link" href="https://stackexchange.com/users/94651/garpunkal" data-tippy-content="@umbraco_handle"
              target="_blank" rel="nonopener"><svg class="h-6 fill-current text-gray-600 hover:text-brand" role="img"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Stack Overflow</title>
                <path
                  d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
              </svg></a>

            <a class="link" href="https://www.paypal.me/garpunkal" data-tippy-content="@paypal_handle" target="_blank"
              rel="nonopener"><svg class="h-6 fill-current text-gray-600 hover:text-brand" role="img"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>PayPal</title>
                <path
                  d="M6.908 24H3.804c-.664 0-1.086-.529-.936-1.18l.149-.674h2.071c.666 0 1.336-.533 1.482-1.182l1.064-4.592c.15-.648.816-1.18 1.48-1.18h.883c3.789 0 6.734-.779 8.84-2.34s3.16-3.6 3.16-6.135c0-1.125-.195-2.055-.588-2.789 0-.016-.016-.031-.016-.046l.135.075c.75.465 1.32 1.064 1.711 1.814.404.75.598 1.68.598 2.791 0 2.535-1.049 4.574-3.164 6.135-2.1 1.545-5.055 2.324-8.834 2.324h-.9c-.66 0-1.334.525-1.484 1.186L8.39 22.812c-.149.645-.81 1.17-1.47 1.17L6.908 24zm-2.677-2.695H1.126c-.663 0-1.084-.529-.936-1.18L4.563 1.182C4.714.529 5.378 0 6.044 0h6.465c1.395 0 2.609.098 3.648.289 1.035.189 1.92.519 2.684.99.736.465 1.322 1.072 1.697 1.818.389.748.584 1.68.584 2.797 0 2.535-1.051 4.574-3.164 6.119-2.1 1.561-5.056 2.326-8.836 2.326h-.883c-.66 0-1.328.524-1.478 1.169L5.7 20.097c-.149.646-.817 1.172-1.485 1.172l.016.036zm7.446-17.369h-1.014c-.666 0-1.332.529-1.48 1.178l-.93 4.02c-.15.648.27 1.179.93 1.179h.766c1.664 0 2.97-.343 3.9-1.021.929-.686 1.395-1.654 1.395-2.912 0-.83-.301-1.445-.9-1.84-.6-.404-1.5-.605-2.686-.605l.019.001z" />
              </svg></a>
          </div>

          <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
        </div>
      </div>
      <!--Img Col-->
      <div class="w-full lg:w-2/5">
        <!-- Big profile image for side bar (desktop) -->
        <g-image src="../images/profile.jpg"
          class="rounded-none lg:rounded-lg lg:rounded-l-none shadow-2xl hidden lg:block" alt="Gareth Wright"
          immediate="true" quality="60" />
      </div>

      <div class="flex justify-center w-full pt-20 md:pt-0">
        <a href="#content">
          <svg class="animate-bounce w-6 h-6 text-amber-900" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" viewBox="0 0 24 24" stroke="white">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </div>

    <section class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <a id="content"></a>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            Projects
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            I love working with clients throughout the longevity of a project,
            from initial conversations to delivery and further. They're part of
            the team that ultimately delivers great creative projects to help
            businesses succeed.
          </p>
        </div>

        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-full md:w-1/2">
            <div class="md:p-2 p-1 w-full">
              <a href="https://www.nextbase.com/en-gb" target="_blank" rel="noopener">
                <g-image alt="Nextbase"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/nextbase.png" fit="cover" width="601" height="361" position="center top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.occstrategy.com/en/" target="_blank" rel="noopener">
                <g-image alt="OCC Strategy"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/occ.png" fit="cover" width="502" height="302" position="left top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.sunbites.co.uk" target="_blank" rel="noopener">
                <g-image alt="Sunbites"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/sunbites.png" fit="cover" width="503" height="303" position="center top"
                  immediate="false" quality="60" />
              </a>
            </div>
          </div>
          <div class="flex flex-wrap w-full md:w-1/2">
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.wrighthassall.co.uk" target="_blank" rel="noopener">
                <g-image alt="Wright Hassall"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/wrighthassall.png" fit="cover" width="500" height="300" position="left top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.hrp.org.uk" target="_blank" rel="noopener">
                <g-image alt="Historic Royal Palaces"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/hrp.png" fit="cover" width="501" height="301" position="center top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full">
              <a href="https://www.isio.com" target="_blank" rel="noopener">
                <g-image alt="Isio" class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/isio.png" fit="cover" width="600" height="360" position="center top" immediate="false"
                  quality="60" />
              </a>
            </div>
          </div>

          <div class="flex flex-wrap w-full md:w-1/2">
            <div class="md:p-2 p-1 w-full">
              <a href="https://www.skyoceanrescue.com" target="_blank" rel="noopener">
                <g-image alt="Sky Ocean Rescue"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/sor.png" fit="cover" width="502" height="302" position="left top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.addict.co.uk" target="_blank" rel="noopener">
                <g-image alt="Addict" class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/addict.png" fit="cover" width="502" height="302" position="left top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.shreksadventure.com" target="_blank" rel="noopener">
                <g-image alt="Shreks Adventure"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/shrek.png" fit="cover" width="503" height="303" position="top" immediate="false"
                  quality="60" />
              </a>
            </div>
          </div>
          <div class="flex flex-wrap w-full md:w-1/2">

            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.merlinsmagicallondon.com" target="_blank" rel="noopener">
                <g-image alt="Merlin's Magical London"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/mml.png" fit="cover" width="500" height="300" position="center top" immediate="false"
                  quality="60" />
              </a>
            </div>

            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.visitsealife.com" target="_blank" rel="noopener">
                <g-image alt="Sea Life"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/sealife.png" fit="cover" width="501" height="301" position="left top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full">
              <g-image alt="3m Make It Happen"
                class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                src="../images/makeithappen.png" fit="cover" width="600" height="360" position="center top"
                immediate="false" quality="60" />
            </div>



          </div>
          <div class="flex flex-wrap w-full md:w-1/2">


            <div class="md:p-2 p-1 w-full">
              <a href="https://www.madametussauds.com" target="_blank" rel="noopener">
                <g-image alt="Madame Tussauds"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/madametussauds.png" fit="cover" width="502" height="302" position="center top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.egress.com" target="_blank" rel="noopener">
                <g-image alt="Egress"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/egress.png" fit="cover" width="502" height="302" position="top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.railcard.co.uk" target="_blank" rel="noopener">
                <g-image alt="Rail Delivery Group"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/rdg.png" fit="cover" width="503" height="303" position="top" immediate="false"
                  quality="60" />
              </a>
            </div>

          </div>
          <div class="flex flex-wrap w-full md:w-1/2">


            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://crimestoppers-uk.org/" target="_blank" rel="noopener">
                <g-image alt="Crimestoppers"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/crimestoppers.png" fit="cover" width="500" height="300" position="left top"
                  immediate="false" quality="60" />
              </a>
            </div>

            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://afaeducation.org/" target="_blank" rel="noopener">
                <g-image alt="Achievement For All"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/afa.png" fit="cover" width="501" height="301" position="top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full">
              <a href="http://www.londoneye.com" target="_blank" rel="noopener">
                <g-image alt="London Eye"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/londoneye.png" fit="cover" width="600" height="360" position="top" immediate="false"
                  quality="60" />
              </a>
            </div>



          </div>
          <div class="flex flex-wrap w-full md:w-1/2">


            <div class="md:p-2 p-1 w-full">
              <a href="https://www.nakedjuice.co.uk" target="_blank" rel="noopener">
                <g-image alt="Naked Juice" class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/nakedjuice.png" fit="cover" width="502" height="302" position="top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.spar.co.uk" target="_blank" rel="noopener">
                <g-image alt="Spar" class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/spar.png" fit="cover" width="502" height="302" position="left top" immediate="false"
                  quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.godolphin.com" target="_blank" rel="noopener">
                <g-image alt="Godolphin"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/godolphin.png" fit="cover" width="503" height="303" position="top" immediate="false"
                  quality="60" />
              </a>
            </div>

          </div>
          <div class="flex flex-wrap w-full md:w-1/2">

            <div class="md:p-2 p-1 w-full md:w-1/2">
              <g-image alt="eFooters" class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                src="../images/efooters.png" fit="cover" width="500" height="300" position="left top" immediate="false"
                quality="60" />
            </div>

            <div class="md:p-2 p-1 w-full md:w-1/2">
              <a href="https://www.taylorroot.com" target="_blank" rel="noopener">
                <g-image alt="Taylor Root"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/taylorroot.png" fit="cover" width="501" height="301" position="left top"
                  immediate="false" quality="60" />
              </a>
            </div>
            <div class="md:p-2 p-1 w-full">
              <a href="http://www.littlefreddie.com" target="_blank" rel="noopener">
                <g-image alt="littlefreddie"
                  class="w-full object-cover h-full object-center block rounded-lg lg:rounded-l-lg"
                  src="../images/littlefreddie.png" fit="cover" width="600" height="360" position="top"
                  immediate="false" quality="60" />
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>

    <div class="mbg-gray-200 flex items-center justify-center px-10 py-10">
      <div class="w-100 mx-auto rounded-lg p-5 text-gray-800">
        <a class="twitter-timeline" href="https://twitter.com/garpunkal" data-tweet-limit="1" data-theme="light"
          data-width="600"></a>
      </div>
    </div>

    <footer class="text-gray-500 bg-gray-900 body-font">
      <div class="container px-10 py-10 mx-auto flex flex-wrap">
        <div class="flex w-full flex-wrap">
          <p class="mx-auto">&copy; 2020 Gareth Wright</p>
        </div>
      </div>
    </footer>
  </Layout>
</template>


<script>
  export default {
    name: 'Home',
    metaInfo: {
      title: 'Gareth Wright - Development Manager - C# .net MVC Developer',
    }
  }
</script>