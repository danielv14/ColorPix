<template>
  <div>
    <div v-if="imagesLatest">
      <h2 class="pl-4">
        <v-icon class="gray lighten-2">
          mdi-clock-outline
        </v-icon>Latest
      </h2>
      <v-layout align-start row wrap>
        <layout-masonry-images :images="imagesLatest" />
      </v-layout>
      <v-layout v-if="imagesLatest" align-center justify-center>
        <image-fetch-button text="Show more" @fetch="goTo('latest')" />
      </v-layout>
    </div>
    <div v-if="imagesPopular">
      <h2 class="pl-4">
        <v-icon>mdi-fire</v-icon>Popular
      </h2>
      <v-layout align-start row wrap>
        <layout-masonry-images :images="imagesPopular" />
      </v-layout>
      <v-layout v-if="imagesPopular" align-center justify-center>
        <image-fetch-button text="Show more" @fetch="goTo('popular')" />
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagesLatest: [],
      imagesPopular: []
    }
  },
  mounted() {
    this.getPopularImages()
    this.getLatestImages()
  },
  methods: {
    async getLatestImages() {
      const { data } = await this.$api.getImagesLatest({ perPage: 8 })
      this.imagesLatest = data
    },
    async getPopularImages() {
      const { data } = await this.$api.getImagesPopular({ perPage: 8 })
      this.imagesPopular = data
    },
    goTo(route) {
      this.$router.push({ name: 'list', query: { orderBy: route } })
    }
  }
}
</script>
