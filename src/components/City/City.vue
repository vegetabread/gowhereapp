<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :clicked="clicked"></city-list>
        <city-alf :cities="cities" @change="transfer"></city-alf>
    </div>
</template>
<script>
import CityHeader from './comp/header'
import CitySearch from './comp/search'
import CityList from './comp/list'
import CityAlf from './comp/alf'
import axios from 'axios'
export default {
  data () {
    return {
      hotCities: [],
      cities: {},
      clicked: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlf
  },
  methods: {
    transfer (val) {
      this.clicked = val
    }
  },
  mounted () {
    axios.get('/api/city').then((res) => {
      const data = res.data.data
      this.hotCities = data.hotCities
      this.cities = data.cities
    })
  }
}
</script>
<style lang="stylus" scoped>
</style>
