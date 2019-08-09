const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

/**
 * Fetch a single page from the list of all photos
 * @param {Object} param0
 * @param {Number=} [param0.page=1] Target specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 * @param {String=} [param0.orderBy='latest'] Set sort order of image list set. Accepts 'oldest', 'latest' and 'popular'
 *
 * @returns {Promise}
 */
const fetchImageList = async ({
  page = 1,
  perPage = 10,
  orderBy = 'latest'
} = {}) => {
  try {
    const response = await unsplash.photos.listPhotos(page, perPage, orderBy)
    const responseJson = await toJson(response)
    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetchImageList
}
