import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import Axios from 'axios'
import config from './service/config'

Vue.use(Datetime)

Vue.config.productionTip = false

Vue.prototype.$http = Axios
Vue.prototype.$config = config
localStorage.setItem('config', config)

Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')
Vue.prototype.$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

new Vue({
  router,
  store,
  config,
  render: h => h(App)
}).$mount('#app')
