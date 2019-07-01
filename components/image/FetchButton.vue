<template>
  <v-btn
    :loading="loading"
    round
    flat
    outline
    color="primary"
    @click="fetch"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Load more'
    },
    page: {
      type: Number,
      default: 2
    },
    perPage: {
      type: Number,
      default: 10
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalPage: this.page
    }
  },
  methods: {
    fetch() {
      this.$emit('fetch', { page: this.internalPage, perPage: this.perPage })
      this.stepPage()
    },
    stepPage() {
      this.internalPage += 1
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
