const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

const errorMissingID = 'Id is a required parameter'

/**
 * Get a single page collections from the list of all collections
 * @param {Object} param0
 * @param {Number=} [param0.page=1] Tatget specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 * @param {String=} [param0.orderBy='latest'] Set sort order of image list set. Accepts 'oldest', 'latest' and 'popular'
 *
 * @returns {Promise}
 */
const fetchCollections = async ({ page = 1, perPage = 10, orderBy } = {}) => {
  try {
    const response = await unsplash.collections.listCollections(
      page,
      perPage,
      orderBy
    )
    const responseJson = await toJson(response)
    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 * Get a single page of collections from the list of featured collections
 * @param {Object} param0
 * @param {Number=} [param0.page=1] Tatget specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 *
 * @returns {Promise}
 */
const fetchFeaturedCollections = async ({ page = 1, perPage = 10 } = {}) => {
  try {
    const response = await unsplash.collections.listFeaturedCollections(
      page,
      perPage
    )
    const responseJson = await toJson(response)
    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 * Get a single collection
 * @param {Object} param0
 * @param {Number} param0.id id of collection
 *
 * @returns {Promise}
 */
const fetchCollection = async ({ id } = {}) => {
  if (!id) {
    throw new Error(errorMissingID)
  }
  try {
    const response = await unsplash.collections.getCollection(id)
    const responseJson = await toJson(response)
    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 * Get a single page of images from a specific list
 * @param {Object} param0
 * @param {Number} [param0.id] Collection id to get images from
 * @param {Number=} [param0.page=1] Tatget specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 * @param {String=} [param0.orderBy='latest'] Set sort order of image list set. Accepts 'oldest', 'latest' and 'popular'
 *
 * @returns {Promise}
 */
const fetchCollectionImages = async ({
  id,
  page = 1,
  perPage = 10,
  orderBy = 'latest'
} = {}) => {
  if (!id) {
    throw new Error(errorMissingID)
  }
  try {
    const response = await unsplash.collections.getCollectionPhotos(
      id,
      page,
      perPage,
      orderBy
    )
    const responseJson = await toJson(response)
    return responseJson
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  fetchCollections,
  fetchFeaturedCollections,
  fetchCollection,
  fetchCollectionImages
}
