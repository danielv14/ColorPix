<template>
  <div>
    <v-layout align-center column>
      <v-breadcrumbs :items="breadcrumbs" divider=">">
        <template v-slot:item="props">
          <v-breadcrumbs-item
            :to="props.item"
            :class="[props.item.disabled && 'disabled']"
            nuxt
          >
            {{ formatBreadcrumbName(props.item.name) }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <h2>{{ collection.title }}</h2>
      <span class="grey--text">
        {{ collection.total_photos }} images.
        <image-attribute-link :user="collection.user" />
      </span>
      <span v-if="collection.description" class="grey--text description">
        {{ collection.description }}
      </span>
    </v-layout>
    <v-layout align-start row wrap>
      <layout-masonry-images :images="images" />
    </v-layout>
    <v-layout v-if="hasImages" align-center justify-center>
      <p v-if="hasLoadedAllImages" class="grey--text">
        Nothing more to see here
      </p>
      <image-fetch-button
        v-else
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
      collection: { user: {} },
      images: [],
      loadingImages: false,
      breadcrumbs: []
    }
  },
  computed: {
    hasLoadedAllImages() {
      return this.collection.total_photos === this.images.length
    }
  },
  async mounted() {
    await this.setCollection(this.$route.params.id)
    this.setBreadcrumbs()
    this.breadcrumbs.push({
      name: this.collection.title || 'Current collection',
      disabled: true
    })
    this.images = await this.getCollectionImages({
      id: this.collection.id
    })
  },
  methods: {
    async setCollection(id) {
      if (this.$store.state.collection.currentCollection) {
        this.collection = this.$store.state.collection.currentCollection
        return
      }
      const { data } = await this.$api.getCollection({ id })
      this.collection = data
      this.$store.dispatch('collection/setCurrentCollection', this.collection)
    },
    async getCollectionImages({ id, page = 1, perPage, orderBy }) {
      const { data } = await this.$api.getCollectionImages({
        id,
        page,
        perPage,
        orderBy
      })
      return data
    },
    async loadMore({ page, perPage }) {
      this.loadingImages = true
      const newImages = await this.getCollectionImages({
        id: this.collection.id,
        page,
        perPage,
        orderBy: this.orderBy
      })
      this.images.push(...newImages)
      this.loadingImages = false
    },
    setBreadcrumbs() {
      const previousRoute = this.$store.state.application.previousRoute
      this.breadcrumbs.push(previousRoute)
    },
    formatBreadcrumbName(name) {
      if (name.startsWith('search-')) {
        const parts = name.split('-')
        parts[0].concat(' for ')
        return parts.join(' for ')
      }
      return name
    }
  }
}
</script>
<style lang="sass" scoped>
.description
  max-width: 800px
  text-align: center
</style>
