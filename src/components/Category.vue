<template>

  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col
          v-for="(category, i) in categories"
          dark
          flat
          :key="i"
          cols="12"
          md="2"
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card
              :class="['d-flex align-center justify-content-center', selectedClass]"
              dark
              height="120"
              @click="toggle"
            >

              <v-row>
                <v-col cols="12" sm="12" class="ma-0 pa-0">
                  <v-list-item three-line class="d-flex align-center justify-center">

                      <v-img
                        :src="category.img"
                        max-height="40"
                        max-width="40"
                        contain
                        :class="isSelected ? 'text-orange' : 'text-black'"
                      ></v-img>

                      <v-list-item-subtitle
                        :class="isSelected ? 'text-orange' : 'text-black'"
                        class="caption mt-4"
                      >
                        {{ category.title }}
                      </v-list-item-subtitle>

                  </v-list-item>
                </v-col>
              </v-row>

            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>

</template>

<script setup>
  import { ref } from 'vue';

  const categories = ref([
    { img: "01.png", title: "Meat & Fish" },
    { img: "02.png", title: "Vegetables" },
    { img: "3.png", title: "Medicine" },
    { img: "4.png", title: "Baby" },
    { img: "5.png", title: "Office" },
    { img: "6.png", title: "Beauty" },
])
</script>

<style lang="scss">

</style>

