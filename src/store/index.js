import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.
import {auditoriums} from './auditoriums.js'
/*import { placeholdermovies } from './placeholdermovies.js'
import { placeholderscreenings } from './placeholderscreenings.js'
import { placeholderbookings } from './placeholderbookings.js'*/

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //movieID: "1",
    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      movies:[],
      movie:[],
      //the placeholders are currently referencing to the other placeholders, not to the movies collection in firebase
      /*placeholdermovies: placeholdermovies,
      placeholderscreenings: placeholderscreenings,
      placeholderbookings: placeholderbookings,*/
      auditoriumStoraSize: 80,
      auditoriumLillaSize: 40,
      auditoriums: auditoriums,
  },
  getters: {
    /*getBookings: state => {
        return state.placeholderbookings
    },

    getMovies: state => {
        return state.placeholdermovies
    },

    getBookingsByID: state => (id) => {
        return state.placeholderbookings.filter(booking => booking.screeningID == id)
    },

    getSeatsByID: state => (id) => {
        return state.placeholderbookings.filter(booking => booking.screeningID == id).map(item => item.seats).reduce((prev, next) => prev + next)
    },

    getSeatsLeftByID: state => (id) => {

        switch(state.placeholderscreenings.find(screening => screening.screeningID === id).auditoriumName) {
            case "Stora":
                return state.auditoriumStoraSize - state.placeholderbookings.filter(booking => booking.screeningID == id).map(item => item.seats).reduce((prev, next) => prev + next)
                //break;
            case "Lilla":
                return state.auditoriumLillaSize - state.placeholderbookings.filter(booking => booking.screeningID == id).map(item => item.seats).reduce((prev, next) => prev + next)
                //break;
            default:
                return "Error"
          }             
    },
    getMovieByID: state => (id) => {
        return state.placeholdermovies.find(product => product.ID === id)
        } */
    getAuditorium : state => (auditoriumId) => {
      return state.auditoriums.filter(auditorium => auditorium.auditoriumId == auditoriumId);
    },
    getAuditoriumIdByShowtimeId : state => (showtimeId) => {
      return state.db.collection("showtimes").where("showtimeId","==",showtimeId).auditoriumId
    }
  },
  mutations: {
    setMovieID(){

    },
    // Använd egna metoder till actions nedanför, se receptia för mer info.
    setMovies(state, data){
      state.movies = data
     },
     setMovie(state, data){
      state.movie = data
     },
     publishedMovies(state){
       state.publishedMovies = true
     },
     publishedMovie(state){
       state.publishedMovie = true
     }
  },
  actions: {
    // Bind till våra egna metoder 
    //Get data from firebase
    async getMovies({commit}){   // async = möjlighet att vänta på svar.
      let querySnapshot = await db.collection("movies").get()
      let data = []
      querySnapshot.forEach((document) => {
      data.push(document.data())
      })
      commit('setMovies', data)
    },
    async getMovie({commit},movieId){   // async = möjlighet att vänta på svar.
      let querySnapshot = await db.collection("movies").where("id","==",movieId).get()
      let data = []
      querySnapshot.forEach((document) => {
      data.push(document.data())
      })
      commit('setMovie', data)
    },
  },
  modules: {
  }
})
