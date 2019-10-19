<template>
    <div class="header">
        <router-link tag="div" :to="'/'" class="header-abs" v-show="showAbs">
            <span class="iconfont iconjiantou2 header-abs-back"></span>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link tag="div" :to="'/'" class="header-fixed-back">
                <span class="iconfont iconjiantou2 header-abs-left"></span>
            </router-link>
            <div class="header-fixed-title">{{sightName}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    sightName: String
  },
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    border-radius: .8rem
    background-color: rgba(0,0,0,.8)
    .header-abs-back
        color: #fff
        font-size: .6rem
.header-fixed
    display: flex
    z-index: 2
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: $headerHeight
    line-height: $headerHeight
    background-color: $bgColor
    color: #fff
    .header-fixed-back
        width: .64rem
        .header-abs-left
            text-align: center
            font-size: .6rem
    .header-fixed-title
        flex: 1
        padding-right: .2rem
        text-align: center
        font-size: .32rem
        ellipsis()
</style>
