<template>
    <div>
        <div class="title">猜你喜欢</div>
        <ul>
            <router-link tag="li" class="row border-bottom" v-for="item of RecommendList" :key="item.id" :to="'/detail/'+item.id">
                <img class="item-img" :src="item.url" alt="">
                <div class="title-cont">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-text">描述</p>
                </div>
                <span class="address">{{item.address}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    RecommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .6rem
        padding-left: .2rem
        background-color: #eee
    .row
        position: relative
        display: flex
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .title-cont
            flex: 1
            padding-left: .2rem
            min-width: 0
            .item-title
                line-height: .65rem
                color: #333
                ellipsis()
            .item-text
                font-size: .21rem
                color: #888
                ellipse()
        .address
            position: absolute;
            right: .2rem
            bottom: .2rem
            font-size: .22rem
            color: #888
</style>
