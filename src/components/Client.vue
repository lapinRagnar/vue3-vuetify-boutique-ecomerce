<template>
  <v-row class="mt-10 mb-5">
    <v-col cols="12" sm="6" md="4" v-for="(client, i) in clients" :key="i">
      <v-card class="elevation-1 mx-auto" width="300">
        <v-list subheader lines="two">
          <v-list-item>
            <v-avatar :image="client.img"></v-avatar>
            <div>
              <v-list-item-title> {{ client.title }} </v-list-item-title>
              <v-list-item-subtitle> {{ client.title }} </v-list-item-subtitle>
            </div>
          </v-list-item>
        </v-list>

        <v-card-text>
          <v-rating
            v-model="rating"
            bg-color="orange-lighten-1"
            color="blue"
            empty-icon="$ratingEmpty"
            full-icon="$ratingFull"

          ></v-rating>
          <div>
            {{ client.bio }}
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>

  import { ref } from 'vue';

  const rating = ref(4.5)

  const clients = ref([
    {
      img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Kareem Benji",
      subtitle: "CPO on Maqua",
      bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
    },
    {
      img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: "AAE IdeaPro",
      subtitle: "CPO on Maqua",
      bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
    },
    {
      img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Raul Seem ",
      subtitle: "CPO on Maqua",
      bio: "If you enjoy using Vuetify, please take a few seconds to rate your experience with the framework. It really helps!",
    },
  ])

</script>
<style lang="scss">

</style>
