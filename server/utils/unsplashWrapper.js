/*
  Unsplash package uses fetch internally and it needs to be polyfilled
*/
require('es6-promise').polyfill()
require('isomorphic-fetch')

const toJson = require('unsplash-js').toJson
const Unsplash = require('unsplash-js').default

// Create new unsplash instance
const unsplash = new Unsplash({
  applicationId: process.env.UNSPLASH_ACCESS_KEY,
  secret: process.env.UNSPLASH_SECRET_KEY
})

// Export unsplash instance bundled with toJson from unsplash API
module.exports = {
  unsplash,
  toJson
}
