import Image from './Image'
import rawImage from './testdata/image.json'

// Create new image to test
const image = new Image(rawImage)

describe('Image class', () => {
  it('should be defined', () => {
    expect(Image).toBeDefined()
  })

  it('should properly create an image from input', () => {
    expect(image).toHaveProperty('id', rawImage.id)
    expect(image).toHaveProperty('description', rawImage.description)
  })

  describe('Class methods', () => {
    describe('GetImageRaw()', () => {
      it('should be defined', () => {
        expect(image.getImageRaw).toBeDefined()
      })

      it('should return raw image url', () => {
        expect(image.getImageRaw()).toEqual(rawImage.urls.raw)
      })
    })
    describe('getImageFull()', () => {
      it('should be defined', () => {
        expect(image.getImageFull).toBeDefined()
      })
      it('should return full image url', () => {
        expect(image.getImageFull()).toEqual(rawImage.urls.full)
      })
    })
    describe('getImageRegular()', () => {
      it('should be defined', () => {
        expect(image.getImageRegular).toBeDefined()
      })
      it('should return full image url', () => {
        expect(image.getImageRegular()).toEqual(rawImage.urls.regular)
      })
    })
    describe('getImageSmall()', () => {
      it('should be defined', () => {
        expect(image.getImageSmall).toBeDefined()
      })
      it('should return full image url', () => {
        expect(image.getImageSmall()).toEqual(rawImage.urls.small)
      })
    })
    describe('getImageThumb()', () => {
      it('should be defined', () => {
        expect(image.getImageThumb).toBeDefined()
      })
      it('should return full image url', () => {
        expect(image.getImageThumb()).toEqual(rawImage.urls.thumb)
      })
    })
    describe('getUserInfo', () => {
      it('should be defined', () => {
        expect(image.getUserInfo).toBeDefined()
      })
      it('should get user info from image', () => {
        const { id, username } = image.getUserInfo()
        expect(id).toEqual(rawImage.user.id)
        expect(username).toEqual(rawImage.user.username)
      })
    })
    describe('getUserNameFormatted()', () => {
      it('should be defined', () => {
        expect(image.getUserNameFormatted).toBeDefined()
      })
      it('should get a users first and last name', () => {
        expect(image.getUserNameFormatted()).toEqual(
          `${rawImage.user.first_name} ${rawImage.user.last_name}`
        )
      })
    })
  })
})
