import data from '../testdata/images'
import dataList from '../testdata/imageList'
import parserImages from './parserImages'

describe('parserImages', () => {
  it('should be defined ', () => {
    expect(parserImages).toBeDefined()
  })

  it('should properly parse images', () => {
    const images = parserImages(data)
    expect(images.length).toEqual(data.results.length)
    expect(images[0].id).toEqual(data.results[0].id)
  })

  it('should have returned images as ImagePalette class', () => {
    const methods = ['getDominantColors', 'getChromaColors']
    const images = parserImages(data)
    const image = images[0]
    methods.map(method => expect(image[method]).toBeDefined())
  })

  it('should handle parsing an array response format', () => {
    const images = parserImages(dataList)
    const image = images[0]
    expect(images.length).toEqual(dataList.length)
    expect(image.id).toEqual(dataList[0].id)
  })
})
