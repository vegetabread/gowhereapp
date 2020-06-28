<template>
    <div class="title">
        <span>周末去哪</span>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                    <div class="item-img-w">
                         <img :src="item.imgUrl" alt="" class="item-img">
                    </div>
                    <p class="one">{{item.title}}</p>
                    <p class="two">{{item.desc}}</p>
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
    .item
        background:#fff
        .item-img-w
            overflow:hidden
            height : 0
            padding-bottom:30.9%
            .item-img
                width:100%
                text-indent: 0rem
        .one
            line-height :.54rem
            font-size:.32rem
        .two
            line-height :.4rem
            color:#ccc
</style>
