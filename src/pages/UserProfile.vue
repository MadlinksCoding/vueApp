<!-- /src/pages/UserProfile.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useUser } from '@/composables/useUser'
import AvatarImg from '@/components/AvatarImg.vue'

const userId = '123'
const { data: user, status, refresh, expired } = useUser(userId)

// You can show UI states based on status/expired
const isLoading = computed(() => status.value === 'loading')
</script>

<template>
  <section class="p-6 space-y-4">
    <div class="flex items-center gap-4">
      <AvatarImg :userKey="`user:${userId}`" class="h-14 w-14 rounded-full object-cover" />
      <div>
        <h2 class="text-xl font-semibold">{{ user?.name || 'Loading…' }}</h2>
        <p class="text-sm text-gray-500">{{ expired ? 'Refreshing…' : 'Up to date' }}</p>
      </div>
    </div>

    <button 
      class="px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition" 
      @click="refresh()"
    >
      Manual Refresh
    </button>

    <div v-if="isLoading" class="text-sm text-gray-500">Loading...</div>

    <pre class="bg-gray-50 p-3 rounded text-xs overflow-auto">{{ user }}</pre>
  </section>
</template>