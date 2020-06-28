<template>
    <div class="main">
        <div v-for="(item,index) in categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="iconfont item-title-icon">&#xe63b;</span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-chirdren">
              <detail-hist :categoryList="item.children"></detail-hist>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'DetailHist',
  props: ['categoryList'],
  data: function () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
.item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
.item-chirdren
    padding-left: .4rem
</style>
