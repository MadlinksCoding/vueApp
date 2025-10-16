<template>
  <!-- navigation Section for mobile -->
  <div
    class="absolute bottom-0 flex w-full [background:linear-gradient(180deg,rgba(0,0,0,0.60)_0%,rgba(0,0,0,0.50)_25%,rgba(0,0,0,0.01)_100%)] backdrop-blur-[40px] sm:[background:unset] sm:backdrop-blur-0 md:hidden"
  >
    <ul
      class="flex flex-row items-center w-full overflow-x-auto whitespace-nowrap flex-wrap"
    >
      <!-- menu-item -->
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        class="relative flex justify-center gap-1 opacity-70 [border-bottom:1.5px_solid_transparent] group active [&.active]:[border-bottom:1.5px_solid_#07f468] [&.active]:opacity-100 max-[580px]:[&.active]:[border-bottom:1.5px_solid_#E7E5E4] flex-grow"
        :class="{ active: item.active }"
        @click="$emit('nav-click', item)"
      >
        <div
          class="flex justify-center flex-grow max-[325px]:px-2 max-[325px]:py-0 px-4 py-[0.639rem] sm:px-4 sm:py-0"
        >
          <span class="block pt-2 pb-2">
            <span
              class="block text-sm font-medium text-[#e7e5e4] max-[580px]:group-hover:text-[#e7e5e4] max-[580px]:group-[.active]:text-[#e7e5e4] group-hover:text-[#07f468] group-[.active]:text-[#07f468]"
            >{{ item.label }}</span>
          </span>

          <div
            v-if="item.count"
            class="text-[0.625rem] leading-normal font-medium text-[#07f468]"
          >
            {{ item.count }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  navigationItems: {
    type: Array,
    default: () => [
      {
        label: 'Media',
        count: 18,
        active: true
      }
    ]
  }
})

const emit = defineEmits(['nav-click'])
</script>
