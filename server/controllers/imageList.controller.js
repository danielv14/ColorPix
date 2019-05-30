const { imageListService } = require('../services')
const { fetchImageList } = imageListService

/**
 * GET an single page from the full image list
 * Expects keyword as query param and optional page, perPage and orderBy - ?page=Number,perPage=Number,orderBy=String
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getImageList = async (req, res, next) => {
  try {
    const { page, perPage, orderBy } = req.query
    const imageList = await fetchImageList({
      page,
      perPage,
      orderBy
    })
    res.send(imageList)
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}
