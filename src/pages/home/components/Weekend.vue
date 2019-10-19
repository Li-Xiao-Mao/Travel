<template>
    <div>
        <div class="weekend">周末去哪儿玩</div>
        <ul>
            <li class="row" v-for="item of WeekendList" :key="item.ind">
                <div class="item-img">
                    <img class="img" :src="item.url" alt="">
                </div>
                <div class="item-cont">
                    <p class="title">{{item.title}}</p>
                    <p class="text">{{item.text}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    WeekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
    .weekend
        line-height: .6rem
        background-color: #eee
        padding-left: .2rem
    .row
        background-color: #eee
        .item-img
            overflow: hidden;
            width: 100%;
            height: 0;
            padding-bottom: 37%
            .img
                width: 100%
        .item-cont
            margin-top: .1rem
            padding: .14rem .2rem .2rem .2rem
            background-color: #fff
            .title
                line-height: .65rem
                color: #333
            .text
                font-size: .24rem
                color: #888
                line-height: .42rem
</style>
