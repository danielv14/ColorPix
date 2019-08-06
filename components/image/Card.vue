<template>
  <v-hover v-slot:default="{ hover }">
    <v-card :elevation="hover ? 16 : 0" class="image-card">
      <v-img
        :src="image.getImageRegular()"
        :max-height="imageHeight"
        :lazy-src="image.getImageThumb()"
      />
      <color-boxes :colors="hexValues" />
      <v-card-actions>
        <image-attribute-link :user="image.getUserInfo()" />
        <v-spacer />
        <color-clipboard-copy :colors="hexValues" />

        <v-btn icon @click="showContent = !showContent">
          <v-icon>
            {{ showContent ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="showContent">
          <color-slider
            :colors="colors"
            label="Saturation"
            type="saturation"
            @change="onChangeSlider"
          />
          <color-slider
            :colors="colors"
            label="Brightness"
            type="brightness"
            @change="onChangeSlider"
          />
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-hover>
</template>

<script>
import {
  getManipulationFromTypeAndThreshold,
  getChangedHexValues
} from '@@/utils/colorManipulation'
export default {
  props: {
    image: {
      type: Object,
      default: () => {}
    },
    imageHeight: {
      type: Number,
      default: () => 450
    }
  },
  data() {
    return {
      showContent: false,
      colors: [],
      colorManipulation: {},
      hexValues: []
    }
  },
  computed: {
    imageDescription() {
      return this.image.description || this.image.alt_description
    }
  },
  async mounted() {
    const chromaColors = await this.image.getChromaColors()
    this.colors = [...chromaColors]
    this.hexValues = this.colors.map(color => color.hex())
  },
  methods: {
    /**
     * @param {String} type
     * @param {Number} level
     */
    async onChangeSlider({ type, level }) {
      const manipulationMethod = getManipulationFromTypeAndThreshold({
        threshold: level,
        type
      })
      this.setManipulationType({ type, level, method: manipulationMethod })
      this.hexValues = await this.getChangedHexValues()
    },

    /**
     * Set manipulation type, level and method on the manipulations object
     * @param {String} type
     * @param {Number} level
     * @param {String} method name to use on the chroma object
     */
    setManipulationType({ type, level, method }) {
      // Cast level to positive number
      const manipulationLevel = Math.abs(level)
      // Set color manipulation for current type
      this.colorManipulation[type] = {
        type: method,
        level: manipulationLevel
      }
    },

    /**
     * Get updated hex color array built from original image palette and color manipulations
     * @returns {Array}
     */
    async getChangedHexValues() {
      const chromaColors = await this.getChromaColors()
      const manipulations = this.getManipulationsToUse()
      return getChangedHexValues({ chromaColors, manipulations })
    },

    /**
     * Get array of manipulation methods and levels to use
     * @returns {Array}
     */
    getManipulationsToUse() {
      const manipulations = Object.keys(this.colorManipulation).map(
        manipulationKey => {
          const manipulation = this.colorManipulation[manipulationKey]
          return { type: manipulation.type, level: manipulation.level }
        }
      )
      return manipulations
    },
    /**
     * Get default chroma colors from image
     * @returns {Array<Chroma>}
     */
    async getChromaColors() {
      const chromaColors = await this.image.getChromaColors()
      return [...chromaColors]
    }
  }
}
</script>

<style lang="sass" scoped>
.image-card
  transition: all 150ms ease-in-out
.image-card:hover
  transform: translateY(-2px)
</style>
