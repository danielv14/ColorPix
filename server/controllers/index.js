const { getRandomImage } = require('./randomImage.controller')
const { getImagesByKeyword } = require('./imagesSearch.controller')

module.exports = {
  getRandomImage,
  getImagesByKeyword
}
