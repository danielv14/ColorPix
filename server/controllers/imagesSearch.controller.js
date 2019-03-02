const { imagesSearchService } = require('../services')
const { imagesSearch } = imagesSearchService

const getImagesByKeyword = async (req, res, next) => {
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

module.exports = {
  getImagesByKeyword
}
