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
      loadingImages: false
    }
  },
  computed: {
    keyword() {
      return this.$route.query.keyword
    },
    hasImages() {
      return this.images.length > 0
    }
  },
  watch: {
    async $route(to, from) {
      const keyword = to.query.keyword
      this.images = await this.getImagesByKeyword({ keyword })
    }
  },
  async mounted() {
    this.images = await this.getImagesByKeyword({
      keyword: this.keyword
    })
  },
  methods: {
    async getImagesByKeyword({ keyword, page = 1, perPage }) {
      // TODO: Use real api request for fetching images by keyword
      const { data } = await this.$api.getImagesByKeyword({
        keyword,
        page,
        perPage
      })
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingImages = true
      const newImages = await this.getImagesByKeyword({
        page,
        perPage,
        keyword: this.keyword
      })
      this.images.push(...newImages)
      this.loadingImages = false
    }
  }
}
</script>
