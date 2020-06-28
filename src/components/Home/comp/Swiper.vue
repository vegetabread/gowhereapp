<template>
    <div class="swiper">
        <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>
<script>
export default {
  props: {
    swiperList: Array
  },
  name: 'aaa',
  data: function () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          loop: true
        },
        // autoplay: true,
        speed: 200
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper
  overflow:hidden
  width:100%
  height:0
  padding-bottom:31.25%
  .swiper-img
    width: 100%
</style>
