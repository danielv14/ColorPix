const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

/**
 * Fetch a random image from unsplash
 *
 * @returns {Promise}
 */
const fetchRandomImage = async () => {
  try {
    const response = await unsplash.photos.getRandomPhoto()
    const responseJson = await toJson(response)

    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetchRandomImage
}
