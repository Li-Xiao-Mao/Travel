<template>
    <div>
        <div class="banner" @click="handleShow">
            <img class="banner-img"  :src="headerImg" alt="">
            <div class="banner-cont">
                <div class="title">
                    <div class="banner-title">
                        {{sightName}}
                    </div>
                    <div class="banner-number">
                        <span class="iconfont icontupian"></span> 39
                    </div>
                </div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :imgs="gallaryImg" v-show="bannerShow" @clos="handleGallaryHide"></common-gallary>
        </fade-animation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'Banner',
  props: {
    headerImg: String,
    sightName: String,
    gallaryImg: Array
  },
  data () {
    return {
      bannerShow: false
    }
  },
  methods: {
    handleShow () {
      this.bannerShow = true
    },
    handleGallaryHide () {
      this.bannerShow = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
        width: 100%
    .banner-cont
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        .title
            overflow: hidden
            display: flex
            height: .6rem
            line-height: .6rem
            background-image: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.8))
            .banner-title
                flex: 1
                padding-right: .2rem
                padding-left: .2rem
                color: #fff
                font-size: .32rem
                ellipsis()
            .banner-number
                padding: 0 .4rem
                color: #fff
</style>
