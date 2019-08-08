const { mockDataService } = require('../services')
const { mockDataImageList, mockDataCollectionsList } = mockDataService

/**
 * Get a mock response with list of 10 images
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getMockImageList = (req, res, next) => {
  try {
    const data = mockDataImageList()
    res.send(data)
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

/**
 * Get a mock response with 10 collections
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getMockCollections = (req, res, next) => {
  try {
    const data = mockDataCollectionsList()
    res.send(data)
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}
