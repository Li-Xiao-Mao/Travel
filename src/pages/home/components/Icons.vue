<template>
    <div class="icons">

        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="img-box" :src="item.url" alt="">
                    </div>
                    <p class="title">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    IconList: Array
  },
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.IconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .icons
        height: 0
        padding-bottom: 50%
        padding-top: .1rem
        .icon
            box-sizing: border-box
            width: 25%
            height: 0
            float: left
            padding-bottom: 25%
            text-align: center
            background-color: #fff
            .icon-img
                padding: .1rem
                .img-box
                    width: 70%
            .title
                margin-top: .1rem
                color: $darkTextColor
                font-size: .20rem
                ellipsis()
</style>
