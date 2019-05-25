<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 18 : 0}`"
      class="elevation-0"
    >
      <v-img
        :src="image.getImageRegular()"
        :height="imageHeight"
        :lazy-src="image.getImageThumb()"
      />
      <color-boxes :colors="hexValues" />
      <v-card-actions>
        <image-attribute-link :user="image.getUserInfo()" />        
        <v-spacer />
        <v-btn icon @click="showContent = !showContent">
          <v-icon>{{ showContent ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="showContent">
          <color-tabs :colors="colors" :tabs="tabs" :color-manipulation="colorManipulation" />
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    imageHeight: {
      type: Number,
      default: () => 250
    }
  },
  data() {
    return {
      showContent: false,
      colors: [],
      colorTab: null,
      tabs: ['Saturation', 'Brightness'],
      colorManipulation: [
        [
          { type: 'saturate', label: 'Saturate' },
          { type: 'desaturate', label: 'Desaturate' }
        ],
        [
          { type: 'brighten', label: 'Brighten' },
          { type: 'darken', label: 'Darken' }
        ]
      ]
    }
  },
  computed: {
    imageDescription() {
      return this.image.description || this.image.alt_description
    },
    hexValues() {
      return this.colors.map(color => color.hex())
    }
  },
  async mounted() {
    const chromaColors = await this.image.getChromaColors()
    this.colors = [...chromaColors]
  }
}
</script>

<style lang="scss" scoped>
</style>
