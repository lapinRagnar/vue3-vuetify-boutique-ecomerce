<template>
  <v-row justify="center" class="px-16 pb-5 bg-green-lighten-4">
    <v-col cols="12" sm="6" md="4" v-for="(pack, i) in packs" :key="i">
      <v-card class="mx-auto rounded" max-width="300" variant="outlined">

        <v-img max-width="300" max-height="auto" contain :src="pack.img" />

        <v-card-title> {{ pack.title }}</v-card-title>
        <v-card-title class="text-grey caption mt-n5">{{ pack.subtitle }}</v-card-title>
        <v-card-title class="mt-n4">{{ pack.price }}</v-card-title>
        <v-card-actions class="">
          <v-btn class="mr-2 bg-blue-grey-lighten-2" size="30">
            <v-icon color="white" @click="decrement"  icon="mdi:mdi-minus"></v-icon>
          </v-btn>
          <strong class="" v-text="bpm"></strong>
          <v-btn class="bg-blue-grey-lighten-2" size="30">
            <v-icon color="white" @click="increment" icon="mdi:mdi-plus"></v-icon>
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn class="bg-green-lighten-2" size="30">
            <v-icon color="white" icon="mdi:mdi-shopping"></v-icon>
          </v-btn>

        </v-card-actions>

      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from 'vue';

  const bpm = ref(1)
  const packs = ref([
    { img: "p1.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "$55" },
    { img: "p2.png", title: "Big Pack", subtitle: "Tomato, Cabbage, Oil, Cauliflower", price: "$55" },
    { img: "p3.png", title: "Small", subtitle: "Tomato, Cabbage, Oil,Cauliflower ", price: "$55" },
    { img: "p4.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
    { img: "p5.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
    { img: "p6.png", title: "Medium Box", subtitle: "Tomato, Cabbage, Oil,Cauliflower", price: "$55" },
  ])

  const decrement = () => {
    bpm.value--
  }

  const increment = () => {
    bpm.value++
  }

</script>
<style lang="scss">

</style>
