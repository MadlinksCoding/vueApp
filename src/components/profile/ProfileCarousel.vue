<template>
  <!-- Gallery Carousel for Tablet and Mobile -->
  <div
    id="splide02"
    class="splide flex w-full py-[.3125rem] [transition:opacity_0.8s] relative md:py-[0.313rem] xl:hidden"
    role="region"
    aria-roledescription="carousel"
  >
    <!-- slider-track -->
    <div
      class="splide__track w-full px-0 mx-auto md:mr-[unset]"
      id="splide02-track"
    >
      <!-- slider list -->
      <ul
        id="splide02-list"
        class="splide__list w-full"
        role="presentation"
      >
        <!-- slider items -->
        <li
          v-for="(item, index) in carouselItems"
          :key="index"
          class="splide__slide flex flex-col items-start gap-4 z-[-2] border-l-4 border-r-4 border-transparent bg-center bg-cover bg-no-repeat max-[580px]:rounded-sm opacity-50 max-[580px]:!border-none is-active [&.is-active]:opacity-100"
          :style="{ backgroundImage: `url('${item.image}')` }"
        >
          <img
            class="hidden"
            :src="item.image"
            :alt="item.alt"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  carouselItems: {
    type: Array,
    default: () => [
      {
        image: 'https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp',
        alt: 'profile-slidein-bg'
      },
      {
        image: 'https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp',
        alt: 'sample-bg-image'
      },
      {
        image: 'https://i.ibb.co.com/jPw7ChWb/auth-bg.webp',
        alt: 'auth-bg'
      }
    ]
  }
})
</script>
