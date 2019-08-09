import ImagePalette from './ImagePalette'

/**
 * Class representing Unsplash collection
 * The class can contain "preview" images from the collection
 */
class Collection {
  /**
   * Class constructor
   * @param {Object} input Unsplash collection object
   */
  constructor(input) {
    Object.assign(this, input)
    this._createImagePalettes()
  }
  /**
   * Get collection tags as array
   * @returns {Array}
   */
  getTags() {
    return this.tags.map(tag => tag.title)
  }

  /**
   * Get user info
   * @returns {Object}
   */
  getUserInfo() {
    return this.user
  }

  /**
   * Get attached preview images from the collection
   * @param {Number} amount of images to get
   * @returns {Array[ImagePalette]}
   */
  getPreviewImages(amount) {
    if (amount) {
      return this.images.slice(0, amount)
    }
    return this.images
  }

  /**
   * Transform attached preview images to ImagePalette instances
   * if they are present on the collection object
   */
  _createImagePalettes() {
    this.images =
      this.images && this.images.length > 0
        ? (this.images = this.images.map(image => new ImagePalette(image)))
        : []
  }
}

export default Collection
