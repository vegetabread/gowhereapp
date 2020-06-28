<template>
   <div>
       <div class="input">
       <input class="search-input" v-model="searchinfo" placeholder="请输入城市名或拼音">
       </div>
       <div class="search-content" v-show="searchinfo" ref="search">
           <ul>
               <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleclick(item.name)">{{item.name}}</li>
               <li class="search-item border-bottom" v-show="ifshow">没有找到匹配数据</li>
           </ul>
       </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  props: {
    cities: Object
  },
  data: function () {
    return {
      searchinfo: '',
      list: [],
      timer: null,
      ifshow: true
    }
  },
  watch: {
    searchinfo: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.searchinfo) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((val) => {
            if (val.spell.indexOf(this.searchinfo) > -1 || val.name.indexOf(this.searchinfo) > -1) {
              result.push(val)
            }
            this.list = result
            this.ifshow = false
          })
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleclick: function (val) {
      this.$store.dispatch('changeCity', val)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.input
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
        box-sizing :border-box
        width: 100%
        height: .62rem
        padding: 0 .1rem
        line-height :.62rem
        border-radius:.1rem
        text-align :center
        color:#666
.search-content
    z-index :1
    overflow:hidden
    width:100%
    position:absolute
    top:1.54rem
    left:0
    right:0
    bottom:0
    background: #eee
    .search-item
      line-height :.62rem
      padding-left:.2rem
      color:#666
      background:#fff

</style>
