<template>
    <div class="main" @click="showoff">
        <div class="iconfont backto">&#xe659;</div>
        <div class="swiper">
        <swiper  :options="swiperOptions">
            <swiper-slide v-for="(item,index) in gallaryImgs" :key='index' >
                <img class="banner-img" :src="item" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>
<script>
export default {
  props: ['gallaryImgs'],
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    showoff () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.main >>> .swiper-container
    overflow:inherit
.main
    .backto
        position:absolute
        top:.2rem
        left:.2rem
        width: .6rem
        // height: .6rem
        line-height :.6rem
        font-size: .44rem
        background: #666
        text-align:center
        color:#fff
    position:fixed
    display: flex
    flex-direction:column
    justify-content:center
    left: 0
    right: 0
    top: 0
    bottom: 0
    background:#000
    z-index:99
    .swiper
        width:100%
        height :0
        padding-bottom:100%
        .banner-img
           width:100%
        .swiper-pagination
            color: #fff
            bottom: -1rem
</style>
