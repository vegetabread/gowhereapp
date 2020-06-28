<template>
    <div class="list" ref="wrapper">
    <div >
        <div class="area">
            <div class="title border-topbottom">当前城市</div>
            <div class="button-list">
                <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                </div>
            </div>
        </div>
        <div class="area">
             <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div class="button-wrapper" v-for="item in hotCities" :key="item.id" >
                    <div class="button" @click="handleclick(item.name)" >{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area" v-for="(item,key) in cities" :key="item.id" :ref="key">
            <div class="title border-topbottom" >{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="one in item" :key="one.id" @click="handleclick(one.name)">{{one.name}}</div>
                </div>
        </div>
    </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: ['hotCities', 'cities', 'clicked'],
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  methods: {
    handleclick: function (val) {
      this.$store.dispatch('changeCity', val)
      this.$router.push('/')
    }
  },
  watch: {
    clicked: function () {
      if (this.clicked) {
        const element = this.$refs[this.clicked][0]
        this.scroll.scrollToElement(element)
      }
      console.log('the transfer ', this.clicked)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.list
    position:absolute
    width: 100%
    top:1.55rem
    left:0
    bottom :0
    // background:red
    overflow:hidden
    .title
        line-height :.44rem
        background: #eee
        padding-left:.2rem
        color: #666
        font-size:.26rem
    .button-list
        overflow:hidden
        padding:.1rem .6rem .1rem .1rem
        .button-wrapper
            width:33.33%
            float:left
            .button
                text-align :center
                margin:.1rem
                border:.02rem solid #ccc
                padding: .1rem 0
                border-radius:.06rem
    .item-list
        .item
            color:#666
            line-height :.76rem
            padding-left: .2rem

</style>
