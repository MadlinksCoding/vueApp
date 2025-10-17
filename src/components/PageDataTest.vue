<script setup>
import { usePageDataStore } from '@/stores/pageDataStore.js'
const pageDataStore = usePageDataStore()
</script>

<template>
  <div class="p-4 text-center">
    <div v-if="pageDataStore.loading" class="text-lg animate-pulse">
      ⏳ Fetching data...
    </div>

    <div v-else>
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        @click="pageDataStore.fetchData"
      >
        Fetch Data
      </button>

      <ul class="mt-4">
        <li v-for="item in pageDataStore.items" :key="item.id">
          {{ item.name }}   
        </li>
      </ul>
    </div>
  </div>
</template>
