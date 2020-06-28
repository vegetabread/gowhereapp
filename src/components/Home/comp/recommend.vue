<template>
    <div class="title">
        热门推荐
        <ul>
            <router-link tag="li" class="item border-bottom" v-for="item in recommendList" :key="item.id" :to="'/detail/'+item.id">
                    <img :src="item.imgUrl" alt="" class="item-img">
                    <div class="item-info">
                        <p class="one">{{item.title}}</p>
                        <p class="two">{{item.desc}}</p>
                        <button class="item-button">查看详情</button>
                    </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  props: {
    recommendList: Array
  }
}
</script>
<style lang="stylus" scoped>
.title
    line-height :.8rem
    background-color:#eee
    text-indent :.2rem
    .item
        display:flex
        height:1.9rem
        overflow:hidden
        background:#fff
        .item-img
            height :1.7rem
            width: 1.7rem
            padding: .1rem
        .item-info
            flex:1
            padding-top: .1rem
            .one
              line-height :.54rem
              font-size:.32rem
            .two
                line-height :.4rem
                color:#ccc
            button
                background:#ff9300
                padding:0 .1rem
                border-radius:.06rem
                margin-left:.2rem
                font-weight :bold
                color:#fff
</style>
