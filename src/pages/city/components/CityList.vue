<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of cities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item, key) of hotCities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <ul v-for="itemInfo of item" :key="itemInfo.id">
                    <li class="item border-bottom">{{itemInfo.name}}</li>
                </ul>
        </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Array,
    hotCities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:after
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        left: 0
        top: 1.58rem
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background-color: #eee
            padding-left: .2rem
            font-size: .12rem
            color: #666
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                width: 33.33%
                float: left
                .button
                    text-align: center
                    margin: .1rem
                    padding: .1rem 0
                    border-radius: .06rem
                    border: .02rem solid #ccc
        .item
            line-height: .76rem
            padding-left: .2rem
            color: #666
</style>
