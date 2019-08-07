<template>
  <span class="grey--text">
    By
    <a class="grey--text" :href="linkUser">
      {{ user.username }}
    </a>
    on
    <a class="grey--text" :href="linkSource">
      Unsplash
    </a>
  </span>
</template>

<script>
import pkg from '@@/package'
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    linkUser() {
      return `https://unsplash.com/@${this.user.username}?utm_source=${pkg.name}&utm_medium=referral`
    },
    linkSource() {
      return `https://unsplash.com/?utm_source=${pkg.name}&utm_medium=referral`
    },
    appName() {
      const rawAppName = pkg.name
      return rawAppName
        .split(' ')
        .join('_')
        .toLowerCase()
    }
  }
}
</script>
