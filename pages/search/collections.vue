<template>
  <div>
    <v-layout align-start row wrap>
      <v-container fluid>
        <collections-preview
          v-for="collection in collections"
          :key="collection.id"
          class="pa-2 ma-2"
          :collection="collection"
        />
      </v-container>
    </v-layout>
    <v-layout v-if="hasCollections" align-center justify-center>
      <image-fetch-button
        :loading="loadingCollections"
        :lazy="true"
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
      collectionCount: 6
    }
  },
  computed: {
    keyword() {
      return this.$route.query.keyword
    },
    hasCollections() {
      return this.collections.length > 0
    }
  },
  watch: {
    async $route(to, from) {
      const keyword = to.query.keyword
      this.collections = await this.getCollectionsByKeyword({ keyword })
    }
  },
  async mounted() {
    this.collections = await this.getCollectionsByKeyword({
      keyword: this.keyword
    })
  },
  methods: {
    async getCollectionsByKeyword({ keyword, page = 1, perPage }) {
      const { data } = await this.$api.getCollectionsByKeyword({
        keyword,
        page,
        perPage
      })
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingCollections = true
      const newCollections = await this.getCollectionsByKeyword({
        page,
        perPage,
        keyword: this.keyword
      })
      this.collections.push(...newCollections)
      this.loadingCollections = false
    }
  }
}
</script>
