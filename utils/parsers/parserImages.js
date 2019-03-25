import parserImage from './parserImage'

/**
 * Parse images response data. Uses parserImage method to parse multiple images as ImagePalette classes
 * @param {Object} data
 * @returns {Array[ImagePalette]}
 */
export default function parserImages(data) {
  if (!data) {
    return []
  }

  const localData = Object.assign({}, data)
  const images = localData.results
    ? localData.results
    : createImageArray(localData)

  const imagePalettes = images.map(image => parserImage(image))
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
