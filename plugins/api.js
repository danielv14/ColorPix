import API from '../utils/API'

export default ({ $axios }, inject) => {
  // Create new api class with provided nuxt axios module
  const api = new API({ request: $axios })
  // Inject the api to make it available across app via this.$api
  inject('api', api)
}
