<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, key) of imgs" :key="key">
                    <img class="gallary-img" :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('clos')
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper-pagination-fraction
    position: fixed
    bottom: .6rem
.container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 99
    background-color: #000
    .wrapper
        overflow: hidden
        height: 0
        padding-bottom: 50%
        .gallary-img
            width: 100%
        .swiper-pagination
            color: #fff
</style>
