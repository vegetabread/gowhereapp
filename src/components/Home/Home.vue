<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :iconList="iconList"></home-icon>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
        </div>
</template>
<script>
import HomeHeader from './comp/header'
import HomeSwiper from './comp/Swiper'
import HomeIcon from './comp/icons'
import HomeRecommend from './comp/recommend'
import HomeWeekend from './comp/weekend'
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  data: function () {
    return {
      lastcity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  created: function () {
    axios.get('api/index?city=' + this.city).then((res) => {
      const main = res.data.data
      this.lastcity = main.city
      this.swiperList = main.swiperList
      this.iconList = main.iconList
      this.recommendList = main.recommendList
      this.weekendList = main.weekendList
    })
  }
}

</script>
<style lang="stylus" scoped>

</style>
