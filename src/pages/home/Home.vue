<template>
    <div>
        <home-header :city="city"></home-header>
        <home-swiper :SwiperList="SwiperList"></home-swiper>
        <home-icons :IconList="IconList"></home-icons>
        <recommend :RecommendList="RecommendList"></recommend>
        <weekend :WeekendList="WeekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from '@/pages/home/components/HomeHeader'
import HomeSwiper from '@/pages/home/components/HomeSwiper'
import HomeIcons from '@/pages/home/components/Icons'
import Recommend from '@/pages/home/components/Recommend'
import Weekend from '@/pages/home/components/Weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  data () {
    return {
      city: '',
      SwiperList: [],
      IconList: [],
      RecommendList: [],
      WeekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = res.data.city
        this.SwiperList = data.swiperList
        this.IconList = data.IconList
        this.RecommendList = data.RecommendList
        this.WeekendList = data.WeekendList
      }
    }
  },
  mounted () {
    // 页面挂载以后，调用getHomeInfo函数
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>
