<template>
  <v-layout>
    <v-flex
      v-for="color in colors"
      :key="Math.floor(Math.random() * 1000) + color"
    >
      <color-box :color="color" :size="size" :hover-effect="hoverEffect" />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default: () => []
    },
    hoverEffect: {
      type: Boolean,
      default: () => true
    },
    size: {
      type: [String, Number],
      default: () => '65px'
    }
  }
}
</script>
