<template>
    <div >
        <div class="title">周末去哪</div>
        <ul>
            <li v-for="item in weekendList" :key="item.id">
                    <div class="item-img-w">
                         <img :src="item.imgUrl" alt="" class="item-img">
                    </div>
                    <div class="main">
                        <p class="one">{{item.title}}</p>
                        <p class="two">{{item.desc}}</p>
                    </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
.title
    line-height :.8rem
    background-color:#eee
    text-indent :.2rem
    .item-img-w
        overflow:hidden
        height : 0
        padding-bottom:37.09%
        .item-img
            height 100%
.main
    padding .1rem
    .one
        line-height :.54rem
        font-size:.32rem
    .two
        line-height :.4rem
        color:#ccc
</style>
