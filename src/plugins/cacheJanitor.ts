// /src/plugins/cacheJanitor.ts
// Auto-purge expired cache entries at a regular interval

import { useCacheStore } from '@/stores/cacheStore'

export function createCacheJanitor(intervalMs = 60000) {
  return {
    install(app: any) {
      const store = useCacheStore()
      
      const cleanup = () => {
        const allEntries = store.filter({ includeExpired: true })
        const now = Date.now()
        
        allEntries.forEach((entry) => {
          if (entry.expiresAt <= now) {
            store.remove(entry.key)
          }
        })
      }
      
      // Run cleanup on interval
      const timer = setInterval(cleanup, intervalMs)
      
      // Cleanup on app unmount (if needed)
      app.config.globalProperties.$cacheJanitorCleanup = () => {
        clearInterval(timer)
      }
    }
  }
}