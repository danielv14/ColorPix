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
        <v-divider />
        <v-list-tile>
          <v-list-tile-content>
            <core-theme-switch />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="app-toolbar" :clipped-left="clipped" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <core-search-field />
      <v-spacer />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      temporary: true,
      title: 'ColorPix',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-clock-outline',
          title: 'Latest',
          to: { path: '/list', query: { orderBy: 'latest' } }
        },
        {
          icon: 'mdi-fire',
          title: 'Popular',
          to: { path: '/list', query: { orderBy: 'popular' } }
        },
        {
          icon: 'mdi-information-variant',
          title: 'About',
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-toolbar
  box-shadow: 1px 2px 10px rgba(0,0,0,.1)
</style>
