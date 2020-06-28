<template>
    <div >
    <detail-banner :sightName='sightName' :gallaryImgs='gallaryImgs' :bannerImg='bannerImg'  ></detail-banner>
    <detail-header></detail-header>
    <detail-list v-show="showif" :categoryList='categoryList'></detail-list>
    </div>
</template>
<script>
import DetailBanner from './comp/banner'
import DetailHeader from './comp/header'
import DetailList from './comp/list'
import axios from 'axios'
export default {
  data: function () {
    return {
      showif: true,
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted () {
    axios.get('/api/detail', {
      params: {
        id: this.$route.params.id
      }
    }).then((res) => {
      const data = res.data.data
      this.sightName = data.sightName
      this.bannerImg = data.bannerImg
      this.gallaryImgs = data.gallaryImgs
      this.categoryList = data.categoryList
    })
  }
}
</script>
<style lang="stylus" scoped>

</style>
