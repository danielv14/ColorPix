import dataImageList from '../utils/mockdata/ImageListResponse'
import dataCollectionsList from '../utils/mockdata/collectionsResponse'
import { mockDataImageList, mockDataCollectionsList } from './mockData.service'

describe('mockData.service', () => {
  describe('mockDataImageList()', () => {
    it('should be defined', () => {
      expect(mockDataImageList).toBeDefined()
    })
    it('should retrieve mockdata properly', () => {
      const data = mockDataImageList()
      expect(data.length).toEqual(dataImageList.length)
    })
  })
  describe('mockDataCollectionsList()', () => {
    it('should be defined', () => {
      expect(mockDataCollectionsList).toBeDefined()
    })
    it('should retrive mockdata properly', () => {
      const data = mockDataCollectionsList()
      expect(data.length).toEqual(dataCollectionsList.length)
      expect(data[0].id).toEqual(dataCollectionsList[0].id)
      expect(data[0].images.length).toEqual(
        dataCollectionsList[0].images.length
      )
    })
    it('should be able to retrive mockdata without images', () => {
      let data = mockDataCollectionsList({ includeImages: false })
      data.map(col => expect(col).toHaveProperty('images', []))
      data = mockDataCollectionsList({ includeImages: undefined })
      data.map(col => expect(col).toHaveProperty('images', []))
    })
  })
})
