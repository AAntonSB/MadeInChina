import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Movies from '@/views/Movies.vue'
import Movie from '@/views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home/:movie',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: Movie
  }
]

const router = new VueRouter({
  routes
})

export default router
