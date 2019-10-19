<template>
    <div>
        <city-header></city-header>
        <city-search :hotCities="hotCities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <alphablet :cities="cities"></alphablet>
        <alphablet :hotCities="hotCities"></alphablet>
    </div>
</template>

<script>
import CityHeader from '@/pages/city/components/CityHeader'
import CitySearch from '@/pages/city/components/CitySearch'
import CityList from '@/pages/city/components/CityList'
import Alphablet from '@/pages/city/components/Alphablet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphablet
  },
  data () {
    return {
      cities: [],
      hotCities: {}
    }
  },
  methods: {
    getCitiesInfo () {
      axios.get('/api/city.json')
        .then(this.getCitiesInfoSucc)
    },
    getCitiesInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCitiesInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
