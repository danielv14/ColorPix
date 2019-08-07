<template>
  <div @mouseleave="resetToolTip">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          color="grey darken-1"
          text
          icon
          @click="copyToClipBoard"
          v-on="on"
        >
          <v-icon>content_copy</v-icon>
        </v-btn>
      </template>
      <span>{{ tooltipText }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import copy from 'copy-to-clipboard'

export default {
  props: {
    colors: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tooltipText: 'Copy colors to clipboard'
    }
  },
  methods: {
    copyToClipBoard() {
      copy(this.colors)
      this.tooltipText = 'Copied to clipboard'
    },
    resetToolTip() {
      setTimeout(() => {
        this.tooltipText = this.getDefaultToolTipText()
      }, 500)
    },
    getDefaultToolTipText() {
      return 'Copy colors to clipboard'
    }
  }
}
</script>
