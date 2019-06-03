<template>
  <div>
    <v-layout align-start row wrap>
      <v-flex
        v-for="(image, index) in images"
        :key="index + image.id"  
        xl4
        md6
        xs12
        pa-4
      >
        <image-card :image="image" />
      </v-flex>
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
    hasImages() {
      return this.images.length > 0
    }
  },
  async mounted() {
    this.images = await this.getImages({
      keyword: this.keyword
    })
  },
  methods: {
    async getImages({ page = 1, perPage }) {
      // TODO: Use real api request for fetching images by keyword
      const { data } = await this.$api.getMockDataImageList()
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingImages = true
      const newImages = await this.getImages({
        page,
        perPage
      })
      this.images.push(...newImages)
      this.loadingImages = false
    }
  }
}
</script>
