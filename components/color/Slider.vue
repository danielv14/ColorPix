<template>
  <div>
    <color-boxes :colors="hexValues" size="45px" :hover-effect="hoverEffect" />
    <v-layout align-baseline>
      <v-slider
        v-model="sliderLevel"
        :label="label"
        :max="max"
        :min="min"
        thumb-label
        :ticks="ticks"
      />
      <color-clipboard-copy :colors="hexValues" />
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    hoverEffect: {
      type: Boolean,
      default: () => false
    },
    colors: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    max: {
      type: Number,
      default: () => 6
    },
    min: {
      type: Number,
      default: () => 0
    },
    step: {
      type: Number,
      default: () => 1
    },
    ticks: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      sliderLevel: this.min
    }
  },
  computed: {
    hexValues() {
      return this.colors.map(color => color[this.type](this.sliderLevel).hex())
    }
  }
}
</script>
