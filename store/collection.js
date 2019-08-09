export const state = () => ({
  currentCollection: {}
})

export const getters = {
  currentCollection: state => state.currentCollection
}

export const mutations = {
  setCurrentCollection(state, collection) {
    state.currentCollection = collection
  }
}

export const actions = {
  setCurrentCollection({ commit }, collection) {
    commit('setCurrentCollection', collection)
  }
}
