const { imageRandomService } = require('../services')
const { fetchRandomImage } = imageRandomService

/**
 * GET a random image and send it as express response
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
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
