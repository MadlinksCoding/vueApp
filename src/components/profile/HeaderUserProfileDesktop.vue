<template>

  <div
    class="hidden md:flex justify-end items-center gap-4 flex-wrap py-2 xl:justify-[unset]"
  >
    <div class="hidden flex items-center gap-2 flex-wrap">
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

      <div
        class="w-[3.75rem] h-[3.75rem] grayscale relative pointer-events-none"
      >
        <span
          class="absolute top-0 left-0 block w-[3.75rem] h-[3.75rem] group/icon"
        >
          <img
            src="https://i.ibb.co.com/5g6w4qKc/call.webp"
            alt="call"
            class="absolute top-0 left-0 transition-all duration-200 group-hover/icon:opacity-0"
          />
          <img
            src="https://i.ibb.co.com/hFPk53Zd/call-hover.webp"
            alt="call-hover"
            class="absolute top-0 left-0 transition-all duration-200 opacity-0 duration-[0.4s] group-hover/icon:opacity-100 group-hover/icon:scale-110"
          />
          <img
            src="https://i.ibb.co.com/VcxyxB2y/online-dot.webp"
            alt="online-dot"
            class="absolute w-[18%] top-0 right-[3px] duration-500"
          />
        </span>
      </div>

      <div
        class="w-[3.75rem] h-[3.75rem] grayscale relative pointer-events-none"
      >
        <span
          class="absolute top-0 left-0 block w-[3.75rem] h-[3.75rem] group/icon"
        >
          <img
            src="https://i.ibb.co.com/60Hy8yr2/message.webp"
            alt="message"
            class="absolute top-0 left-0 transition-all duration-200 group-hover/icon:opacity-0"
          />
          <img
            src="https://i.ibb.co.com/YG3j1Fk/message-hover.webp"
            alt="message-hover"
            class="absolute top-0 left-0 transition-all duration-200 opacity-0 duration-[0.4s] group-hover/icon:opacity-100 group-hover/icon:scale-110"
          />
          <img
            src="https://i.ibb.co.com/VcxyxB2y/online-dot.webp"
            alt="online-dot"
            class="absolute w-[18%] top-0 right-[3px] duration-500"
          />
        </span>
      </div>
    </div>

    <div class="flex flex-end pl-0">
      <div
        class="inline-flex items-center gap-4 pl-4 border-l border-white"
      >
        <div class="flex flex-col items-start gap-2">
          <div class="flex items-start gap-4 self-stretch h-6">
            <div class="flex items-center gap-2 flex-grow">
              <div
                class="text-sm font-semibold text-[#e7e5e4] line-clamp-1"
              >
                @sukii19
              </div>
              <img
                src="https://i.ibb.co.com/j9XKPcfK/verified-green.webp"
                alt="verified-green"
                class="w-4 h-4"
              />
            </div>
          </div>

          <div class="flex justify-end items-center gap-2 w-full">
            <span
              class="flex justify-center items-center w-8 h-8 bg-[#e9e5d30d] [transition:all_0.3s_ease-in-out] rounded-full border border-[#e9e5d340] cursor-pointer"
            >
              <img
                src="https://i.ibb.co.com/MDRt49c6/add-normal.webp"
                alt="add-normal"
                class="w-4 h-4"
              />
            </span>

            <span
              class="hidden justify-center items-center w-8 h-8 bg-[#e9e5d30d] [transition:all_0.3s_ease-in-out] rounded-full border border-[#e9e5d340] active [.active]:bg-[#e9e5d3bf] max-[580px]:[.active]:bg-black/75 max-[580px]:[.active]:shadow-[0_0_10px_0_rgba(7,244,104,0.30),0_0_10px_0_rgba(7,244,104,0.10)] max-[580px]:[.active]:backdrop-blur-[25px] max-[580px]:[.active]:text-[#07F468] max-[580px]:[.active]:border-transparent cursor-pointer"
            >
              <img
                src="https://i.ibb.co.com/cS65c7gh/add-active.webp"
                alt="add-active"
                class="w-4 h-4"
              />
            </span>

            <span
              class="flex justify-center items-center w-8 h-8 bg-[#e9e5d30d] [transition:all_0.3s_ease-in-out] rounded-full border border-[#e9e5d340] cursor-pointer"
            >
              <img
                src="https://i.ibb.co.com/2wTKJq2/like-normal.webp"
                alt="like-normal"
                class="w-4 h-4"
              />
            </span>

            <span
              class="hidden justify-center items-center w-8 h-8 bg-[#e9e5d30d] [transition:all_0.3s_ease-in-out] rounded-full border border-[#e9e5d340] active [.active]:bg-black/75 max-[580px]:[.active]:bg-black/75 max-[580px]:[.active]:shadow-[0_0_10px_0_rgba(7,244,104,0.30),0_0_10px_0_rgba(7,244,104,0.10)] max-[580px]:[.active]:backdrop-blur-[25px] max-[580px]:[.active]:text-[#07F468] max-[580px]:[.active]:border-transparent cursor-pointer"
            >
              <img
                src="https://i.ibb.co.com/9HMStmgF/like-active.webp"
                alt="like-active"
                class="w-4 h-4"
              />
            </span>

            <div class="relative cursor-pointer">
              <span
                class="flex justify-center items-center w-8 h-8 bg-[#e9e5d30d] [transition:all_0.3s_ease-in-out] rounded-full border border-[#e9e5d340] cursor-pointer"
              >
                <img
                  src="https://i.ibb.co.com/cSNVr9ks/3-dot.webp"
                  alt="3-dot"
                  class="w-4 h-4"
                />
              </span>

              <!-- add-dropdown-menu-here -->
            </div>
          </div>
        </div>

        <div
          class="flex flex-col justify-center items-center cursor-pointer"
        >
          <img
            src="https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp"
            alt="featured-media-bg"
            class="w-[2.813rem] h-[2.813rem] rounded-[12.5rem] object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// purely presentational component
</script>


