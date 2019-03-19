import ImagePalette from '../ImagePalette'

/**
 *  Parse image response data as ImagePalette class
 * @param {Object} data
 * @returns {ImagePalette}
 */
export default function parserImage(data) {
  if (!data) {
    return {}
  }
  const imagePalette = new ImagePalette(data)
  return imagePalette
}
