import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '@/views/Movies.vue'
import Movie from '@/views/Movie.vue'
import Seats from '@/views/Seats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Movies
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
  },
  {
    path: '/seats',
    name: 'seats',
    component: Seats
  },
]

const router = new VueRouter({
  routes
})

export default router