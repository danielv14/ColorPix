<template>
  <v-footer :fixed="fixedFooter" app>
    <span class="pl-2">&copy; {{ getYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      fixedFooter: true
    }
  },
  methods: {
    getYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped></style>
