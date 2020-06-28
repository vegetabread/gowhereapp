<template>
    <div class="header">
        城市选择
        <router-link to="/">
        <div class="iconfont city-back" >&#xe659;</div>
        </router-link>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.header
    position :relative
    height:.86rem
    overflow :hidden
    line-height :.86rem
    text-align :center
    background-color:$bgColor
    color: #ffffff
    .city-back
        position :absolute
        top: 0
        left: 0
        width :.64rem
        color:#fff
        font-size:.55rem
</style>
