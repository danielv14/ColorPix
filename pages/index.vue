<template>
  <v-container fluid>
    <div v-if="imagesPopular">
      <h2 class="pl-4">
        <v-icon>mdi-fire</v-icon>
        Popular
      </h2>
      <v-layout align-start row wrap>
        <v-flex
          v-for="imagePopular in imagesPopular"
          :key="imagePopular.id"  
          xl4
          md6
          xs12
          pa-4
        >
          <image-card :image="imagePopular" />
        </v-flex>
      </v-layout>
      <v-layout v-if="imagesPopular" align-center justify-center>
        <image-fetch-button text="Show more" @fetch="goTo('popular')" />
      </v-layout>
    </div>
    <div v-if="imagesLatest">
      <h2 class="pl-4">
        <v-icon class="gray lighten-2">
          mdi-clock-outline
        </v-icon>
        Latest
      </h2>
      <v-layout align-start row wrap>
        <v-flex
          v-for="imageLatest in imagesLatest"
          :key="imageLatest.id"  
          xl4
          md6
          xs12
          pa-4
        >
          <image-card :image="imageLatest" />
        </v-flex>
      </v-layout>
      <v-layout v-if="imagesLatest" align-center justify-center>
        <image-fetch-button text="Show more" @fetch="goTo('latest')" />
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [],
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
      const { data } = await this.$api.getImagesLatest({ perPage: 4 })
      this.imagesLatest = data
    },
    async getPopularImages() {
      const { data } = await this.$api.getImagesPopular({ perPage: 4 })
      this.imagesPopular = data
    },
    goTo(route) {
      this.$router.push({ name: 'list', query: { orderBy: route } })
    }
  }
}
</script>
