<template>
  <v-row class="px-16 mt-10">

    <v-col cols="3" v-for="(partner, i) in partners" :key="i">

        <v-img :src="partner.img" max-width="30" max-height="30" ></v-img>


    </v-col>
  </v-row>
</template>

<script setup>

  import { ref } from 'vue';

  const partners = ref([
    { img: "airbnb.png" },
    { img: "adidas.png" },
    { img: "swords.png" },
    { img: "castle.png" },
  ])

</script>

<style lang="scss">

</style>
