<template>

  <v-footer>
    <v-card
      flat
      tile
      class="bg-black text-white py-12 px-5"
      width="100%"
    >
      <v-row>

        <v-col cols="12" sm="6" md="4" class="mx-15">

          <v-card height="150px" color="black" class="ma-0 pa-0" >

            <div class="d-flex ma-5 pa-5 align-center justify-end">

              <v-badge color="#D5F0DB" class="mr-5">
                <v-img src="1.png" contain width="30"></v-img>
              </v-badge>

              <v-toolbar-title>
                <span class="text-green">e-</span>
                <strong   class="text-green">Boutique</strong>
              </v-toolbar-title>

            </div>

            <v-card-title class="pt-0 bg-black">

              <v-btn
                color="black"
                v-for="(icon, i) in icons"
                :key="i"
                class=" pa-0 ma-0 text-white"

              >
                <v-icon size="20px">{{ icon }}</v-icon>
              </v-btn>

            </v-card-title>

          </v-card>

        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-card-text class="text-white pt-0">
            <h3>About</h3>
          </v-card-text>
          <v-card-text class="text-grey">How It Work</v-card-text>
          <v-card-text class="text-grey mt-n4">Our Programs</v-card-text>
          <v-card-text class="text-grey mt-n4">Promotions</v-card-text>
          <v-card-text class="text-grey mt-n4">Refer A Friend</v-card-text>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-card-text class="text-white pt-0">
            <h3>Delivery</h3>
          </v-card-text>
          <v-card-text class="text-grey">Cost on Delivery</v-card-text>
          <v-card-text class="text-grey mt-n4">Payment Method</v-card-text>
          <v-card-text class="text-grey mt-n4">Ddelivery Astus</v-card-text>
          <v-card-text class="text-grey mt-n4">Return</v-card-text>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <v-card-text class="text-white pt-0">
            <h3>Contact</h3>
          </v-card-text>
          <v-card-text class="text-grey">AAE IdealPro</v-card-text>
          <v-card-text class="text-grey mt-n4">216/C West road</v-card-text>
          <v-card-text class="text-grey mt-n4">mon-super-boutique.com</v-card-text>
          <v-card-text class="text-grey mt-n4">#45dsdsdnkqfd</v-card-text>
        </v-col>

      </v-row>
    </v-card>
  </v-footer>

</template>

<script setup>

  import { ref } from 'vue';

  const icons = ref([
    "fa-brands fa-apple",
    "fab fa-google-plus-g",
    "fab fa-twitter",
    "fab fa-facebook-f",
  ])
</script>

<style lang="scss">

</style>
