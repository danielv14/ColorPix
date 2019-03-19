import ImagePalette from '../ImagePalette'

/**
 * Parse images response data as ImagePalette classes
 * @param {Object} data
 * @returns {Array[ImagePalette]}
 */
export default function parserImage(data) {
  if (!data) {
    return {}
  }
  const localData = Object.assign({}, data)
  const imagePalettes = localData.results.map(image => new ImagePalette(image))
  return imagePalettes
}
