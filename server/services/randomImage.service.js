require('es6-promise').polyfill()
require('isomorphic-fetch')
const { toJson } = require('unsplash-js')

const Unsplash = require('unsplash-js').default
require('dotenv').config()

const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_ACCESS_KEY,
  secret: process.env.UNSPLASH_SECRET_KEY
})

const fetchRandomImage = async () => {
  try {
    const response = await unsplash.photos.getRandomPhoto()
    return await toJson(response)
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetchRandomImage
}
