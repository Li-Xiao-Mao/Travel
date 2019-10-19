<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont iconjiantou2 iconfont-left"></div>
        </div>
        <div class="header-input">
            <i class="iconfont iconfangdajing"></i>
            输入城市或景点
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{city}}
                <i class="iconfont iconjiantouarrow486"></i>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: $headerHeight
        background-color: $bgColor
        color: #fff
        .header-left
            width: .64rem
            .iconfont-left
                text-align: center
                font-size: .6rem
        .header-input
            flex: 1
            color: #ccc
            height: .64rem
            padding-left: .1rem
            line-height: .64rem
            background-color: #fff
            border-radius: .1rem
            margin-top: .12rem
            margin-left: .2rem
        .header-right
            width: 1.24rem
            color: #fff
            text-align: center
</style>
