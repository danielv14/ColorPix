<template>
  <layout-masonry>
    <div
      v-for="(image, index) in images"
      :key="index + image.id"  
      class="pa-4"
    >
      <image-card :image="image" />
    </div>
  </layout-masonry>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
