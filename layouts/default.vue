<template>
  <v-app>
    <core-navigation-drawer />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <core-footer />
  </v-app>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      this.$store.dispatch('application/setPreviousRoute', from)
    }
  }
}
</script>
