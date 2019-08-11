<template>
  <div>
    <v-layout align-start row wrap>
      <layout-masonry-images :images="images" />
    </v-layout>
    <v-layout v-if="hasImages" align-center justify-center>
      <image-fetch-button
        :loading="loadingImages"
        :lazy="true"
        @fetch="loadMore"
      />
    </v-layout>
  </div>
</template>

<script>
import mixinImages from '~/mixins/mixinImages'

export default {
  mixins: [mixinImages],
  data() {
    return {
      images: [],
      loadingImages: false
    }
  },
  computed: {
    orderBy() {
      return this.$route.query.orderBy
    },
    pageTitle() {
      return this.orderBy.charAt(0).toUpperCase() + this.orderBy.slice(1)
    }
  },
  watch: {
    async $route(to, from) {
      const orderBy = to.query.orderBy
      this.images = await this.getImagesList({ orderBy })
    }
  },
  async mounted() {
    this.images = await this.getImagesList({
      orderBy: this.orderBy
    })
  },
  methods: {
    async getImagesList({ page = 1, perPage, orderBy }) {
      const { data } = await this.$api.getImagesList({
        page,
        perPage,
        orderBy
      })
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingImages = true
      const newImages = await this.getImagesList({
        page,
        perPage,
        orderBy: this.orderBy
      })
      this.images.push(...newImages)
      this.loadingImages = false
    }
  }
}
</script>
