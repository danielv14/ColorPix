const { unsplashWrapper } = require('../utils')
const { unsplash, toJson } = unsplashWrapper

/**
 * Search for images by keyword
 * @param {Object} param0
 * @param {String} param0.keyword Keyword to search for
 * @param {Number=} [param0.page=1] Target specific page in the search result
 * @param {Number=} [param0.perPage=10] Size of each search result page
 */
const imagesSearch = async ({ keyword, page = 1, perPage = 10 }) => {
  try {
    const response = await unsplash.search.photos(keyword, page, perPage)
    return await toJson(response)
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  imagesSearch
}
