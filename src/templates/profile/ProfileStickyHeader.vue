<template>
  <!-- header-component -->
  <div
    ref="headerComponent"
    data-header-component
    class="flex flex-col-reverse justify-between w-full bg-black/30 backdrop-blur-[10px] px-0 fixed top-0 -translate-y-full [transition:transform_0.3s_ease] z-[9999] max-[580px]:[background:linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.50)_25%,rgba(0,0,0,0.01)_100%)] max-[580px]:backdrop-blur-[50px] md:px-4 xl:flex-row xl:gap-4 xl:px-12 group [&.scroll-active]:translate-y-0"
  >
    <!-- navigation-section -->
    <div class="xl:pt-[2.813rem]">
      <ul
        class="flex flex-row justify-around items-center overflow-x-auto whitespace-nowrap flex-nowrap sm:gap-4"
      >
        <!-- menu-item -->
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          :class="[
            'flex justify-center gap-1 relative flex-grow opacity-70 [border-bottom:1px_solid_transparent] group cursor-pointer',
            item.active ? 'active [&.active]:[border-bottom:1px_solid_#07f468] max-[580px]:group-[.active]:[border-bottom:1px_solid_#e7e5e4] [&.active]:opacity-100' : '',
            'xl:flex-[unset]'
          ]"
          @click="$emit('menu-click', item)"
        >
          <div
            class="flex justify-center flex-grow max-[325px]:px-2 max-[325px]:py-0 px-4 py-[0.639rem] sm:px-4 sm:py-0"
          >
            <span class="block pt-2 pb-2">
              <span
                class="block text-sm font-medium capitalize text-[#e7e5e4] max-[580px]:group-hover:text-[#e7e5e4] max-[580px]:group-[.active]:text-[#e7e5e4] group-hover:text-[#07f468] group-[.active]:text-[#07f468]"
              >
                {{ item.label }}
              </span>
            </span>

            <div
              v-if="item.count !== undefined"
              class="text-[0.625rem] leading-normal font-medium text-[#07f468]"
            >
              {{ item.count }}
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- header user profile section -->
    <div
      class="hidden md:flex justify-end items-center gap-4 flex-wrap py-2 xl:justify-[unset]"
    >
      <!-- header-option-button -->
      <div class="hidden flex items-center gap-2 flex-wrap">
        <!-- tip-button -->
        <div
          class="w-[3.75rem] h-[3.75rem] grayscale relative pointer-events-none"
        >
          <span
            class="absolute top-0 left-0 block w-[3.75rem] h-[3.75rem] group/icon"
          >
            <img
              src="https://i.ibb.co.com/DfbNLYFj/token.webp"
              alt="token"
              class="absolute top-0 left-0 transition-all duration-200 group-hover/icon:opacity-0"
            />
            <img
              src="https://i.ibb.co.com/KxrkW4qX/token-hover.webp"
              alt="token-hover"
              class="absolute top-0 left-0 transition-all duration-200 opacity-0 duration-[0.4s] group-hover/icon:opacity-100 group-hover/icon:scale-110"
            />
          </span>
        </div>

        <!-- private-call-button -->
        <div
          class="w-[3.75rem] h-[3.75rem] grayscale relative pointer-events-none"
        >
          <span
            class="absolute top-0 left-0 block w-[3.75rem] h-[3.75rem] group/icon"
          >
            <img
              src="https://i.ibb.co.com/7Q5Qzrsq/phone.webp"
              alt="phone"
              class="absolute top-0 left-0 transition-all duration-200 group-hover/icon:opacity-0"
            />
            <img
              src="https://i.ibb.co.com/ZxXyvVMP/phone-hover.webp"
              alt="phone-hover"
              class="absolute top-0 left-0 transition-all duration-200 opacity-0 duration-[0.4s] group-hover/icon:opacity-100 group-hover/icon:scale-110"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { label: 'Media', count: 18, active: true },
      { label: 'About', active: false },
      { label: 'Posts', count: 5, active: false }
    ]
  }
})

defineEmits(['menu-click'])

const headerComponent = ref(null)

const handleScroll = () => {
  const scrollY = window.pageYOffset
  if (headerComponent.value) {
    if (scrollY > 480) {
      headerComponent.value.classList.add('scroll-active')
    } else {
      headerComponent.value.classList.remove('scroll-active')
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
