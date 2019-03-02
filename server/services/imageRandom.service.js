const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

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
