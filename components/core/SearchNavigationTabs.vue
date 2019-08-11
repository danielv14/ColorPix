<template>
  <v-tabs align-with-title class="search-tabs" background-color="transparent">
    <v-tab nuxt exact :to="getRoute('images')">
      Images
    </v-tab>
    <v-tab nuxt exact :to="getRoute('collections')">
      Collections
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  methods: {
    getRoute(name) {
      return {
        path: `/search/${name}`,
        query: { keyword: this.$route.query.keyword || '' }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.search-tabs
  justify-content: center
  display: flex
</style>
