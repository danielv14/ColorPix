const express = require('express')
const {
  getImageRandom,
  getImagesByKeyword,
  getImageList
} = require('../controllers')

// Require methods from mockData controller seperatly since controllers index does not require and export it
const { getMockImageList } = require('../controllers/mockData.controller')

const router = express.Router()

router.get('/image/random', getImageRandom)
router.get('/images/search', getImagesByKeyword)
router.get('/images/list', getImageList)

// Setup mock route for image list response
router.get('/mock/list', getMockImageList)

module.exports = router
