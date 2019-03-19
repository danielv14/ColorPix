const express = require('express')
const { getImageRandom, getImagesByKeyword } = require('../controllers')
const router = express.Router()

router.get('/image/random', getImageRandom)
router.get('/images/search', getImagesByKeyword)

module.exports = router
