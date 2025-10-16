<template>
  <!-- profile options -->
  <div class="hidden w-1/2 xl:block">
    <div
      id="splide03"
      class="splide w-full [transition:opacity_0.8s]"
    >
      <!-- slider-track -->
      <div
        class="splide__track w-[80%] ml-auto px-0"
        id="splide03-track"
      >
        <!-- slider list -->
        <ul
          id="splide03-list"
          class="splide__list w-full"
          role="presentation"
        >
          <li
            v-for="(item, index) in carouselItems"
            :key="index"
            class="splide__slide flex flex-col items-start gap-4 relative opacity-50 p-4 bg-cover bg-center bg-no-repeat [transform:scaleY(70%)] [transition:transform_0.2s] z-[-2] [&.is-prev]:flex [&.is-prev]:[transform:scaleY(90%)] [&.is-prev]:z-[-1] [&.is-next]:flex [&.is-next]:[transform:scaleY(90%)] [&.is-next]:z-[-1] [&.is-active]:flex [&.is-active]:!w-[40%] [&.is-active]:[transform:scale(100%,100%)] [&.is-active]:rounded [&.is-active]:opacity-100 [&.is-active]:z-[1] cursor-pointer"
            :style="{ backgroundImage: `url('${item.image}')` }"
            @click="$emit('carousel-click', item)"
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

const emit = defineEmits(['carousel-click'])
</script>
