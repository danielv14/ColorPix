<template>
  <div>
    <v-layout align-start row wrap>
      <layout-masonry>
        <div
          v-for="(image, index) in images"
          :key="index + image.id"  
          class="pa-4"
        >
          <image-card :image="image" />
        </div>
      </layout-masonry>
    </v-layout>
    <v-layout v-if="hasImages" align-center justify-center>
      <image-fetch-button :loading="loadingImages" @fetch="loadMore" />
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      loadingImages: false,
      masonryCols: { default: 3, 1200: 2, 700: 1 }
    }
  },
  computed: {
    orderBy() {
      return this.$route.query.orderBy
    },
    pageTitle() {
      return this.orderBy.charAt(0).toUpperCase() + this.orderBy.slice(1)
    },
    hasImages() {
      return this.images.length > 0
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
      // TODO: Use real api request for fetching images by keyword
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
