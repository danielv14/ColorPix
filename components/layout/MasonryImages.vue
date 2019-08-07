<template>
  <layout-masonry :cols="cols">
    <div v-for="(image, index) in images" :key="index + image.id" class="pa-4">
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
    },
    cols: {
      type: [Object, String],
      default: () => {
        return { default: 4, 1500: 3, 1250: 2, 800: 1 }
      }
    }
  }
}
</script>
