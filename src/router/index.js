import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MoviePage from '@/views/MoviePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:movie',
    name: 'home',
    component: Home
  },
  {
    path: '/moviePage',
    component: MoviePage,
    props(route) {
      return {  movieid: route.query.movieid }
    }
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
})

export default router
