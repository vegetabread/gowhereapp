<template>
    <div class="alf">
        <ul>
            <li class="item" v-for="(item,key,index) in cities"
            @click="handle" @touchstart="handletouchs" @touchmove="handletouchm" @touchend="handletouche"
            :key='index'>{{key}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['cities'],
  methods: {
    data () {
      return {
        touchStatus: false
      }
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    handle (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchs () {
      this.touchStatus = true
    },
    handletouchm () {
      if (this.touchStatus) {

      }
    },
    handletouche () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../../public/styles/varibles.styl'
.alf
    display:flex
    flex-direction :column
    justify-content:center
    position:absolute
    top:1.58rem
    right:0
    width:.4rem
    bottom:0
    .item
        text-align :center
        line-height:.4rem
        color:$bgColor
        font-size:.22rem
</style>
