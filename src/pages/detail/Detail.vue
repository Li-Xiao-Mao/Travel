<template>
    <div>
        <detail-banner :headerImg="headerImg" :sightName="sightName" :gallaryImg="gallaryImg"></detail-banner>
        <detail-header :sightName="sightName"></detail-header>
        <div class="container">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from '@/pages/detail/components/Banner'
import DetailHeader from '@/pages/detail/components/Header'
import DetailList from '@/pages/detail/components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      gallaryImg: [],
      headerImg: ''
    }
  },
  methods: {
    DetailListInfo () {
      axios.get('/api/detail.json')
        .then(this.getDetailListInfo)
    },
    getDetailListInfo (res) {
      res = res.data
      console.log(res)
      if (res.ret || res.data) {
        const data = res.data
        this.list = data.list
        this.sightName = data.sightName
        this.gallaryImg = data.gallaryImgs
        this.headerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.DetailListInfo()
  }
}
</script>

<style lang="stylus" scoped>
.container
    height: 50rem
</style>
