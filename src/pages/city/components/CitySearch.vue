<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名称或拼音" v-model="keyword">
        <div class="search-list" ref="Search" v-show="keyword">
            <div>
                <div class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</div>
                <div class="search-item border-bottom" v-show="handleList">
                    没有找到相关数据
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    hotCities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    handleList () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.Search)
  },
  watch: {
    keyword () {
      if (this.time) {
        clearTimeout(this.timer)
      }
      // 未知
      // if (!this.keyword) {
      //   this.list = []
      //   return
      // }
      this.timer = setInterval(() => {
        const result = []
        for (let i in this.hotCities) {
          this.hotCities[i].forEach((value) => {
            if (value.name.indexOf(this.keyword) > -1 || value.spell.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        background-color: $bgColor
        padding: 0 .1rem
        text-align: center
        .search-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            line-height: .62rem
            padding: 0 .1rem
            border-radius: .06rem
            color: #666
            text-align: center
            font-size: .12rem
    .search-list
        overflow: hidden
        position: absolute;
        left: 0;
        top: 1.58rem
        right: 0
        bottom: 0
        z-index: 1
        background-color: #ccc
        .search-item
            line-height: .64rem
            padding-left: .2rem
            background-color: #fff
            text-align: left
</style>
