<template>
  <v-text-field
    v-model="input"
    label="Search..."
    single-line
    append-icon="search"
    class="searchbar"
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
      this.$router.push({ name: 'search', query: { keyword: this.input } })
    }
  }
}
</script>

<style lang="stylus">
.searchbar .v-input__slot
  margin-bottom: 0px

</style>
