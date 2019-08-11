<template>
  <v-text-field
    v-model="input"
    label="Search..."
    single-line
    append-icon="search"
    class="searchbar"
    hide-details
    filled
    full-width
    @click:append="search"
    @keyup.enter="search"
  />
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    this.input = this.$route.query.keyword || ''
  },
  methods: {
    search() {
      const searchPart = this.$route.path.includes('search/collections')
        ? 'collections'
        : 'images'
      this.$router.push({
        path: `/search/${searchPart}`,
        query: { keyword: this.input }
      })
    }
  }
}
</script>
