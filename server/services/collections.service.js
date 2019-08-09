const flatten = require('lodash/flatten')
const cloneDeep = require('lodash/cloneDeep')
const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

const errorMissingID = 'Id is a required parameter'

/**
 * Get the 10 latest images from passed collections
 * @param {Array} collections
 * @param {Number} imageCount amount of images to fetch from the collections
 * @returns {Promise[]} a flat list of images
 */
const getImagesFromCollections = async (collections, imageCount) => {
  const collectionsImagesPromise = collections.map(col =>
    fetchCollectionImages({ id: col.id, perPage: imageCount })
  )
  const resCollectionsImages = await Promise.all(collectionsImagesPromise)
  return flatten(resCollectionsImages)
}

/**
 * Merge collections with images by their collection_id
 * @param {Object} param0
 * @param {Array} param0.collections
 * @param {Array} param0.images
 * @returns {Array}
 */
const mergeCollectionsWithImages = ({ collections, images }) => {
  const localCollections = cloneDeep(collections)
  localCollections.forEach(col => {
    col.images = images.filter(img => img.collection_id === col.id)
  })
  return localCollections
}

/**
 * Build up collections with their 10 latest images and attach those images to the collection object
 * @param {Array{collection}} collections
 * @param {Number} imageCount amount of images to fetch from the collections
 * @returns {Promise[]}
 */
const getCollectionsImagesAndMerge = async (collections, imageCount) => {
  let images = []
  if (imageCount) {
    images = await getImagesFromCollections(collections, imageCount)
  }
  return mergeCollectionsWithImages({ collections, images })
}

/**
 * Get a single page collections from the list of all collections
 * @param {Object} param0
 * @param {Number=} [param0.page=1] Target specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 * @param {Number} param0.imageCount Amount of images to fetch from the collections
 *
 * @returns {Promise}
 */
const fetchCollections = async ({
  page = 1,
  perPage = 10,
  imageCount
} = {}) => {
  try {
    const response = await unsplash.collections.listCollections(page, perPage)
    const resCollections = await toJson(response)
    const colsMergedWithImages = await getCollectionsImagesAndMerge(
      resCollections,
      imageCount
    )
    return colsMergedWithImages
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 * Get a single page of collections from the list of featured collections
 * @param {Object} param0
 * @param {Number=} [param0.page=1] Target specific page in the image list
 * @param {Number=} [param0.perPage=10] Size of each image list result
 * @param {Number=} param0.imageCount Amount of images to fetch from the collections
 *
 * @returns {Promise}
 */
const fetchFeaturedCollections = async ({
  page = 1,
  perPage = 10,
  imageCount
} = {}) => {
  try {
    const response = await unsplash.collections.listFeaturedCollections(
      page,
      perPage
    )
    const resCollections = await toJson(response)
    const colsMergedWithImages = await getCollectionsImagesAndMerge(
      resCollections,
      imageCount
    )
    return colsMergedWithImages
  } catch (e) {
    throw new Error(e.message)
  }
}

/**
 * Get a single collection.
 * Method will not merge the collection with the 10 latest images from the collection
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
 * @param {Number=} [param0.page=1] Target specific page in the image list
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
    // Attach collection id to individual images for easier pairing
    responseJson.forEach(image => (image.collection_id = id))
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
