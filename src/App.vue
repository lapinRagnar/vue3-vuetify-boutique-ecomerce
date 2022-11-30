<template>
  <v-app>
    <div>{{ authStore.maVariablePinia }}</div>
    <v-icon icon="fas fa-plus"/>
    <v-icon icon="mdi:mdi-arrow-bottom-left"/>
    <v-icon icon="mdi:mdi-minus" />

    <nav>
      <RouterLink class="mr-15" to="/" >home</RouterLink>
      <RouterLink to="/about" >About</RouterLink>
    </nav>
    <v-main>
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>

<script setup>

import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
console.log('authStore', authStore.maVariablePinia)

</script>
