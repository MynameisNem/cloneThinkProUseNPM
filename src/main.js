import Vue from 'vue'
import App from './App.vue'
import router from './vueRouter/router.js'
import './assets/tailwind.css'

// Đây là cách đăng ký biến toàn cục cho vue marquee
import VueMarqueeSlider from 'vue-marquee-slider';

Vue.use(VueMarqueeSlider)
Vue.config.productionTip = false
// là toàn bộ cục ở trên

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
