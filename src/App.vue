<template>
  <v-app id="inspire">

    <Navbar />
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
  
</template>

<script setup>

import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
console.log('authStore', authStore.maVariablePinia)

</script>
