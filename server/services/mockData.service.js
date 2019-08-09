const mockImageList = require('../utils/mockdata/ImageListResponse')
const mockCollectionsList = require('../utils/mockdata/collectionsResponse')

/**
 * Get mock data of image list response
 * @returns {Array}
 */
const mockDataImageList = () => {
  return mockImageList
}

/**
 * Get mock data of collections list
 * @param {Boolean} param0.includeImages determine if mockdata is to be fetched with images or not
 * @returns {Array}
 */
const mockDataCollectionsList = ({ includeImages = true } = {}) => {
  if (includeImages) {
    return mockCollectionsList
  }
  const dataWithoutImages = mockCollectionsList.map(col => {
    col.images = []
    return col
  })
  return dataWithoutImages
}

module.exports = {
  mockDataImageList,
  mockDataCollectionsList
}
