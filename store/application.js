export const state = () => ({
  darkMode: false
})

export const getters = {
  darkMode: state => state.darkMode
}

export const mutations = {
  toggleDarkMode(state, value) {
    state.darkMode = value
    // eslint-disable-next-line no-undef
    $nuxt.$vuetify.theme.dark = value
  }
}

export const actions = {
  toggleDarkMode({ commit }, value) {
    commit('toggleDarkMode', value)
  }
}
