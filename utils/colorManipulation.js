import chroma from 'chroma-js'

/**
 * Object that holds available color manipulation types
 * and their respective manipulation methods above and below the 0 threshold
 *
 * The method arrays index 0 represents threshold < 0 and index 1 represents threshold > 0
 */
const TYPES = {
  saturation: ['desaturate', 'saturate'],
  brightness: ['darken', 'brighten']
}

/**
 * Get list of available types of color manipulation
 * @returns {Array}
 */
export function availableTypes() {
  return Object.keys(TYPES)
}

/**
 * Get available manipulation method name for a given type and threshold
 * @param {String} type
 * @param {Number} threshold
 * @returns {String}
 */
export function getManipulationFromTypeAndThreshold({ type, threshold = 0 }) {
  const manipulations = TYPES[type]
  if (!manipulations) {
    return ''
  }
  if (threshold < 0) {
    return manipulations[0]
  } else {
    return manipulations[1]
  }
}

/**
 * Create and return a chroma object from a hex value
 * @param {String} hex value
 * @param {Object<Chroma>}
 */
export function chromaFromHex(hex) {
  return chroma(hex)
}

/**
 * Build a hex color array from chroma colors and passed color manipulation methods and values
 * @param {Array<Chroma>} chromaColors array of chroma color objects
 * @param {Array} manipulation representing chroma methods and levels to use
 * @returns {Array} array of hex values
 */
export function getChangedHexValues({ chromaColors, manipulations }) {
  const changedColors = []
  chromaColors.forEach((color, index) => {
    manipulations.forEach(manipulation => {
      // No hex value exist for chrome color being iterated. Insert hex value from iterated chroma color
      if (!changedColors[index]) {
        const hexValue = color[manipulation.type](manipulation.level).hex()
        changedColors[index] = hexValue
      } else {
        // Hex value already exist (i.e a hex value that has been manipulted). Manipulate that hex value further
        const newChroma = chromaFromHex(changedColors[index])
        changedColors[index] = newChroma[manipulation.type](
          manipulation.level
        ).hex()
      }
    })
  })
  return changedColors
}
