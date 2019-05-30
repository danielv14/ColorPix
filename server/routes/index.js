const express = require('express')
const {
  imageListController,
  imageRandomController,
  imagesSearchController,
  mockDataController
} = require('../controllers')

const router = express.Router()

router.get('/image/random', imageRandomController.getImageRandom)
router.get('/images/search', imagesSearchController.getImagesByKeyword)
router.get('/images/list', imageListController.getImageList)

// Setup mock route for image list response
router.get('/mock/list', mockDataController.getMockImageList)

module.exports = router
