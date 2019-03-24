const express = require('express')
const {
  getImageRandom,
  getImagesByKeyword,
  getImageList
} = require('../controllers')

const router = express.Router()

router.get('/image/random', getImageRandom)
router.get('/images/search', getImagesByKeyword)
router.get('/images/list', getImageList)

module.exports = router
