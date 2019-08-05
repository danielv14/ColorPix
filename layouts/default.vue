<template>
  <v-app :dark="isDarkMode">
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
  data() {
    return {
      darkTheme: this.$store.state.application.darkMode
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.state.application.darkMode
    }
  }
}
</script>
