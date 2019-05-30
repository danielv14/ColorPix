const { imagesSearchService } = require('../services')
const { imagesSearch } = imagesSearchService

/**
 * GET images matching query parameters and set it as express response
 * Expects keyword as query param and optional page and perPage - ?keyword=x,page=x,perPage=x
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.getImagesByKeyword = async (req, res, next) => {
  try {
    const { keyword, page, perPage } = req.query
    res.send(
      await imagesSearch({
        keyword: encodeURIComponent(keyword),
        page,
        perPage
      })
    )
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}
