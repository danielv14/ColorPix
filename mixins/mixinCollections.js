/**
 * Mixin with methods and computed properties to be shared for collections functionality
 */
export default {
  methods: {
    /**
     * Get collections by keyword
     * @param {Object} param0
     * @param {String} param0.keyword to search by
     * @param {Number} [param0.page=1] to get
     * @param {Number} param0.perPage amount of collections to fetch per page
     */
    async getCollectionsByKeyword({ keyword, page = 1, perPage }) {
      const { data } = await this.$api.getCollectionsByKeyword({
        keyword,
        page,
        perPage
      })
      return { collections: data.results, total: data.total }
    },
    /**
     * Get collections
     * @param {Object} param0
     * @param {Number} [param0.page=1] to get
     * @param {Number} [param0.perPage=3] amount of collections to fetch per page
     * @param {Number} param0.imageCount Amount of actual (non preview) images to attach to the collections
     */
    async getCollections({ page = 1, perPage = 3, imageCount }) {
      const { data } = await this.$api.getCollections({
        page,
        perPage,
        imageCount
      })
      return data
    }
  },
  computed: {
    hasCollections() {
      return this.collections.length > 0
    }
  }
}
