import Collection from './Collection'
import rawCollections from './testdata/collectionsWithImages.json'
import ImagePalette from './ImagePalette'

const rawCollection = rawCollections[0]
// Create new collection instance to test
const collection = new Collection(rawCollection)

describe('Collection class', () => {
  it('should be defined', () => {
    expect(Collection).toBeDefined()
  })
  it('should properly create a collection from input', () => {
    expect(collection).toHaveProperty('id', rawCollection.id)
    expect(collection).toHaveProperty('title', rawCollection.title)
    expect(collection).toHaveProperty(
      'total_photos',
      rawCollection.total_photos
    )
    expect(collection).toHaveProperty('images')
  })
  it('should have converted attached preview images to ImagePalette instances', () => {
    const images = collection.images
    images.map(img => expect(img instanceof ImagePalette).toBeTruthy())
  })
  it('should create empty images array of preview images is omitted', () => {
    const collectionWithoutImages = new Collection({ id: '1' })
    expect(collectionWithoutImages).toHaveProperty('images', [])
  })
  describe('Class methods', () => {
    describe('getTags()', () => {
      it('should return tags', () => {
        const tags = collection.getTags()
        expect(tags.length).toEqual(rawCollection.tags.length)
        expect(tags[0]).toEqual(rawCollection.tags[0].title)
      })
    })
    describe('getUserInfo()', () => {
      it('should get user info object', () => {
        const user = collection.getUserInfo()
        expect(user.id).toEqual(rawCollection.user.id)
        expect(user.username).toEqual(rawCollection.user.username)
      })
    })
    describe('getPreviewImages()', () => {
      it('should get preview images attached to the collection', () => {
        const images = collection.getPreviewImages()
        expect(images[0].id).toEqual(rawCollection.preview_photos[0].id)
        expect(images.length).toEqual(rawCollection.preview_photos.length)
      })
      it('should get preview images by a specific amount', () => {
        const images = collection.getPreviewImages(2)
        expect(images[0].id).toEqual(rawCollection.preview_photos[0].id)
        expect(images.length).toEqual(2)
      })
    })
    describe('getImages()', () => {
      it('should get preview images attached to the collection', () => {
        const images = collection.getImages()
        expect(images[0].id).toEqual(rawCollection.images[0].id)
        expect(images.length).toEqual(rawCollection.images.length)
      })
      it('should get preview images by a specific amount', () => {
        const images = collection.getImages(2)
        expect(images[0].id).toEqual(rawCollection.images[0].id)
        expect(images.length).toEqual(2)
      })
    })
  })
})
