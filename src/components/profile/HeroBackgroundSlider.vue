<template>

  <div class="fixed top-0 left-0 w-[110%] z-0 h-screen">
    <div id="splide01" class="splide visible h-full">
      <div class="splide__track px-0 h-full">
        <ul class="splide__list">
          <li
            v-for="(img, idx) in images"
            :key="idx"
            class="splide__slide w-full before:content-[''] before:block before:w-full before:absolute before:h-full before:top-0 before:left-0 before:z-[2] max-[580px]:before:[background:transparent] before:[background:linear-gradient(180deg,rgba(0,0,0,0.03)_-0.17%,rgba(0,0,0,0.15)_100%)]"
          >
            <img class="w-full h-full object-cover object-center ml-[-5%]
            [will-change:filter] pointer-events-none
            [filter:blur(var(--blur))] [-mt:var(--blur)]
            [height:calc(100%_+_var(--blur))]"
            :src="img"
            :alt="`hero-slide-${idx+1}`" >
          </li>
        </ul>
      </div>
    </div>

    <article
      class="fixed top-0 left-0 w-full h-screen z-[9999] transition-[opacity,background-color] duration-[800ms] bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_-0.17%,rgba(0,0,0,0.15)_100%)] will-change-[opacity,filter] opacity-0"
    ></article>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => [
      'https://i.ibb.co/F4cf3W53/profile-slidein-bg.webp',
      'https://i.ibb.co/bjGQxr5S/sample-bg-image.webp',
      'https://i.ibb.co/jPw7ChWb/auth-bg.webp'
    ]
  }
})

const images = ref(props.images)
const splideInstance = ref(null)

onMounted(() => {
  if (typeof window !== 'undefined' && window.Splide) {
    console.log('HeroBackgroundSlider: Initializing Splide...')
    splideInstance.value = new window.Splide('#splide01', {
      type: 'fade',
      fixedWidth: '100%',
      height: '100vh',
      pagination: false,
      arrows: false,
      cover: false,
      autoplay: false,
      lazyLoad: 'nearby'
    })
    
    splideInstance.value.mount()
    console.log('HeroBackgroundSlider: Splide mounted successfully')
    
    // Store the instance on the DOM element for external access
    const element = document.getElementById('splide01')
    if (element) {
      element.splide = splideInstance.value
      console.log('HeroBackgroundSlider: Splide instance attached to DOM element')
    }
  }
})

// Expose methods for external control
defineExpose({
  goToSlide: (index) => {
    if (splideInstance.value) {
      console.log('HeroBackgroundSlider: goToSlide called with index:', index)
      splideInstance.value.go(index)
    }
  }
})
</script>


