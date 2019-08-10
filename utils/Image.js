/**
 * Class representing Unsplash image object
 */
class Image {
  /**
   * Class constructor
   * @param {Object} input Raw Unsplash image object
   */
  constructor(input) {
    // Assign passed input to class context
    Object.assign(this, input)
  }

  /**
   * Get raw image url
   * @returns {String} url
   */
  getImageRaw() {
    return this.urls.raw
  }

  /**
   * Get full size image url
   * @returns {String} url
   */
  getImageFull() {
    return this.urls.full
  }

  /**
   * Get regular size image url
   * @returns {String} url
   */
  getImageRegular() {
    return this.urls.regular
  }

  /**
   * Get small size image url
   * @return {String} url
   */
  getImageSmall() {
    return this.urls.small
  }

  /**
   * Get thumbnail size image url
   * @returns {String} url
   */
  getImageThumb() {
    return this.urls.thumb
  }

  /**
   * Get user info
   * @returns {Object}
   */
  getUserInfo() {
    return this.user || {}
  }

  /**
   * Get users first and last name in a formatted string
   * @returns {String}
   */
  getUserNameFormatted() {
    if (!this.user) {
      return ''
    }
    return `${this.user.first_name} ${this.user.last_name}`
  }
}

export default Image
