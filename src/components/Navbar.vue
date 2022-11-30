<template>
  <v-app-bar>

    <v-app-bar-nav-icon variant="text" icon="fa-solid fa-cart-plus"></v-app-bar-nav-icon>
    <v-app-bar-title>Mon super e-boutique</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-badge color="#FF6D59" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="40">
        <v-icon x-small color="#FF6D59" icon="far fa-heart"></v-icon>
      </v-avatar>
    </v-badge>

    <v-badge color="#41AB55" overlap content="2" class="mr-2 mt-1">
      <v-avatar color="#FFF0EE" size="40">
        <v-icon x-small color="#41AB55" icon="fas fa-shopping-cart"></v-icon>
      </v-avatar>
    </v-badge>

    <span class="text-grey d-none d-sm-flex pr-5 pl-5 "> <strong> lapinRagnar</strong></span>
    <v-avatar
      size="50"
      color="red"
    >
      <v-img
        src="https://i.pinimg.com/originals/9a/23/99/9a239992fdd9047e938b7958a78ae7e5.jpg"
        alt="mon super puma"
        cover

      ></v-img>
    </v-avatar>

    <v-btn size="x-small" icon="fa fa-chevron-down">
    </v-btn>

  </v-app-bar>
</template>

<script setup>

</script>

<style lang="scss">

</style>
