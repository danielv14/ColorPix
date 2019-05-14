<template>
  <v-footer
    :fixed="fixedFooter"
    app
  >
    <span>&copy; 2019</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixedFooter: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
