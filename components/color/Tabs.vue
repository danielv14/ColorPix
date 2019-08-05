<template>
  <v-tabs v-model="activeTab" slider-color="primary" grow hide-slider>
    <v-tab v-for="tab in tabs" :key="tab" ripple>
      {{ tab }}
    </v-tab>
    <v-tab-item
      v-for="(tab, index) in tabs"
      :key="tab + 'manipulation'"
      class="mt-2"
    >
      <color-slider
        v-for="sliderSetting in colorManipulation[index]"
        :key="sliderSetting.type"
        :colors="colors"
        :type="sliderSetting.type"
        :label="sliderSetting.label"
        :hover-effect="true"
      />
    </v-tab-item>
  </v-tabs>
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
      default: () => false
    },
    tabs: {
      type: Array,
      default: () => []
    },
    colorManipulation: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>

<style lang="stylus" scoped></style>
