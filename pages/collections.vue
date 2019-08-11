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
        :per-page="collectionCount"
        @fetch="loadMore"
      />
    </v-layout>
  </div>
</template>

<script>
import mixinCollections from '~/mixins/mixinCollections'

export default {
  mixins: [mixinCollections],
  data() {
    return {
      collections: [],
      loadingCollections: false,
      imageCount: null, // Set to a number to have API fetch actual images attached to collections
      collectionCount: 6
    }
  },
  async mounted() {
    this.collections = await this.getCollections({
      imageCount: this.imageCount,
      perPage: this.collectionCount
    })
  },
  methods: {
    async loadMore({ page, perPage }) {
      this.loadingCollections = true
      const newCollections = await this.getCollections({
        page,
        perPage,
        imageCount: this.imageCount
      })
      this.collections.push(...newCollections)
      this.loadingCollections = false
    }
  }
}
</script>
