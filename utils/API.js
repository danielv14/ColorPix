import { parserImage, parserImages } from './parsers'

/**
 * API Class to be used to perform api requests to backend
 */
class API {
  /**
   * Class constructor
   * @param {Object} param0
   * @param {Request Instance} param0.request The nuxt axios request instance
   * @param {String=} [param0.baseURL='/api/'] Base api endpoint
   */
  constructor({ request, baseAPI = '/api/' }) {
    this.request = request
    this.baseAPI = baseAPI
  }

  /**
   * Get random image
   * @returns {Promise}
   */
  getRandomImage() {
    const config = {
      transformResponse: this._useParsers([parserImage])
    }
    return this.request.get(this._url('image/random'), config)
  }

  /**
   * Get images by keyword
   * @param {Object} param0
   * @param {String} param0.keyword keyword to search by
   * @param {Number} param0.page search result page to get
   * @param {Number} param0.perPage determine size of search result to get at the time
   * @returns {Promise}
   */
  getImagesByKeyword({ keyword, page, perPage }) {
    if (!keyword) {
      return {}
    }
    const config = {
      params: {
        keyword,
        page,
        perPage
      },
      transformResponse: this._useParsers(parserImages)
    }
    return this.request.get(this._url('images/search'), config)
  }

  /**
   * Get a single page from the list of all photos
   * @param {Object} param0
   * @param {Number=} param0.page List result page to get
   * @param {Number=} param0.perPage List size to get
   * @param {String=} param0.orderBy Set ordering of list. Accepts 'latest', 'oldest' and 'popular'
   * @returns {Promise}
   */
  getImagesList({ page, perPage, orderBy } = {}) {
    // Validate sort order
    const sortOrder = ['popular', 'latest', 'oldest'].includes(orderBy)
      ? orderBy
      : 'latest'

    const config = {
      params: {
        page,
        perPage,
        orderBy: sortOrder
      },
      transformResponse: this._useParsers(parserImages)
    }
    return this.request(this._url('images/list'), config)
  }
  /**
   * Return api endpoint with base endpoint prefixed
   * @param {String} url
   * @returns {String}
   */
  _url(url) {
    return `${this.baseAPI}${url}`
  }

  /**
   * Create and return an array where
   * provided parser(s) are concatenated with request instance defaults
   * @param {Array|Function} parsers
   * @returns {Array[Function]}
   */
  _useParsers(parsers = []) {
    if (typeof parsers === 'function') {
      return [].concat(this.request.defaults.transformResponse, parsers)
    }
    return [].concat(this.request.defaults.transformResponse, ...parsers)
  }
}

export default API
