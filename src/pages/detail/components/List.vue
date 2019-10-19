<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="detail-list border-bottom">
                <span class="detail-list-icon iconfont iconhuo"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <detail-list :list="item.children"></detail-list>
            </div>
            <div v-if="item.childrens" class="item-childrens">
                <detail-list :list="item.childrens"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.detail-list
    line-height: .88rem
    padding: 0 .2rem
    font-size: .32rem
    .detail-list-icon
        color: #FF6E6E
.item-children
    padding: 0 .3rem
.item-childrens
    padding: 0 .3rem
</style>
