import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import "@/assets/styles/site.scss"

axios.defaults.baseURL = 'http://localhost.twelve:9999/wp-json/';
Vue.prototype.$staging = 'http://localhost.twelve:9999/';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
