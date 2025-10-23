// /src/utils/patchUserAvatar.ts
// Example util that updates only the avatar for a user and keeps the store in sync.
// Any component (e.g., <AvatarImg>) updates instantly because of reactive binding
// and the version increment cache-bust.

import { useCacheStore } from '@/stores/cacheStore'

export async function patchUserAvatar(userId: string, file: File) {
  // 1) Upload new avatar (example endpoint)
  const fd = new FormData()
  fd.append('avatar', file)
  const res = await fetch(`/api/users/${encodeURIComponent(userId)}/avatar`, {
    method: 'POST',
    body: fd
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const { avatarUrl } = await res.json()

  // 2) Merge into store (single source of truth)
  const key = `user:${userId}`
  const store = useCacheStore()
  
  // Merge keeps existing data and only updates avatarUrl
  store.merge(key, { avatarUrl })
  
  // Alternative: if you want to completely refresh the entry
  // const existing = store.get<{ avatarUrl?: string }>(key)?.value || {}
  // const merged = { ...existing, avatarUrl }
  // store.set(key, merged, { ttlMs: store.get(key)?.ttlMs ?? 300_000, flag: store.get(key)?.flag })
  
  return avatarUrl
}