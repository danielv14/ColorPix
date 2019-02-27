<template>
  <v-app :dark="darkTheme">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
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
      <v-menu bottom left nudge-left="20" nudge-bottom="20" :close-on-content-click="false">
        <v-btn
          slot="activator"
          icon
        >
          <v-icon>settings</v-icon>
        </v-btn>
        <v-list two-line subheader>
          <v-subheader>Settings</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title> To be defined</v-list-tile-title>
              <v-list-tile-sub-title>TO be defined</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-subheader>Customizations</v-subheader>
          <v-list-tile>
            <v-list-tile-action>
              <v-switch v-model="darkTheme" color="primary" />
            </v-list-tile-action>
            <v-list-tile-title>Dark theme</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixedFooter"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixedFooter: true,
      darkTheme: false,
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
      ],
      title: 'Color Splash'
    }
  }
}
</script>
