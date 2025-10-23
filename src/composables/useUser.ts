// /src/composables/useUser.ts
// Example: ingest a user payload and have all bound components update reactively.

import { useResource } from '@/composables/useResource'
import { useCacheStore } from '@/stores/cacheStore'

// Example fetcher for a single user
function fetchUser(userId: string) {
  return async () => {
    const res = await fetch(`/api/users/${encodeURIComponent(userId)}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as { id: string; name: string; avatarUrl: string; role: string }
  }
}

export function useUser(userId: string) {
  // Store key convention: "user:{id}"
  const resourceKey = `user:${userId}`
  return useResource(resourceKey, fetchUser(userId), {
    ttlMs: 5 * 60_000,         // 5 minutes
    flag: 'user',
    staleWhileRevalidate: true,
    // Optional transform for the component layer
    select: (u) => u
  })
}

// Example: a TTL-aware list filter
export function useUsersByRole(role: string) {
  const store = useCacheStore()
  const list = store.filter<{ id: string; name: string; role: string }>({
    flag: 'user',
    includeExpired: false,
    predicate: (e) => e.value?.role === role
  })
  return list
}