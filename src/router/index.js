import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '@/views/Movies.vue'
import Movie from '@/views/Movie.vue'
import Bookingpage from '@/views/Bookingpage.vue'

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
    path: '/bookingpage',
    name: 'bookingpage',
    component: Bookingpage
  }
]

const router = new VueRouter({
  routes
})

export default router