<template>
  <v-app :dark="darkTheme">
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
      darkTheme: false
    }
  }
}
</script>
