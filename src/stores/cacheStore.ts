// /src/stores/cacheStore.ts
// Pinia store for TTL-cached resources with flags and reactive updates

import { defineStore } from 'pinia'
import { reactive } from 'vue'

type CacheKey = string

export interface CachedEntry<T = any> {
  key: CacheKey
  value: T
  flag?: string
  ttlMs: number
  createdAt: number        // ms epoch
  updatedAt: number        // ms epoch
  expiresAt: number        // ms epoch
  version: number          // increments on each set() to support cache-busting
}

interface StateShape {
  // use a reactive object to ensure full reactivity on property access
  entries: Record<CacheKey, CachedEntry>
}

function now() { return Date.now() }

export const useCacheStore = defineStore('cacheStore', {
  state: (): StateShape => ({
    entries: reactive({}) as Record<CacheKey, CachedEntry>
  }),

  getters: {
    has:
      (state) =>
      (key: CacheKey) =>
        !!state.entries[key],

    get:
      (state) =>
      <T = any>(key: CacheKey): CachedEntry<T> | undefined =>
        state.entries[key] as unknown as CachedEntry<T> | undefined,

    isExpired:
      (state) =>
      (key: CacheKey) => {
        const e = state.entries[key]
        return !e ? true : now() >= e.expiresAt
      },

    // Filter with optional flag + TTL awareness
    filter:
      (state) =>
      <T = any>(opts?: { flag?: string; includeExpired?: boolean; predicate?: (e: CachedEntry<T>) => boolean }) => {
        const { flag, includeExpired = false, predicate } = opts || {}
        return Object.values(state.entries).filter((e) => {
          if (!includeExpired && e.expiresAt <= now()) return false
          if (flag && e.flag !== flag) return false
          return predicate ? predicate(e as CachedEntry<T>) : true
        }) as CachedEntry<T>[]
      }
  },

  actions: {
    set<T = any>(key: CacheKey, value: T, options: { ttlMs: number; flag?: string }) {
      const created = this.entries[key]?.createdAt ?? now()
      const version = (this.entries[key]?.version ?? 0) + 1
      const updated = now()
      const ttlMs = Math.max(0, options.ttlMs ?? 0)
      const entry: CachedEntry<T> = {
        key,
        value,
        flag: options.flag,
        ttlMs,
        createdAt: created,
        updatedAt: updated,
        expiresAt: updated + ttlMs,
        version
      }
      // assign preserving reactivity
      this.entries[key] = entry as CachedEntry<any>
      return entry
    },

    merge<T = any>(key: CacheKey, partial: Partial<T>) {
      const existing = this.entries[key]
      if (!existing) return
      const merged = { ...existing.value, ...partial }
      this.set(key, merged, { ttlMs: existing.ttlMs, flag: existing.flag })
    },

    setFlag(key: CacheKey, flag?: string) {
      const e = this.entries[key]
      if (!e) return
      this.entries[key] = { ...e, flag }
    },

    touch(key: CacheKey, extendTtlMs?: number) {
      const e = this.entries[key]
      if (!e) return
      const updated = now()
      const ttlMs = typeof extendTtlMs === 'number' ? extendTtlMs : e.ttlMs
      this.entries[key] = {
        ...e,
        updatedAt: updated,
        expiresAt: updated + Math.max(0, ttlMs),
        version: e.version + 1
      }
    },

    remove(key: CacheKey) {
      // preserve reactivity by deleting the prop
      delete this.entries[key]
    },

   clear(flag?: string) {
      if (!flag) {
        Object.keys(this.entries).forEach((k) => delete this.entries[k])
      } else {
        Object.values(this.entries).forEach((e: CachedEntry) => {
          if (e.flag === flag) delete this.entries[e.key]
        })
      }
    }
  }
})