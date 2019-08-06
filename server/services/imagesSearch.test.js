import { imagesSearch } from './imagesSearch.service'

describe('ImageRandom.service', () => {
  it('should be defined', () => {
    expect(imagesSearch).toBeDefined()
  })

  it('should be able to fetch default set of images for given keyword', async () => {
    expect.assertions(1)
    const images = await imagesSearch({ keyword: 'dogs' })
    expect(images.results.length).toEqual(10)
  })

  it('should be able to set size of search result', async () => {
    expect.assertions(1)
    const images = await imagesSearch({ keyword: 'dogs', perPage: 5 })
    expect(images.results.length).toEqual(5)
  })

  it('should be able to fetch multiple pages', async () => {
    expect.assertions(1)
    const imagesFirstPage = await imagesSearch({
      keyword: 'dogs',
      page: 1,
      perPage: 10
    })
    const imagesSecondPage = await imagesSearch({
      keyword: 'dogs',
      page: 2,
      perPage: 10
    })
    expect(imagesFirstPage.results[0].id).not.toMatch(
      imagesSecondPage.results[0].id
    )
  })

  it('should return empty search result when no keyword is passed', async () => {
    expect.assertions(1)
    const images = await imagesSearch({ keyword: '' })
    expect(images.results.length).toEqual(0)
  })
})
