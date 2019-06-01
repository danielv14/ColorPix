<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      :temporary="temporary"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <core-search-field />
      <v-spacer />
      <core-menu-settings />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      temporary: false,
      darkTheme: false,
      title: 'Color Splash',
      items: [
        {
          icon: 'apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'About',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
