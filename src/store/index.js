import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.
import { placeholdermovies } from './placeholdermovies.js'
import { placeholderscreenings } from './placeholderscreenings.js'
import { placeholderbookings } from './placeholderbookings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieID: "1",
    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      movies:[],
      movie:[], //denna är konstig, den aktuella movien för varje view borda sättas via computed och hämtas från movies
                // finns det någon speciell anledning till varför det är ett objekt i en lista och inte bara ett objekt?

      //the placeholders are currently referencing to the other placeholders, not to the movies collection in firebase
      placeholdermovies: placeholdermovies,
      placeholderscreenings: placeholderscreenings,
      placeholderbookings: placeholderbookings,


      auditoriumStoraSize: 80,
      auditoriumLillaSize: 40,
      

  },
  getters: {

    getMovies: state => { //använd denna hellre än $state.movies
      return state.movies
    },

    getMovieByID: state => (id) => {

      //console.log(state.movie)
      //let data = new []
      //data.push(state.movies.find(product => product.ID === id))
      return state.movies.filter(product => product.id === id)
    },

    getBookings: state => {
        return state.placeholderbookings
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
          if (this.state.movies.length === 0){ // om arrayn state.movies är tom, hämta från databasen, här sparar vi en massa fb reads
            console.log("retrieving movies from DB")
            let querySnapshot = await db.collection("movies").get()
            let data = []
            querySnapshot.forEach((document) => {
            data.push(document.data())
        })
          commit('setMovies', data)

          }

        }, // den här tycker jag ska bort, vi borde använda en getter när vi hämtar data som ska förväntas ligga i state.
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
