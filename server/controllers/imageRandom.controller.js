const { imageRandomService } = require('../services')
const { fetchRandomImage } = imageRandomService

const getImageRandom = async (req, res, next) => {
  try {
    res.send(await fetchRandomImage())
    next()
  } catch (e) {
    res.sendStatus(500) && next(e)
  }
}

module.exports = {
  getImageRandom
}
