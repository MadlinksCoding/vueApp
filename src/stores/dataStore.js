import { defineStore } from 'pinia'

export const useLoadingTestStore = defineStore('loadingTest', {
  state: () => ({
    loading: false,
  }),
  actions: {
    startLoading() {
      this.loading = true
    },
    stopLoading() {
      this.loading = false
    },
  },
})
