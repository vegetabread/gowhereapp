<template>
    <div class="icons">
         <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide v-for="(page,index) in pages" :key="index">
                    <div class="icon" v-for="item in page" :key="item.id">
                        <div class="icon-img">
                            <img :src="item.imgUrl" alt="">
                            <p>{{item.desc}}</p>
                        </div>
                    </div>
                </swiper-slide>
  </swiper>
    </div>
</template>
<script>
export default {
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
.icons>>>.swiper-container
    height:0
    padding-bottom: 50%
.icon
    position:relative
    float:left
    width:25%
    height :0
    padding-bottom:25%
    .icon-img
        position:absolute
        top:.2rem
        left:0
        bottom:.44rem
        margin-left:.2rem
        img
          display:block
          margin: 0 auto
          height :80%
        p
          text-align:center
</style>
