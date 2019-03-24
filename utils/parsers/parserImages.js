import ImagePalette from '../ImagePalette'

/**
 * Parse images response data as ImagePalette classes
 * @param {Object} data
 * @returns {Array[ImagePalette]}
 */
export default function parserImage(data) {
  if (!data) {
    return []
  }

  const localData = Object.assign({}, data)
  const images = localData.results
    ? localData.results
    : createImageArray(localData)

  const imagePalettes = images.map(image => new ImagePalette(image))
  return imagePalettes
}

/**
 * Loop over object and to create an array of the objects
 * @param {Object} objects
 *
 * @returns {Array[Object]}
 */
function createImageArray(objects) {
  return Object.keys(objects).map(dataKey => objects[dataKey])
}
