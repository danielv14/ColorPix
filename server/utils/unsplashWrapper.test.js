import unsplashWrapper from './unsplashWrapper'

describe('UnsplashWrapper', () => {
  it('should be defined', () => {
    expect(unsplashWrapper).toBeDefined()
  })

  it('should contain expected properties inside the wrapper', () => {
    expect(unsplashWrapper).toHaveProperty('unsplash')
    expect(unsplashWrapper).toHaveProperty('toJson')
  })

  it('should contain a properly instance of unsplash with application id and secret', () => {
    const { unsplash } = unsplashWrapper
    expect(unsplash).toHaveProperty('_applicationId')
    expect(unsplash).toHaveProperty('_secret')
  })
})
