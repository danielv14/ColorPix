import ImagePalette from './ImagePalette'
import rawImage from './testdata/image.json'

const imagePalette = new ImagePalette(rawImage)

describe('ImagePalette class', () => {
  it('should be defined', () => {
    expect(ImagePalette).toBeDefined()
  })

  it('should properly have extended Image', () => {
    const inheritedMethods = ['getImageFull', 'getUserInfo', 'getImageThumb']
    inheritedMethods.map(method => expect(imagePalette[method]).toBeDefined())
  })

  it('should get dominant colors from an image', () => {
    setTimeout(async () => {
      const colors = await imagePalette.getDominantColors()
      expect(colors.length).toBeGreaterThan(0)
    })
  })

  it('should get dominant colors in hex format', () => {
    setTimeout(async () => {
      const colors = await imagePalette.getDominantColors()
      expect(colors[0].includes('#')).toBeTruthy()
    })
  })

  it('should get dominant colors as Chroma instances', () => {
    setTimeout(async () => {
      const colors = await imagePalette.getChromaColors()
      const color = colors[0]
      // Test that colors has inherited chroma prototype
      expect(color.hex).toBeDefined()
      expect(color.rgb).toBeDefined()
      expect(color.saturate).toBeDefined()
    })
  })
})
