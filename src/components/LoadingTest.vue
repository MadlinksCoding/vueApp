<template>
  <div class="p-4 text-center">
    <!-- Spinner -->
    <div v-if="store.loading" class="text-blue-600 text-xl animate-pulse">
      ⏳ Loading...
    </div>

    <!-- Buttons to test -->
    <div class="mt-4 space-x-2">
      <button
        class="bg-green-500 text-white px-4 py-2 rounded"
        @click="store.startLoading"
      >
        Start Loading
      </button>
      <button
        class="bg-gray-500 text-white px-4 py-2 rounded"
        @click="store.stopLoading"
      >
        Stop Loading
      </button>
    </div>
  </div>
</template>

<script setup>
import { useLoadingTestStore } from '@/stores/dataStore.js'
const store = useLoadingTestStore()
</script>
