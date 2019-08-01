<template>
  <masonry class="masonry-wrapper" :cols="cols">
    <slot />
  </masonry>
</template>

<script>
export default {
  props: {
    cols: {
      type: [Object, String],
      default: () => {
        return { default: 4, 1500: 3, 1250: 2, 800: 1 }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.masonry-wrapper
  width: 100%
</style>
