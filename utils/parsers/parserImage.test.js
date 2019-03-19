import data from '../testdata/image'
import parserImage from './parserImage'

describe('parserImage', () => {
  it('should be defined', () => {
    expect(parserImage).toBeDefined()
  })

  it('should properly parse images', () => {
    const image = parserImage(data)
    expect(image.id).toEqual(data.id)
  })

  it('should have returned image as ImagePalette class', () => {
    const image = parserImage(data)
    const methods = ['getDominantColors', 'getChromaColors']
    methods.map(method => expect(image[method]).toBeDefined())
  })
})
