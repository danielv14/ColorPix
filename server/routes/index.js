const express = require('express')
const { getRandomImage, getImagesByKeyword } = require('../controllers')
const router = express.Router()

router.get('/random', getRandomImage)
router.get('/images/search', getImagesByKeyword)

module.exports = router
