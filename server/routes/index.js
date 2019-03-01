const express = require('express')
const { getRandomImage } = require('../controllers')
const router = express.Router()

router.get('/random', getRandomImage)

module.exports = router
