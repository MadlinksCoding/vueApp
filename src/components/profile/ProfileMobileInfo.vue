<template>
  <!-- Mobile Avatar message online row -->
  <div class="flex gap-2 md:hidden">
    <!-- Avatar Wrapper -->
    <div class="relative">
      <!-- avatar -->
      <div
        class="bg-[#2970FF] w-16 h-16 aspect-square rounded-[25%_75%_50%_51%_/_45%_65%_36%_55%] relative overflow-hidden"
      >
        <img
          :src="profileData.avatar"
          :alt="profileData.username"
          class="w-full h-full absolute top-0 left-0 object-cover"
        />
      </div>

      <!-- Online-user-signal -->
      <span
        v-if="profileData.isOnline"
        class="block absolute right-[0.313rem] bottom-[0.188rem] w-2 h-2 bg-[#07F468] rounded-full"
      ></span>
    </div>
  </div>

  <div class="flex flex-col gap-1 md:hidden">
    <h1
      class="hidden items-center gap-1 text-xl leading-normal font-semibold text-white md:flex md:text-5xl md:leading-[3.75rem] xl:text-6xl xl:leading-[4.5rem] xl:mb-5"
    >
      {{ profileData.displayName }}
      <div class="flex w-3.5 h-3.5 md:hidden">
        <img
          v-if="profileData.verified"
          src="https://i.ibb.co.com/nMhY8CpS/svgviewer-png-output-22.webp"
          alt="verified-tick"
          class="w-3.5 h-3.5"
        />
      </div>
    </h1>

    <!-- profile-info-list -->
    <div class="flex items-start gap-3 opacity-70">
      <div class="flex items-center gap-1">
        <span class="flex items-center">
          <img
            src="https://i.ibb.co.com/gZfGQhSp/profile.webp"
            alt="profile"
            class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
          />
        </span>
        <span class="text-sm font-light text-[#EAECF0]">{{ profileData.followers }}</span>
      </div>

      <div class="flex items-center gap-1">
        <span class="flex items-center">
          <img
            src="https://i.ibb.co.com/vCFQPp7N/heart.webp"
            alt="heart"
            class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
          />
        </span>
        <span class="text-sm font-light text-[#EAECF0]">{{ profileData.likes }}</span>
      </div>

      <div class="flex items-center gap-1">
        <span class="flex items-center">
          <img
            src="https://i.ibb.co.com/8LGTj3jC/logo.webp"
            alt="logo"
            class="w-3.5 h-3.5 [filter:brightness(0)_saturate(100%)_invert(90%)_sepia(9%)_saturate(72%)_hue-rotate(183deg)_brightness(105%)_contrast(91%)]"
          />
        </span>
        <span class="text-sm font-light text-[#EAECF0]">{{ profileData.subscribers }}</span>
      </div>
    </div>

    <div class="flex gap-1">
      <span
        class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
      >@{{ profileData.username }}</span>
      <span
        class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
      >/</span>
      <span
        class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
      >{{ profileData.age || '22' }}</span>
      <span
        class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
      >/</span>
      <span
        class="text-xs leading-normal text-[#FCFCFD] line-clamp-1"
      >{{ profileData.location || 'Hong Kong' }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  profileData: {
    type: Object,
    required: true,
    default: () => ({
      username: 'sukii19',
      displayName: 'Sukii19',
      avatar: 'https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp',
      verified: true,
      isOnline: true,
      followers: 35,
      likes: 14,
      subscribers: 2,
      age: 22,
      location: 'Hong Kong'
    })
  }
})
</script>
