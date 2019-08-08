import {
  fetchCollections,
  fetchFeaturedCollections,
  fetchCollection,
  fetchCollectionImages
} from './collections.service'

describe('collections.service', () => {
  describe('fetchCollections()', () => {
    it('should be defined', () => {
      expect(fetchCollections).toBeDefined()
    })
    it('should return a list of collections with params omitted', async () => {
      const collections = await fetchCollections()
      expect(collections.length).toBeGreaterThan(1)
    })
    it('should be able to fetch a specific amount of collections', async () => {
      const collections = await fetchCollections({ perPage: 5 })
      expect(collections.length).toBe(5)
    })
  })
  describe('fetchFeaturedCollections()', () => {
    it('should be defined', () => {
      expect(fetchFeaturedCollections).toBeDefined()
    })
    it('should fetch a list of featured collections', async () => {
      const featuredCollections = await fetchFeaturedCollections()
      featuredCollections.map(col => expect(col.featured).toBeTruthy())
    })
  })
  describe('fetchCollection()', () => {
    it('should be defined', () => {
      expect(fetchCollection).toBeDefined()
    })
    it('should be able to fetch a specific collection by id', async () => {
      const collections = await fetchCollections()
      const id = collections[0].id
      const collection = await fetchCollection({ id })
      expect(collection.id).toEqual(id)
    })
    it('should throw error if no id parameter is passed', async () => {
      await fetchCollection().catch(e => expect(e).toBeDefined())
    })
  })
  describe('fetchCollectionImages()', () => {
    it('should be defined', () => {
      expect(fetchCollectionImages).toBeDefined()
    })
    it('should fetch images from a specific collection', async () => {
      const collections = await fetchCollections()
      const collection = collections[0]
      const images = await fetchCollectionImages({ id: collection.id })
      expect(images[0]).toHaveProperty('id')
    })
    it('should throw error if no id parameter is passed', async () => {
      await fetchCollectionImages().catch(e => expect(e).toBeDefined())
    })
    it('fake test to se if regular promises work with travis', async () => {
      const promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve('foo')
        }, 300)
      })
      const res = await promise1
      expect(res).toEqual('foo')
    })
  })
})
