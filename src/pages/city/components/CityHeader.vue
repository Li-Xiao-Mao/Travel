<template>
    <div>
        <div class="city">
            城市选择
            <router-link to="/">
                <div class="city-left iconfont iconjiantou2"></div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .city
        position: relative
        line-height: $headerHeight
        background-color: $bgColor
        text-align: center
        color: #fff
        .city-left
            position: absolute
            left: 0
            top: 0
            color: #fff
            font-size: .6rem
</style>
