const express = require('express')
const { getImageRandom, getImagesByKeyword } = require('../controllers')
const router = express.Router()

router.get('/random', getImageRandom)
router.get('/images/search', getImagesByKeyword)

module.exports = router
