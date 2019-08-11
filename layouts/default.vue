<template>
  <v-app>
    <core-navigation-drawer />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
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
