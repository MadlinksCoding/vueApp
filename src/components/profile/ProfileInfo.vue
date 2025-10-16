<template>
  <div class="flex justify-end px-4 pt-4 xl:px-12"> 
    <!-- profile-info --> 
    <div 
      class="hidden items-center gap-4 pr-2.5 border-r border-white md:inline-flex" 
    > 
      <div class="flex flex-col items-start gap-2"> 
        <!-- user-name-title --> 
        <div class="flex items-start gap-4 self-stretch h-6"> 
          <div class="flex items-center gap-2 flex-grow"> 
            <div 
              class="text-base font-semibold text-white line-clamp-1" 
            > 
              {{ username }}
            </div> 
            <img 
              :src="verifiedIcon" 
              alt="verified-green" 
              class="w-4 h-4" 
            /> 
          </div> 
        </div> 

        <!-- profile-info-list --> 
        <div class="flex items-start gap-4 opacity-70 relative z-[-1]"> 
          <div class="flex flex-col items-center gap-0.5"> 
            <span class="text-xs leading-normal text-white"
              >Followers</span
            > 
            <span class="text-sm text-white">{{ followers }}</span> 
          </div> 

          <div class="flex flex-col items-center gap-0.5"> 
            <span class="text-xs leading-normal text-white">Likes</span> 
            <span class="text-sm text-white">{{ likes }}</span> 
          </div> 

          <div class="flex flex-col items-center gap-0.5"> 
            <span class="text-xs leading-normal text-white"
              >Subscribers</span
            > 
            <span class="text-sm text-white">{{ subscribers }}</span> 
          </div> 
        </div> 
      </div> 

      <!-- creator-avatar-container --> 
      <div class="flex flex-col justify-center items-center"> 
        <img 
          :src="avatarSrc" 
          alt="profile-avatar" 
          class="w-16 h-16 rounded-full object-cover" 
        /> 
      </div> 
    </div> 
  </div>
</template>

<script setup>
defineProps({
  username: {
    type: String,
    default: '@sukii19'
  },
  verifiedIcon: {
    type: String,
    default: 'https://i.ibb.co.com/j9XKPcfK/verified-green.webp'
  },
  followers: {
    type: Number,
    default: 35
  },
  likes: {
    type: Number,
    default: 14
  },
  subscribers: {
    type: Number,
    default: 2
  },
  avatarSrc: {
    type: String,
    default: 'https://i.ibb.co.com/jk1F8MqJ/featured-media-bg.webp'
  }
});
</script>