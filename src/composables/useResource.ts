// /src/composables/useResource.ts
// A composable that fetches a resource, caches with TTL, and returns a reactive value.
// Supports "stale-while-revalidate" and a transform/filter at usage time.

import { ref, computed, watchEffect } from 'vue'
import { useCacheStore } from '@/stores/cacheStore'

export interface UseResourceOptions<T, TOut = T> {
  /**
   * TTL in ms for cached entry
   */
  ttlMs?: number
  /**
   * Optional flag saved with the entry (e.g., 'user', 'products', etc.)
   */
  flag?: string
  /**
   * If true, returns cached value immediately (even if expired) and revalidates in background.
   * If false, waits for fresh fetch when expired.
   */
  staleWhileRevalidate?: boolean
  /**
   * Transform the raw value before exposing it via the composable (does not mutate store).
   */
  select?: (value: T | undefined, ctx: { expired: boolean; version?: number }) => TOut
  /**
   * Optional manual key to force refetch from outside (change to trigger).
   */
  externalRefreshKey?: any
}

export function useResource<T = any, TOut = T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: UseResourceOptions<T, TOut>
) {
  const store = useCacheStore()
  const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const error = ref<unknown>(null)

  const entry = computed(() => store.get<T>(key))
  const expired = computed(() => store.isExpired(key))

  async function fetchAndCache(forceFresh = false) {
    try {
      status.value = 'loading'
      error.value = null
      const data = await fetcher()
      store.set<T>(key, data, { ttlMs: options?.ttlMs ?? 60_000, flag: options?.flag })
      status.value = 'success'
      return data
    } catch (e) {
      error.value = e
      status.value = 'error'
      throw e
    }
  }

  async function ensure() {
    // If we have a non-expired entry, nothing to do.
    if (entry.value && !expired.value) return entry.value.value

    if (options?.staleWhileRevalidate && entry.value) {
      // Return stale immediately and refresh in background
      fetchAndCache(true).catch(() => {})
      return entry.value.value
    }

    // No entry or expired and SxR disabled → wait for fresh
    return await fetchAndCache(true)
  }

  // Auto-init and refresh when the key or externalRefreshKey changes
  watchEffect(() => {
    // touch the graph
    const _ = options?.externalRefreshKey
    // fire and forget (caller can await ensure() if needed)
    ensure().catch(() => {})
  })

  // Selected (transformed) result for the component layer
  const data = computed<TOut | undefined>(() => {
    const raw = entry.value?.value
    const ctx = { expired: expired.value, version: entry.value?.version }
    return options?.select ? options.select(raw, ctx) : (raw as unknown as TOut | undefined)
  })

  return {
    data,
    status,
    error,
    expired,
    version: computed(() => entry.value?.version ?? 0),
    refresh: () => fetchAndCache(true)
  }
}