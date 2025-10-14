<script setup>
import PopupHandler from '../../PopupHandler.vue'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// props define karo
const props = defineProps({
  modelValue: Boolean,
  title: String,
  logo: String,
})

const emit = defineEmits(['update:modelValue'])


const config = {
  actionType: 'slidein',      
  from: 'top',                
  showOverlay: true,
  closeOnOutside: true,
  escToClose: true,
  width: { default: '100%', '<640': '100%' },
  height: { default: '200px', '<640': '200px' },
  speed: '600ms',        // ✅ Open smooth
  effect: 'cubic-bezier(0.4, 0, 0.2, 1)',
  customEffect: 'slideTopFade',  // ✅ Slide + Fade combined
  closeSpeed: '400ms',
  closeEffect: 'cubic-bezier(0.4, 0, 0.2, 1)',
  offset: '0px',             
}

const headerMenuPanel = ref(null)
import { menuItems } from '../../../../../assets/data/menuItems.js'
const renderHeaderNav = () => {
  const menuEl = headerMenuPanel.value
  if (!menuEl || !menuItems.length) return

  // clear old
  menuEl.innerHTML = ''

  // render each item
  menuItems.forEach(item => {
    const wrapper = document.createElement('div')
    wrapper.className = 'sidebar-item group'

    if (!item.enabled) {
      wrapper.className += ' disabled opacity-50 pointer-events-none'
    }

    const a = document.createElement('a')
    a.className =
    `main-menu-item flex flex-col items-center justify-center self-stretch gap-0.5 p-2 rounded min-w-[4.5rem] min-h-[4.5rem] group-hover:bg-sidebar-active transition-all duration-200`
    a.setAttribute('href', item.route || '')
    a.title = item.title

    a.innerHTML = `
      <img
        src="${item.image}"
        alt="${item.title}"
        class="w-6 h-6 pointer-events-none group-hover:[filter:brightness(0)_saturate(100%)_invert(29%)_sepia(98%)_saturate(5809%)_hue-rotate(325deg)_brightness(92%)_contrast(121%)]"
      />
      <span class="text-sidebar-text text-[0.625rem] leading-[1.125rem] text-center font-medium pointer-events-none group-hover:text-sidebar-active-text">
        ${item.title}
      </span>
    `

    a.addEventListener('click', (e) => {
      e.preventDefault()
      if (item.enabled && item.route) {
        console.log('Navigate to:', item.route)
      }
    })

    wrapper.appendChild(a)
    menuEl.appendChild(wrapper)
  })
}

// ✅ onMounted mein call
onMounted(() => {
  renderHeaderNav()
})

</script>

<template>
  <PopupHandler
    :modelValue="props.modelValue"
    @update:modelValue="(val) => emit('update:modelValue', val)"
    :config="config"
  >
 <div
      class="sidebar-main-wrapper flex flex-col items-center justify-start bg-sidebar-bg w-full pt-2 pb-2 gap-4 left-0 backdrop-blur-lg px-4 fixed top-0 z-[5] h-auto sm:h-auto sm-md:h-auto h-screen shadow-sidebar opacity-100 visible pointer-events-auto scale-100 origin-[100%_0]"
    >
      <!-- nav-close-button -->
      <div class="flex flex-col items-end self-stretch">
        <a
          @click="emit('update:modelValue', false)"
          class="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <img
            src="https://i.ibb.co/HfPJmd0W/svgviewer-png-output-40.webp"
            alt="svgviewer-png-output-40"
            class="w-6 h-6"
          />
        </a>
      </div>

      <!-- main-navigation -->
      <div
        class="sidebar-nav-wrapper flex-1 sm:flex-1 sm-md:flex-1 flex-none flex flex-col items-center self-stretch gap-1 px-2 py-1"
      >
        <div class="flex flex-col items-center self-stretch gap-1">
          <div class="flex flex-col self-stretch relative z-[5]">
            <div
              class="menu-panel grid gap-4 items-center self-stretch grid-cols-3 sm:grid-cols-5 sm-md:grid-cols-6"
                ref="headerMenuPanel"

              >

            </div>
          </div>
        </div>
      </div>

      <!-- sidebar-bottom-controls -->
      <div class="flex flex-col gap-2 items-center self-stretch py-2">
        <div class="flex justify-between items-center gap-2 self-stretch px-2">
          <!-- help -->
          <a
            href=""
            class="inline-flex items-center opacity-50 py-1 gap-1.5 transition-all duration-200 pointer-events-none px-1.5"
          >
            <img
              src="https://i.ibb.co/xSY4RGZp/svgviewer-png-output-52.webp"
              alt="help"
              class="w-5 h-5 pointer-events-none"
            />
            <span
              class="text-sidebar-help-text leading-[1.125rem] pointer-events-none text-[0.75rem] font-medium"
              >Help</span
            >
          </a>

          <!-- logout -->
          <a
            href=""
            class="logout-button py-1 px-1.5 transition-all duration-200 rounded bg-sidebar-logout-bg inline-flex items-center gap-1.5 hover:bg-sidebar-logout-hover"
          >
            <img
              src="https://i.ibb.co/ccpY1KKt/svgviewer-png-output-53.webp"
              alt="logout"
              class="w-5 h-5 pointer-events-none"
            />
            <span
              class="text-sidebar-logout-text leading-[1.125rem] pointer-events-none text-[0.75rem] font-medium"
              >Logout</span
            >
          </a>
        </div>
      </div>
    </div>
  </PopupHandler>
</template>
