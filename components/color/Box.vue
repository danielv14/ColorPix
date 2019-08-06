<template>
  <v-hover v-slot:default="{ hover }">
    <div :style="{ backgroundColor: color, height: boxSize }" class="color-box">
      <v-expand-transition>
        <div
          v-if="hover && hoverEffect"
          class="d-flex transition-fast-in-fast-out primary hex-value-reveal white--text"
          style="height: 100%;"
        >
          {{ color }}
        </div>
      </v-expand-transition>
    </div>
  </v-hover>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: () => '#eee'
    },
    hoverEffect: {
      type: Boolean,
      default: () => true
    },
    size: {
      type: [String, Number],
      default: () => '65px'
    }
  },
  data() {
    return {
      hover: true
    }
  },
  computed: {
    boxSize() {
      return typeof this.size === 'number' ? `${this.size}px` : this.size
    }
  }
}
</script>

<style lang="sass" scoped>
.color-box
  height: 80px
  position: relative

.hex-value-reveal
  align-items: center
  bottom: 0
  justify-content: center
  position: absolute
  width: 100%
</style>
