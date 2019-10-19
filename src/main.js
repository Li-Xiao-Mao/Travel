// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick' // 解决click事件点击延迟300ms的问题
import 'styles/reset.css' // 解决各个浏览器默认样式的不统一问题
import 'styles/border.css' // 由于某些机型分辨率过高,会导致1px变成2-多px像素的问题,引用bordercss解决
import '@/bli/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
