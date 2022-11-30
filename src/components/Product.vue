<template>
  <v-row class="px-16" >
    <v-col
      cols="12"
      sm="6"
      md="4"
      v-for="(product, i) in products"
      :key="i"
    >

      <v-card
        class="mx-auto rounded"
        max-width="300"
        variant="outlined"
      >
        <v-img
          max-height="300"
          max-width="300"
          contain
          :src="product.img"
        ></v-img>

        <v-card-title> {{ product.title }}</v-card-title>
        <v-card-title class="text-grey caption mt-n5">{{ product.subtitle }}</v-card-title>
        <v-card-title class="mt-n4">{{ product.price }}</v-card-title>
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

  const products = ref([
    { img: "pr1.png", title: "Cabbage", subtitle: "1kg", price: "$13" },
    { img: "pr2.png", title: "Perry's Ice Cream", subtitle: "1kg", price: "$23" },
    { img: "pr3.png", title: "Potato", subtitle: "1kg", price: "$17" },
    { img: "pr4.png", title: "Bundle Pack", subtitle: "Potato, Papaya, Oil, Cabbage", price: "$40" },
    { img: "pr5.png", title: "Oreo Biscuit", subtitle: "270GM", price: "$20" },
    { img: "pr6.png", title: "Papaya", subtitle: "1kg", price: "$10" },
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
