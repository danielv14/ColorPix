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
    it('should attach image previews to the collections if using imageCount param', async () => {
      const collections = await fetchCollections({ perPage: 5, imageCount: 3 })
      const images = collections[0].images
      images.map(image =>
        expect(image.collection_id).toEqual(collections[0].id)
      )
    })
    it('should be able to fetch collections without preview images', async () => {
      const collections = await fetchCollections({ perPage: 5 })
      collections.map(col => expect(col).toHaveProperty('images', []))
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
    it('should attach image previews to the collections if using the imageCount param', async () => {
      const collections = await fetchFeaturedCollections({
        perPage: 5,
        imageCount: 3
      })
      const images = collections[0].images
      images.map(image =>
        expect(image.collection_id).toEqual(collections[0].id)
      )
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
    it('should not attach image previews', async () => {
      const collections = await fetchCollections()
      const id = collections[0].id
      const collection = await fetchCollection({ id })
      expect(collection).not.toHaveProperty('images')
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
  })
})
