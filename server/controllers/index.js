const { getImageRandom } = require('./imageRandom.controller')
const { getImagesByKeyword } = require('./imagesSearch.controller')
const { getImageList } = require('./imageList.controller')

module.exports = {
  getImageRandom,
  getImagesByKeyword,
  getImageList
}
