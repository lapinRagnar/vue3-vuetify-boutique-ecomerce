<template >
  <v-container fluid>

    <v-row>

      <v-col cols="12">
        <v-card class="mx-auto rounded-be-pill" flat>
          <v-img src="cover2.png" max-height="100%" max-width="100%">

            <v-card-title class="top ml-10 mb-5">
              <h2 class="title1">Order your</h2>
            </v-card-title>

            <v-card-title class="ml-10 mt-n8">
              <h2 class="title1">Daily Groceries</h2>
            </v-card-title>

            <v-card-text class="ml-10">
              <h2 class="text-green">#Free Delivery</h2>
            </v-card-text>

            <v-card-text class="ml-10">
              <v-row class="d-flex align-center">
                <v-col cols="4" class="bg-amber-accent-1 ">
                  <v-text-field
                    label="search your daily groceries"
                    prepend-inner-icon="mdi:mdi-magnify"
                    rounded
                    outlined
                    color="green"
                    variant="underlined"
                    focused
                  >
                  </v-text-field>
                </v-col>

                <v-col cols="2" class="">
                  <v-btn
                    color="orange"
                    rounded
                    dark
                    x-large
                    class=""
                  >Search</v-btn>
                </v-col>
              </v-row>
            </v-card-text>

          </v-img>
        </v-card>

        <v-toolbar color="transparent">
          <v-toolbar-title class="text-h6"></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn-toggle
            v-model="toggle"
          >
            <v-btn icon="mdi:mdi-chevron-left"></v-btn>
            <v-btn icon="mdi:mdi-chevron-right"></v-btn>

          </v-btn-toggle>
        </v-toolbar>

        <Category />

        <v-toolbar class="my-10">
          <v-toolbar-title class="text-h6"> Popular Product </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            rounded
            color="green"
            class="px-8"
          >See All</v-btn>
        </v-toolbar>

        <Product />

        <v-card color="#E2F2E5" class="my-8">
          <v-toolbar>
            <v-toolbar-title class="text-h4">Popular Bundle Pack</v-toolbar-title>
          </v-toolbar>
        </v-card>

        <Pack />

        <v-card color="#FAFAFA" class="mt-8 px-16 py-5">

          <!-- style="position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;" -->
          <div
            class="mt-n5"
            style="position: absolute; margin-left: auto; margin-right: auto; left: 0; right: 0; text-align: center;"
          >
            <h2 class="">What our clients say</h2>
          </div>
        </v-card>

        <Client />

      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>

  import { ref } from 'vue'
  import Category from '@/components/Category.vue'
  import Product from '@/components/Product.vue'
  import Pack from '@/components/Pack.vue'
  import Client from '@/components/Client.vue'

  const toggle = ref(1)

</script>

<style lang="scss">

  .marginLeft {
    margin-left: -90px;
  }
  .mtop {
    margin-top: 100px;
  }
  .mbottom {
    margin-bottom: 100px;
  }
  .v-card.borderme {
    border: 2px solid green !important;
  }
  .v-card.borderout {
    border: 1px solid #d5f0db !important;
  }
  .v-btn:not(.v-btn--round).v-size--default.add {
    min-width: 0px !important;
  }
  .theme--light.v-sheet--outlined.mobile {
    border: 2px solid black !important;
  }
  @media only screen and (max-width: 600px) {
    h2.title1 {
      font-size: 15px;
    }
    h2.title2 {
      font-size: 15px;
    }
    .top {
      margin-top: 20px;
    }
  }
  @media only screen and (min-width: 600px) {
    .top {
      margin-top: 70px;
    }
  }
  @media only screen and (min-width: 768px) {
    .top {
      margin-top: 120px;
    }
  }

</style>

