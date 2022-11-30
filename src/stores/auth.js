import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const maVariablePinia = ref("Bonjour de Pinia")

  return {
    maVariablePinia
  }

})
