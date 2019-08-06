import { fetchImageList } from './imageList.service'

describe('imageList.service', () => {
  it('should be defined', () => {
    expect(fetchImageList).toBeDefined()
  })

  it('should be able to retrieve a list of the latest images', () => {
    setTimeout(async () => {
      const images = await fetchImageList()
      expect(images.length).toBeGreaterThan(1)
      expect(images[0]).toHaveProperty('id')
    })
  })

  it('should be able to set size of image list to retrieve', () => {
    setTimeout(async () => {
      const images = await fetchImageList({ perPage: 5 })
      expect(images.length).toBe(5)
    })
  })

  it('should be able to retrieve different pages', () => {
    setTimeout(async () => {
      const imagesFirstPage = await fetchImageList({ page: 1 })
      const imagesSecondPage = await fetchImageList({ page: 2 })
      expect(imagesFirstPage[0].id).not.toEqual(imagesSecondPage[0].id)
    })
  })

  it('shoulb be able to set sort order', () => {
    setTimeout(async () => {
      const imagesLatest = await fetchImageList({ orderBy: 'latest' })
      const imagesPopular = await fetchImageList({ orderBy: 'popular' })
      const latestIds = imagesLatest.map(image => image.id)
      const popularIds = imagesPopular.map(image => image.id)
      // Lists can sometimes contain the same image. Determine different ids by cross reference the id lists
      const overlapIds = latestIds.map(id => popularIds.includes(id))
      expect(
        overlapIds.filter(overlap => overlap).length < latestIds.length
      ).toBe(true)
    })
  })
})
