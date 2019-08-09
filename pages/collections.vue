<template>
  <div>
    <v-layout align-start row wrap>
      <v-container fluid>
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="pa-2 ma-2"
        >
          <div class="text-md-center">
            <h2>
              <n-link
                :to="getCollectionLink(collection.id)"
                class="collection-link"
                @click.native="setCollection(collection)"
              >
                {{ collection.title }}
              </n-link>
            </h2>
            <span class="grey--text">
              {{ collection.total_photos }} images.
            </span>
            <image-attribute-link :user="collection.getUserInfo()" />
          </div>
          <v-layout wrap>
            <v-flex
              v-for="image in collection.getPreviewImages(imageCount)"
              :key="image.id"
              md6
              lg4
              class="pa-4"
            >
              <image-card :image="image" :image-height="350" />
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </v-layout>
    <v-layout v-if="hasCollections" align-center justify-center>
      <image-fetch-button
        :loading="loadingCollections"
        :lazy="true"
        :per-page="3"
        @fetch="loadMore"
      />
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collections: [],
      loadingCollections: false,
      imageCount: 3
    }
  },
  computed: {
    hasCollections() {
      return this.collections.length > 0
    }
  },
  async mounted() {
    this.collections = await this.getCollections({
      imageCount: this.imageCount
    })
  },
  methods: {
    async getCollections({ page = 1, perPage = 3, imageCount }) {
      const { data } = await this.$api.getCollections({
        page,
        perPage,
        imageCount
      })
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingCollections = true
      const newCollections = await this.getCollections({
        page,
        perPage,
        imageCount: this.imageCount
      })
      this.collections.push(...newCollections)
      this.loadingCollections = false
    },
    getCollectionLink(id) {
      return `/collection/${id}`
    },
    setCollection(collection) {
      this.$store.dispatch('collection/setCurrentCollection', collection)
    }
  }
}
</script>
<style lang="sass" scoped>
.collection-link
  text-decoration: none
</style>
