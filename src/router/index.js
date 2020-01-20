import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '@/views/Movies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies/:movie',
    name: 'movies',
    component: Movies
  }
]

const router = new VueRouter({
  routes
})

export default router
