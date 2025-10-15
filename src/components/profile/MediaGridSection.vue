<template>

  <section class="mb-8">
    <div class="flex justify-between items-center px-2 md:px-4 xl:px-12">
      <div class="flex gap-3.5 mb-4 xl:mb-6">
        <h2 class="text-xl leading-normal font-medium text-[#e9e5d3] pl-4 border-l border-[#e9e5d3]">
          {{ title }}
        </h2>
        <div class="flex items-center gap-1 cursor-pointer opacity-100">
          <span class="text-sm font-medium text-[#07F468]">View All</span>
          <span v-if="count !== undefined" class="text-sm leading-normal text-[#07F468] self-start">{{ count }}</span>
        </div>
      </div>
      <!-- arrows slot -->
      <slot name="arrows"></slot>
    </div>

    <div class="mx-2 overflow-visible md:mx-4 xl:mx-12">
      <ul data-media-list-container class="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-4">
        <MediaCard
          v-for="(item, idx) in items"
          :key="idx"
          :thumb="item.thumb"
          :alt="item.alt || 'media'"
          :duration="item.duration || '14:09'"
          :age="item.age || '2d'"
          :likes="item.likes || 0"
          :views="item.views || 0"
          :title="item.title || ''"
          :videoSrc="item.videoSrc || ''"
          :typeIcon="item.typeIcon || defaultTypeIcon"
          :likeIcon="item.likeIcon || defaultLikeIcon"
          :viewIcon="item.viewIcon || defaultViewIcon"
        />
      </ul>
    </div>

    <div class="flex justify-center cursor-pointer">
      <div class="flex justify-center pt-5">
        <span class="flex gap-1 w-8 h-8 whitespace-nowrap text-base text-white">
          <img :src="chevronDown" alt="chevron-down" class="w-auto h-8" />
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import MediaCard from '@/components/profile/MediaCard.vue'

const props = defineProps({
  title: { type: String, required: true },
  count: { type: [Number, String], default: undefined },
  items: { type: Array, default: () => [] }
})

const defaultTypeIcon = 'https://i.ibb.co.com/wN978Hjm/video.webp'
const defaultLikeIcon = 'https://i.ibb.co.com/7tbwzFsQ/heart.webp'
const defaultViewIcon = 'https://i.ibb.co.com/Kjv16vLZ/eye.webp'
const chevronDown = 'https://i.ibb.co.com/mKdm9ZK/chevron-down.webp'
</script>


