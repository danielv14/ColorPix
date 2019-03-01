const { randomImageService } = require('../services')
const { fetchRandomImage } = randomImageService

const getRandomImage = async (req, res, next) => {
  try {
    res.send(await fetchRandomImage())
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

module.exports = {
  getRandomImage
}
