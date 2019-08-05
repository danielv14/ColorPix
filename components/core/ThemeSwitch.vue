<template>
  <v-switch
    v-model="darkMode"
    inset
    color="primary"
    label="Dark mode"
    @change="onChangeTheme"
  />
</template>

<script>
export default {
  data() {
    return {
      darkMode: this.$store.state.application.darkMode || false
    }
  },
  methods: {
    onChangeTheme(evt) {
      this.$store.dispatch('application/toggleDarkMode', evt)
    }
  }
}
</script>
