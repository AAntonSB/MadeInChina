import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Movies from '@/views/Movies.vue'
import Movie from '@/views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Movies
  },
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
    path: '/movie',
    component: Movie,
    props(route) {
      return {  movieId: route.query.movieId }
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
