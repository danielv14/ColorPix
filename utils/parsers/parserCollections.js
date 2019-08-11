import Collection from '../Collection'

/**
 * Parse collection(s) response data as Collection classes
 * @param {Object} data
 * @returns {Array[Collection]}
 */
export default function parserCollections(data) {
  if (!data) {
    return {}
  }
  // Support search result collections response
  if (data.results) {
    data.results = data.results.map(col => new Collection(col))
    return data.results
  }
  // Support multiple collections creation
  if (data.length > 0) {
    const collections = data.map(col => new Collection(col))
    return collections
  }

  const collection = new Collection(data)
  return collection
}
