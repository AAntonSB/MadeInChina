import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '@/views/Movies.vue'
import Movie from '@/views/Movie.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
import MyPage from '@/views/MyPage'
import Bookingpage from '@/views/Bookingpage.vue'
import Omoss from '@/views/Omoss'
import Showtimes from '@/views/Showtimes'


import * as firebase from "firebase/app";
import "firebase/auth";

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
    name: 'movie',
    component: Movie,
    props(route) {
      return {  movieId: route.query.movieId }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage,
    meta: {requiersAuth: true}
  },
  {
    path: '/bookingpage',
    component: Bookingpage,
    name: 'bookingpage',
    props(route){
      return { showtimeId: route.query.showtimeId}
    },
  },
  {
    path: '/omoss',
    name: 'omoss',
    component: Omoss,
    props(route){
      return { typeId: route.query.typeId}
    }
  },
  {
    path: '/showtimes',
    name: 'showtimes',
    component: Showtimes
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})


router.beforeEach((to, from, next)=>{
  const requiersAuth = to.matched.some(record => record.meta.requiersAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiersAuth && !isAuthenticated){
    next("/login")
  }else{
    next();
  }
})

export default router