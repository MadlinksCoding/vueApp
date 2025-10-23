<!-- /src/pages/RouteWithProvider.vue -->
<script setup lang="ts">
import ResourceProvider from '@/components/ResourceProvider.vue'

// This page declares that on mount, it should ingest a collection of users.
// Any components across the app that rely on keys like "user:123" will update
// when a subsequent fine-grained write happens (e.g., on PATCH / avatar change).

function handleLoaded(payload: any) {
  console.log('Users loaded:', payload.length)
  
  // Optional: split collection into individual entries
  // payload.forEach((user: any) => {
  //   const store = useCacheStore()
  //   store.set(`user:${user.id}`, user, { ttlMs: 300000, flag: 'user' })
  // })
}

function handleError(err: any) {
  console.error('Failed to load users:', err)
}
</script>

<template>
  <ResourceProvider
    resource-key="users:all"
    endpoint="/api/users"
    :ttl-ms="120000"
    flag="user"
    :transform="(list) => list"
    @loaded="handleLoaded"
    @error="handleError"
  >
    <!-- Children/slots render normally -->
    <router-view />
  </ResourceProvider>
</template>