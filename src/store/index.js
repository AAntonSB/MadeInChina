import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.
import {auditoriums} from './auditoriums.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //movieID: "1",
    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      movies:[],
      movie:[], //denna är konstig, den aktuella movien för varje view borda sättas via computed och hämtas från movies
                // finns det någon speciell anledning till varför det är ett objekt i en lista och inte bara ett objekt?

      //auditoriums: [],
      showtimes: [],
      booked: null,
      auditoriums: auditoriums,
  },
  getters: {
    getMovies: state => { //använd denna hellre än $state.movies
      return state.movies
    },

    getBookings: state => {
        return state.placeholderbookings
    },

    getMovieByID: state => (id) => {

      return state.movies.filter(product => product.id === id)
    },

    getAllShowtimesByMovieId: state => (movieId) => {
      return state.showtimes.filter(showtime => showtime.movieId == movieId)
    },
    
    getAllShowtimesByDate: state => (datetime) =>{

      return state.showtimes.filter(show => show.startDatetime.getMonth() === datetime.getMonth() && show.startDatetime.getDate() === datetime.getDate())

    },
    
    getSingleShowtimeById: state=> (showtimeid) => {
      return state.showtimes.find(showtime => showtime.id === showtimeid)
    },

    getShowtimesByMovieId: state => (movieId) => {
      return state.showtimes.filter(show => show.movieId === movieId)
    },

    getAuditorium : state => (auditoriumId) => {
      return state.auditoriums.filter(auditorium => auditorium.id == auditoriumId);
    },
    getAuditoriumIdByShowtimeId : state => (showtimeId) => {
      return state.db.collection("showtimes").where("showtimeId","==",showtimeId).showtimeId
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
     },

     setAuditoriums(state, data){
      state.auditoriums = data
     },

     setBookings(state, data){

      let currentshowtime = state.showtimes.find(show => show.showtimeId === data.showtimeId)

      console.log(currentshowtime)

      let currentauditorium = state.auditoriums.find(auditorium => auditorium.Id === currentshowtime.auditoriumId)

      let tempseatings = {}

      for (let i = 1; i < currentauditorium.seatsPerRow.length + 1; i++){
        tempseatings[i] = []
      }

      for(let document of data.bookings){
        tempseatings[document.row].push(document.col)
      }

      state.booked = tempseatings

     },
     /*setShowtimes(state, data){
      state.showtimes = data
     },*/
     setShowtimes(state, data){

      let tempdata = []

      for(let document of data){


        let tempshowtime = {}
        tempshowtime.auditoriumId = document.auditoriumId
        tempshowtime.movieId = document.movieId
        tempshowtime.showtimeId = document.showtimeId
        tempshowtime.startDatetime = new Date(document.startDatetime*1000)

        tempdata.push(tempshowtime)

      }
      tempdata.sort((a, b) => Number(a.id) - Number(b.id))
      state.showtimes = tempdata
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
        async getShowtimes({commit}){   // async = möjlighet att vänta på svar.
          if (this.state.showtimes.length === 0){ // om arrayn state.movies är tom, hämta från databasen, här sparar vi en massa fb reads
            console.log("retrieving showtimes from DB")
            let querySnapshot = await db.collection("showtimes").get()
            let data = []
            querySnapshot.forEach((document) => {
            data.push(document.data())
          })
          commit('setShowtimes', data)
          }
        },
  },
  modules: {
  }
})
