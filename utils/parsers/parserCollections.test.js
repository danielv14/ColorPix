import collectionsWithImages from '../testdata/collectionsWithImages'
import collectionWithoutImages from '../testdata/collection'
import Collection from '../Collection'
import parserCollections from './parserCollections'

describe('parserCollections()', () => {
  it('should be defined', () => {
    expect(parserCollections).toBeDefined()
  })
  it('should properly parse a single collection', () => {
    const parsedData = parserCollections(collectionWithoutImages)
    expect(parsedData instanceof Collection).toBeTruthy()
  })
  it('should properly parse multiple collections', () => {
    const parsedData = parserCollections(collectionsWithImages)
    parsedData.map(col => expect(col instanceof Collection).toBeTruthy())
  })
})
