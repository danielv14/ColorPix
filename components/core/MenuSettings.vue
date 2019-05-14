<template>
  <v-menu bottom left nudge-left="20" nudge-bottom="20" :close-on-content-click="false">
    <v-btn
      slot="activator"
      icon
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-list two-line subheader>
      <v-subheader>Customizations</v-subheader>
      <v-list-tile>
        <v-list-tile-action>
          <v-switch color="primary" @change="onThemeChange" />
        </v-list-tile-action>
        <v-list-tile-title>Dark theme</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    onThemeChange(evt) {
      // TODO: Hook up vuex to change theme
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
