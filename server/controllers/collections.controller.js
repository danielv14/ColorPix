const { collectionsService } = require('../services')
const {
  fetchCollections,
  fetchFeaturedCollections,
  fetchCollection,
  fetchCollectionImages,
  searchCollections
} = collectionsService

/**
 * Get a single page of from the list of all collections
 * Expects page, perPage and imageCount as optional query params - ?page=Number,perPage=Number,imageCont=Number
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getCollections = async (req, res, next) => {
  try {
    const { page, perPage, imageCount } = req.query
    const collections = await fetchCollections({
      page,
      perPage,
      imageCount
    })
    res.send(collections)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * GET a single page of from the list of featured collections
 * Expects page, perPage and imageCount as optional query params - ?page=Number,perPage=Number,imageCont=Number
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getFeaturedCollections = async (req, res, next) => {
  try {
    const { page, perPage, imageCount } = req.query
    const collections = await fetchFeaturedCollections({
      page,
      perPage,
      imageCount
    })
    res.send(collections)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * GET a single page of from the list of collections by a specific keyword
 * Expects page, perPage and keyword as optional query params - ?page=Number,perPage=Number,keyword=String
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getCollectionsByKeyword = async (req, res, next) => {
  try {
    const { page, perPage, keyword } = req.query
    const collections = await searchCollections({
      page,
      perPage,
      keyword
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
