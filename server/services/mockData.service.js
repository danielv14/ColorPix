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
 * @returns {Array}
 */
const mockDataCollectionsList = () => {
  return mockCollectionsList
}

module.exports = {
  mockDataImageList,
  mockDataCollectionsList
}
