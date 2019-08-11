export const state = () => ({
  darkMode: false,
  previousRoute: {}
})

export const getters = {
  darkMode: state => state.darkMode,
  previousRoute: state => state.previousRoute
}

export const mutations = {
  toggleDarkMode(state, value) {
    state.darkMode = value
    // eslint-disable-next-line no-undef
    $nuxt.$vuetify.theme.dark = value
  },
  setPreviousRoute(state, route) {
    state.previousRoute = route
  }
}

export const actions = {
  toggleDarkMode({ commit }, value) {
    commit('toggleDarkMode', value)
  },
  setPreviousRoute({ commit }, route) {
    commit('setPreviousRoute', route)
  }
}
