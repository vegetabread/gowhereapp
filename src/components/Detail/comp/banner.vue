<template>
    <div class="banner" @click="showup">
        <div>
        <img :src="bannerImg" alt="" class="banner-img">
        <div class="banner-info">
            <div class="banner-title">{{sightName}}</div>
            <div class="banner-number">{{gallaryImgs.length}}</div>
        </div>
        </div>
        <div v-show="show">
          <swiper-com @close='close' :gallaryImgs='gallaryImgs' ></swiper-com>
        </div>
    </div>
</template>
<script>
import SwiperCom from '../../../../common/gallery/swiper'
export default {
  props: ['sightName', 'bannerImg', 'gallaryImgs'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    showup () {
      this.show = true
    },
    close () {
      this.show = false
      console.log('guanbi')
      console.log(this.show)
    }
  },
  components: {
    SwiperCom
  }
}
</script>
<style lang="stylus" scoped>
.banner
    overflow: hidden
    position: relative
    height :0
    padding-bottom:55%
    .banner-img
        width: 100%
    .banner-info
        display:flex
        position:absolute
        left:0
        right:0
        bottom:0
        line-height:.6rem
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
        .banner-title
            flex:1
            color:#fff
            margin-left: .4rem
        .banner-number
            padding:0 .4rem
            height: .4rem
            line-height :.4rem
            border-radius: .2rem
            color:#fff
            background:rgba(0, 0, 0, .8)
</style>
