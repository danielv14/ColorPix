<template>
  <div>
    <div class="text-md-center">
      <h2>
        <n-link
          :to="getCollectionLink(collection.id)"
          class="collection-link"
          @click.native="setCollection(collection)"
        >
          <slot name="header">
            {{ collection.title }}
          </slot>
        </n-link>
      </h2>
      <slot name="description">
        <span class="grey--text"> {{ collection.total_photos }} images. </span>
        <image-attribute-link :user="collection.getUserInfo()" />
      </slot>
    </div>
    <slot name="content">
      <v-layout wrap>
        <v-flex
          v-for="image in collection.getImages(imageCount)"
          :key="image.id"
          md6
          lg4
          class="pa-4"
        >
          <image-card :image="image" :image-height="imageHeight" />
        </v-flex>
      </v-layout>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      default: () => {}
    },
    imageCount: {
      type: Number,
      default: () => 3
    },
    imageHeight: {
      type: Number,
      default: () => 350
    }
  },
  methods: {
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
