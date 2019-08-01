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
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalPage: this.page
    }
  },
  created() {
    if (this.lazy) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (this.lazy) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    fetch() {
      this.$emit('fetch', { page: this.internalPage, perPage: this.perPage })
      this.stepPage()
    },
    stepPage() {
      this.internalPage += 1
    },
    handleScroll(evt) {
      const positionY = this.$el.getBoundingClientRect().y
      // Prevent multiple fetches by checking loading state (it's updated from the parent component)
      if (positionY <= 1000 && !this.loading) {
        this.fetch()
      }
    }
  }
}
</script>

<style lang="stylus" scoped></style>
