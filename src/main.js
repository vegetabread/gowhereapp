import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import fastClick from 'fastclick'
import '../public/styles/reset.css'
import '../public/styles/border.css'
import '../public/styles/iconfont.css'
// 关于vue-awesome-swiper的配置
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
// fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
