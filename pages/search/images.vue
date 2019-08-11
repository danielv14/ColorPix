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
    keyword() {
      return this.$route.query.keyword
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
