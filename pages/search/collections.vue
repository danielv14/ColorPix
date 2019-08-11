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
      <p v-if="hasLoadedAllCollections" class="grey--text">
        Nothing more to see here
      </p>
      <image-fetch-button
        v-else
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
      collectionCount: 6,
      totalCollections: null
    }
  },
  computed: {
    keyword() {
      return this.$route.query.keyword
    },
    hasCollections() {
      return this.collections.length > 0
    },
    hasLoadedAllCollections() {
      return this.totalCollections === this.collections.length
    }
  },
  watch: {
    async $route(to, from) {
      const keyword = to.query.keyword
      this.collections = await this.getCollectionsByKeyword({ keyword })
    }
  },
  async mounted() {
    const { collections, total } = await this.getCollectionsByKeyword({
      keyword: this.keyword
    })
    this.totalCollections = total
    this.collections = collections
  },
  methods: {
    async getCollectionsByKeyword({ keyword, page = 1, perPage }) {
      const { data } = await this.$api.getCollectionsByKeyword({
        keyword,
        page,
        perPage
      })
      return { collections: data.results, total: data.total }
    },
    async loadMore({ page, perPage }) {
      this.loadingCollections = true
      const { collections } = await this.getCollectionsByKeyword({
        page,
        perPage,
        keyword: this.keyword
      })
      this.collections.push(...collections)
      this.loadingCollections = false
    }
  }
}
</script>
