<template>

  <div
    data-header-component
    class="flex flex-col justify-around md:justify-between w-full bg-black/30 backdrop-blur-[10px] px-0 fixed top-0 -translate-y-full [transition:transform_0.3s_ease] z-[9999] max-[580px]:[background:linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.50)_25%,rgba(0,0,0,0.01)_100%)] max-[580px]:backdrop-blur-[50px] md:px-4 xl:flex-row xl:gap-4 xl:px-12 group [&.scroll-active]:translate-y-0"
  >
    <!-- Mobile User Profile Header -->
    <HeaderUserProfileMobile />
  
    
    <div class="xl:pt-[2.813rem]">
      <ul
        class="flex flex-row justify-around items-center overflow-x-auto whitespace-nowrap flex-nowrap sm:gap-4"
      >
        <li
          class="flex justify-center gap-1 relative flex-grow opacity-70 [border-bottom:1px_solid_transparent] group active [&.active]:[border-bottom:1px_solid_#07f468] max-[580px]:group-[.active]:[border-bottom:1px_solid_#e7e5e4] [&.active]:opacity-100 xl:flex-[unset] cursor-pointer"
        >
          <div
            class="flex justify-center flex-grow max-[325px]:px-2 max-[325px]:py-0 px-4 py-[0.639rem] sm:px-4 sm:py-0"
          >
            <span class="block pt-2 pb-2">
              <span
                class="block text-sm font-medium capitalize text-[#e7e5e4] max-[580px]:group-hover:text-[#e7e5e4] max-[580px]:group-[.active]:text-[#e7e5e4] group-hover:text-[#07f468] group-[.active]:text-[#07f468]"
                >Media</span
              >
            </span>

            <div
              class="text-[0.625rem] leading-normal font-medium text-[#07f468]"
            >
              18
            </div>
          </div>
        </li>
      </ul>
    </div>
        <!-- Desktop User Profile Header -->
        <HeaderUserProfileDesktop />
  </div>
</template>

<script setup>
import HeaderUserProfileMobile from './HeaderUserProfileMobile.vue'
import HeaderUserProfileDesktop from './HeaderUserProfileDesktop.vue'
// No props for now; this mirrors existing header markup so it can drop-in replace
</script>


