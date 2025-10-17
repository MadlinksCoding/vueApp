import { defineStore } from 'pinia'

export const usePageDataStore = defineStore('pageData', {
  state: () => ({
    items: [],
    loading: false,
  }),
  actions: {
    async fetchData() {
      this.loading = true

      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        this.items = [
          { id: 1, name: 'User 1' },
          { id: 2, name: 'User 2' },
        ]
      } finally {
        this.loading = false
      }
    },
  },
})
