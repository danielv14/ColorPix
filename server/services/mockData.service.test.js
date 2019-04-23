import dataImageList from '../utils/mockdata/ImageListResponse'
import { mockDataImageList } from './mockData.service'

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
})
