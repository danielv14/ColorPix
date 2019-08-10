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
   * Get attached images from the collection
   * @param {Number} amount of images to get
   * @returns {Array[ImagePalette]}
   */
  getImages(amount) {
    if (amount) {
      return this.images.slice(0, amount)
    }
    return this.images
  }

  /**
   * Get attached preview images from the collection
   * Preview images does only contain the urls and id of images. No user info and such
   * @param {Number} amount of images to get
   * @returns {Array[ImagePalette]}
   */
  getPreviewImages(amount) {
    if (amount) {
      return this.preview_photos.slice(0, amount)
    }
    return this.preview_photos
  }

  /**
   * Transform attached preview images to ImagePalette instances
   * if they are present on the collection object
   */
  _createImagePalettes() {
    if (this.images && this.images.length > 0) {
      this.images = this.images.map(image => new ImagePalette(image))
    } else {
      this.images = []
    }
    if (this.preview_photos) {
      this.preview_photos = this.preview_photos.map(
        img => new ImagePalette(img)
      )
    }
  }
}

export default Collection
