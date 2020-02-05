import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

firebase.auth().onAuthStateChanged(user =>{
  console.log(user)
  if(!app){
    app = 
      new Vue({
        store,
        router,
        render: h => h(App)
        }).$mount('#app')
    
  }
})