
<template>
  <div>
    <v-slider
      v-model="sliderLevel"
      :label="label"
      :max="max"
      :min="min"
      thumb-label
      :ticks="ticks"
      @input="onChange"
      @start="onStart"
    />
  </div>
</template>

<script>
/* eslint-disable no-console */
import { availableTypes } from '@@/utils/colorManipulation'
export default {
  props: {
    label: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => ''
    },
    colors: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: () => 6
    },
    min: {
      type: Number,
      default: () => -6
    },
    default: {
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
      sliderLevel: this.default,
      prevLevel: this.default
    }
  },
  mounted() {
    if (!this.type) {
      // eslint-disable-next-line no-console
      console.error(
        `Prop 'type' is required. The following types are allowed: ${availableTypes().join(
          ', '
        )}`
      )
    }
  },
  methods: {
    onChange(evt) {
      this.$emit('change', {
        level: evt,
        type: this.type,
        shouldIncrement: evt >= this.prevLevel
      })
      this.prevLevel = evt
    },
    onStart(evt) {
      this.prevLevel = evt
    }
  }
}
</script>
