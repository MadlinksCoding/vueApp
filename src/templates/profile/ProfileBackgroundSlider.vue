<template>
  <!-- main-slider -->
  <div class="fixed top-0 left-0 w-[110%] z-[-1] h-screen">
    <!-- profile-main-slider -->
    <Splide
      ref="backgroundSlider"
      :options="splideOptions"
      class="h-full"
      @splide:moved="onSliderMove"
    >
      <SplideSlide
        v-for="(image, index) in backgroundImages"
        :key="index"
        class="w-full before:content-[''] before:block before:w-full before:absolute before:h-full before:top-0 before:left-0 before:z-[2] max-[580px]:before:[background:transparent] before:[background:linear-gradient(180deg,rgba(0,0,0,0.03)_-0.17%,rgba(0,0,0,0.15)_100%)]"
      >
        <img
          class="w-full h-full object-cover object-center ml-[-5%] [will-change:filter] pointer-events-none [filter:blur(var(--blur))] [-mt:var(--blur)] [height:calc(100%_+_var(--blur))]"
          :src="image"
          :alt="`background-${index + 1}`"
        />
      </SplideSlide>
    </Splide>

    <!-- blur-overlay -->
    <article
      ref="blurOverlay"
      class="fixed top-0 left-0 w-full h-screen z-[9999] transition-[opacity,background-color] duration-[800ms] bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_-0.17%,rgba(0,0,0,0.15)_100%)] will-change-[opacity,filter] opacity-0"
    ></article>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      'https://i.ibb.co.com/F4cf3W53/profile-slidein-bg.webp',
      'https://i.ibb.co.com/bjGQxr5S/sample-bg-image.webp',
      'https://i.ibb.co.com/jPw7ChWb/auth-bg.webp'
    ]
  }
})

const emit = defineEmits(['slider-moved'])

const backgroundSlider = ref(null)
const blurOverlay = ref(null)
const backgroundImages = ref(props.images)

const splideOptions = {
  type: 'fade',
  rewind: true,
  pagination: false,
  arrows: false,
  autoplay: false,
  speed: 800,
  width: '100%',
  height: '100vh',
  cover: true
}

const onSliderMove = (splide, newIndex) => {
  emit('slider-moved', newIndex)
}

// Scroll handler for blur effect
const handleScroll = () => {
  const scrollY = window.scrollY
  const banner = document.querySelector('[data-section="banner"]')
  if (!banner) return

  const start = 100
  const end = banner.clientHeight + 200
  const maxBlur = 25
  let blur = scrollY <= start ? 0 : scrollY >= end ? maxBlur : ((scrollY - start) / (end - start)) * maxBlur

  document.documentElement.style.setProperty('--blur', `${blur}px`)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initialize blur variable
  document.documentElement.style.setProperty('--blur', '0px')
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Expose methods for external control
defineExpose({
  goToSlide: (index) => {
    if (backgroundSlider.value?.splide) {
      backgroundSlider.value.splide.go(index)
    }
  }
})
</script>
