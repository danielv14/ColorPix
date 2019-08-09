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
  // Support multiple collections creation
  if (data.length > 0) {
    const collections = data.map(col => new Collection(col))
    return collections
  }
  const collection = new Collection(data)
  return collection
}
