import { fetchRandomImage } from './imageRandom.service'

describe('ImageRandom.service', () => {
  it('should be defined', () => {
    expect(fetchRandomImage).toBeDefined()
  })

  it('should be able to retrieve a random image', async () => {
    expect.assertions(3)
    const image = await fetchRandomImage()
    const imageSecond = await fetchRandomImage()
    expect(image.id).toBeDefined()
    expect(image.description).toBeDefined()
    expect(image.id).not.toMatch(imageSecond.id)
  })
})
