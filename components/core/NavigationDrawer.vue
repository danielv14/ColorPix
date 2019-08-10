<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      :temporary="temporary"
    >
      <v-list rounded>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-subheader>Collections</v-subheader>
        <v-list-item
          v-for="(item, i) in collectionLinks"
          :key="i + '_collections'"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-subheader>Settings</v-subheader>
        <v-list-item>
          <v-list-item-action>
            <core-theme-switch />
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar class="app-toolbar" :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <core-search-field />
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      temporary: false,
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
      ],
      collectionLinks: [
        {
          icon: 'mdi-image-multiple',
          title: 'Explore collections',
          to: { path: '/collections' }
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.app-toolbar
  box-shadow: 1px 2px 10px rgba(0,0,0,.1)
</style>
