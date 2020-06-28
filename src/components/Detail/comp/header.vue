<template>
    <div class="header" v-show="show">
        <router-link to="/">
        <div class="iconfont header-abs" >&#xe659;</div>
        </router-link>
        <div class="header-fixed" v-show="!show">
            <router-link to="/">
            <div class="iconfont back">&#xe659;</div>
            </router-link>
            <div class="title">商品详情</div>
        </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    handlescroll () {
      let top = document.documentElement.scrollTop
      if (top > 200) {
        // this.show = false 蜜汁问题
        console.log(this.show)
      } else {
        this.show = true
      }
    //   console.log(document.documentElement.scrollTop)
    },
    text () {
      this.show = !this.show
      console.log(this.show)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handlescroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.header-abs
    position:absolute
    top: .2rem
    left: .1rem
    background: #ccc
    font-size:.5rem
    padding: 0 .1rem
    color:#000
    border-radius: .1rem
.header-fixed
    position:fixed
    width :100%
    line-height:.86rem
    top:0
    text-align:center
    background: $bgColor
    color:#fff
    z-index :99
    .back
      position:absolute
      top:0
      left:.2rem
      font-size:.4rem
      color:#fff
.content
    height:50rem
</style>
