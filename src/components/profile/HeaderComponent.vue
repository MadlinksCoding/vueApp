<template>
  <div class="w-full">
    <!-- header-wrapper -->
    <div
      class="relative md:bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.00)_100%)]"
    >
      <!-- header-inner-wrapper -->
      <div
        class="flex justify-between items-center gap-6 relative z-[2] h-14 md:h-[4.375rem]"
      >
        <!-- navigation and logo section -->
        <div
          class="flex justify-start items-center gap-[3.375rem] px-2 md:px-4 xl:pr-12"
        >
          <div class="flex items-center gap-1 md:gap-4">
            <!-- logo-section -->
            <div class="opacity-50 sm:opacity-100">
              <a
                href="#"
                class="hidden opacity-70 leading-[0] xl:block"
              >
                <img
                  :src="websiteLogoFull"
                  alt="our-website-logo-full"
                  class="w-[8.9375rem] h-[2.375rem]"
                />
              </a>

              <a href="#" class="flex leading-[0] xl:hidden">
                <img
                  :src="websiteLogoSmall"
                  alt="our-website-full-white-logo"
                  class="w-7 h-7"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Header Right Button Group -->
        <div
          class="flex justify-end items-center gap-4 pl-0 pr-2 py-2 h-full relative cursor-pointer z-[10000] sm:pl-12 md:pr-4 md:py-0 md:h-[4.375rem]"
        >
          <!-- before-slaint -->
          <div
            class="hidden absolute right-0 top-0 w-full h-full bg-[#0c111d80] backdrop-blur-[50px] [clip-path:polygon(0%_0%,100%_0,105%_105%,16%_105%)] md:block"
          ></div>

          <!-- button-group -->
          <div
            class="flex justify-end items-center gap-4 cursor-pointer"
          >
            <!-- cart-button-wrapper -->
            <div class="flex justify-center items-center w-10 h-10">
              <div class="relative cursor-pointer">
                <span
                  class="flex justify-center items-center w-10 h-10 relative"
                >
                  <img
                    :src="cartIcon"
                    alt="cart-1"
                    class="w-[1.8rem] h-[1.8rem] max-[580px]:opacity-50 [filter:brightness(100)_saturate(0)]"
                  />
                </span>

                <!-- add dropdown here -->
              </div>
            </div>

            <!-- notification-button-wrapper -->
            <div class="flex justify-center items-center w-10 h-10">
              <div class="relative cursor-pointer">
                <span
                  class="flex justify-center items-center w-10 h-10 relative"
                >
                  <img
                    :src="bellIcon"
                    alt="bell-1"
                    class="w-[1.8rem] h-[1.8rem] max-[580px]:opacity-50 [filter:brightness(100)_saturate(0)]"
                  />
                </span>

                <!-- add dropdown here -->
              </div>
            </div>

            <!-- language -->
            <div class="flex justify-center items-center w-10 h-10">
              <div class="relative cursor-pointer">
                <span
                  class="flex justify-center items-center w-10 h-10 relative"
                >
                  <img
                    :src="globeIcon"
                    alt="globe-1"
                    class="w-[1.8rem] h-[1.8rem] max-[580px]:opacity-50 [filter:brightness(100)_saturate(0)]"
                  />
                </span>
                <!-- add dropdown here -->
              </div>
            </div>
          </div>

          <!-- avatar-section-wrapper -->
          <div class="w-10 h-10 cursor-pointer">
            <div class="relative">
              <!-- avatar -->
              <div
                class="bg-grey w-9 h-9 aspect-square rounded-[25%_75%_50%_51%_/_45%_65%_36%_55%] relative overflow-hidden"
              >
                <img
                  :src="avatarImage"
                  alt="featured-media-bg"
                  class="w-full h-full absolute top-0 left-0 object-cover"
                />
              </div>

              <!-- Online-user-signal -->
              <span
                class="block absolute right-[0.313rem] bottom-[0.188rem] w-2 h-2 bg-[#07F468] rounded-full"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props for image sources to make the component more reusable
const props = defineProps({
  websiteLogoFull: {
    type: String,
    default: 'https://i.ibb.co.com/27Gt3hwK/website-logo.webp'
  },
  websiteLogoSmall: {
    type: String,
    default: 'https://i.ibb.co.com/gZsWNR4Q/our-website-full-white-logo.webp'
  },
  cartIcon: {
    type: String,
    default: 'https://i.ibb.co.com/0wRg4N7/cart-1.webp'
  },
  bellIcon: {
    type: String,
    default: 'https://i.ibb.co.com/f7MgMrs/bell-1.webp'
  },
  globeIcon: {
    type: String,
    default: 'https://i.ibb.co.com/zhwwszjh/globe-1.webp'
  },
  avatarImage: {
    type: String,
    default: 'https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp'
  }
})
</script>