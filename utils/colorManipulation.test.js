import {
  availableTypes,
  getManipulationFromTypeAndThreshold,
  chromaFromHex,
  getChangedHexValues
} from './colorManipulation'
describe('colorManipulation utils', () => {
  describe('availableTypes()', () => {
    it('should return available types', () => {
      expect(availableTypes().length).toBeGreaterThan(1)
    })
  })

  describe('getManipulationFromTypeAndThreshold', () => {
    it('should return empty string of not finding any matching type', () => {
      expect(
        !getManipulationFromTypeAndThreshold({ type: 'false' })
      ).toBeTruthy()
    })

    it('should return different types for different threshold', () => {
      const type1 = getManipulationFromTypeAndThreshold({
        type: 'saturation',
        threshold: 1
      })
      const type2 = getManipulationFromTypeAndThreshold({
        type: 'saturation',
        threshold: -1
      })
      expect(type1).not.toMatch(type2)
    })
  })

  describe('chromaFromHex()', () => {
    it('should return a chroma object from a given hex value', () => {
      const chromaObject = chromaFromHex('#eee')
      expect(chromaObject).toBeDefined()
      expect(chromaObject).toHaveProperty(
        getManipulationFromTypeAndThreshold({
          type: 'saturation',
          threshold: -1
        })
      )
    })
  })

  describe('GetChangedHexValues', () => {
    it('should build new hex value array for a given manipulations criteria', () => {
      const manipulations = [{ type: 'saturate', level: 2 }]
      const originalHexValues = ['#eee', '#ee2', '#eee', '#ee2', '#eee', '#ee2']
      const chromaObjects = originalHexValues.map(hex => chromaFromHex(hex))
      const changedHexValues = getChangedHexValues({
        chromaColors: chromaObjects,
        manipulations
      })
      originalHexValues.map((hex, index) =>
        expect(hex).not.toMatch(changedHexValues[index])
      )
    })
  })
})
