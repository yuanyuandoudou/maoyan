import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import './assets/font/iconfont.css'
import 'axios'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/font/iconfont.js'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
