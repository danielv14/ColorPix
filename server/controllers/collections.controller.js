const { collectionsService } = require('../services')
const {
  fetchCollections,
  fetchFeaturedCollections,
  fetchCollection,
  fetchCollectionImages
} = collectionsService

/**
 * Get a single page of from the list of all collections
 * Expects page, perPage and orderBy as optional params - ?page=Number,perPage=Number,orderBy=String
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getCollections = async (req, res, next) => {
  try {
    const { page, perPage, orderBy } = req.query
    const collections = await fetchCollections({
      page,
      perPage,
      orderBy
    })
    res.send(collections)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * GET a single page of from the list of featured collections
 * Expects page and perPage as optional query params - ?page=Number,perPage=Number
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getFeaturedCollections = async (req, res, next) => {
  try {
    const { page, perPage } = req.query
    const collections = await fetchFeaturedCollections({
      page,
      perPage
    })
    res.send(collections)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * GET a single collection
 * Expects mandatory request param id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getCollection = async (req, res, next) => {
  try {
    const { id } = req.params
    const collection = await fetchCollection({ id })
    res.send(collection)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * Get a single page of images from a specific list
 * Expects id as reqest param
 * Expects page, perPage and orderBy as optional request query params - ?page=Number,perPage=Number,orderBy=String
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getCollectionImages = async (req, res, next) => {
  try {
    const { id } = req.params
    const { page, perPage, orderBy } = req.query
    const collections = await fetchCollectionImages({
      id,
      page,
      perPage,
      orderBy
    })
    res.send(collections)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}
