<template>
    <div class="header">
        <div class="header-left">
          <div class="iconfont back-icon" >&#xe659;</div>
        </div>
        <div class="header-input">
          <span class="iconfont search">&#xe63c;</span>
          <span>输入地点 | 城市 | 主题</span>
          </div>
        <div class="header-right">
          <span class="iconfont">&#xe65a;</span>
           <router-link to="/city">
             <span class="city">{{this.$store.state.city}}</span>
           </router-link>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: ['city']
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.header
  display: flex
  line-height: 0.86rem
  background: $bgColor
  color:#fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      // color:red
      font-size:.55rem
      text-align:center
  .header-input
    flex: 1
    background:#fff
    border-radius:.1rem
    height: .64rem
    line-height :.64rem
    margin-top:.12rem
    margin-left:.2rem
    color:#ccc
    .search
      margin:0 0.2rem
  .header-right
    width:1.24rem
    float:right
    text-align:center
    .city
      color: #fff
</style>
