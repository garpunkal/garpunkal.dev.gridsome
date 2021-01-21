<template>
    <div
          class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
        >
          <g-image
            alt="Gareth Wright"
            class="w-full object-cover h-full object-center block rounded-full"
            src="~/assets/images/profile.jpg"
            fit="cover"
            position="center top"            
            quality="60"
            width="192"
            height="192"
            blur="0" 
          />
        </div>
</template>
<script>
export default {
    name: 'ProfileImageSmall'
}
</script>