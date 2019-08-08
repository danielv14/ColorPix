const express = require('express')
const {
  imageListController,
  imageRandomController,
  imagesSearchController,
  collectionsController,
  mockDataController
} = require('../controllers')

const router = express.Router()

router.get('/image/random', imageRandomController.getImageRandom)
router.get('/images/search', imagesSearchController.getImagesByKeyword)
router.get('/images/list', imageListController.getImageList)

// Setup collections routes
router.get('/collections', collectionsController.getCollections)
router.get(
  '/collections/featured',
  collectionsController.getFeaturedCollections
)
router.get('/collection/:id', collectionsController.getCollection)
router.get('/collection/:id/images', collectionsController.getCollectionImages)

// Setup mock route for image list response
router.get('/mock/list', mockDataController.getMockImageList)
router.get('/mock/collections', mockDataController.getMockCollections)

module.exports = router
