<template>
  <!-- Mobile and Tablet Thumbnail Carousel -->
  <div class="flex xl:hidden w-full py-4">
    <div class="flex flex-row gap-3 overflow-x-auto scrollbar-hide">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        class="relative w-[2.5rem] h-[2.5rem] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 flex-shrink-0"
        :class="{
          'ring-2 ring-white ring-opacity-80 shadow-lg': activeIndex === index,
          'opacity-70 hover:opacity-100': activeIndex !== index
        }"
        @click="selectImage(item, index)"
      >
        <img
          :src="item.image"
          :alt="item.alt"
          class="w-full h-full object-cover"
        />
        <!-- Active indicator -->
        <div
          v-if="activeIndex === index"
          class="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center"
        >
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  },
  currentBackgroundIndex: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['carousel-click'])

// Track which thumbnail is currently active
const activeIndex = ref(props.currentBackgroundIndex)

// Method to select an image
const selectImage = (item, index) => {
  console.log('ProfileMobileTabletCarousel: selectImage called with:', { item, index })
  activeIndex.value = index
  emit('carousel-click', { item, index })
  console.log('ProfileMobileTabletCarousel: emitted carousel-click event')
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar { 
  display: none;  /* Safari and Chrome */
}
</style>
