import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'firebase'
import { firestorePlugin } from 'vuefire'
import M from 'materialize-css'

Vue.prototype.$M = M
Vue.$M = Vue.prototype.$M

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')