import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.
//import { placeholdermovies } from './placeholdermovies.js'
//import { placeholderscreenings } from './placeholderscreenings.js'
import { placeholderbookings } from './placeholderbookings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieID: "1",
    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      movies:[],
      movie:[], //denna är konstig, den aktuella movien för varje view borda sättas via computed och hämtas från movies
                // finns det någon speciell anledning till varför det är ett objekt i en lista och inte bara ett objekt?

      auditoriums: [],
      showtimes: [],

      //the placeholders are currently referencing to the other placeholders, not to the movies collection in firebase
      //placeholdermovies: placeholdermovies,
      //placeholderscreenings: placeholderscreenings,
      placeholderbookings: placeholderbookings,

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

    getSingleShowtimeById: state=> (showtimeid) => {
      return state.showtimes.find(showtime => showtime.id === showtimeid)
    },

    getShowtimesByMovieId: state => (movieId) => {
      return state.showtimes.filter(show => show.movieId === movieId)
    },

    getBookedSeats: state=> (showtimeId) => {

      let bookings = state.placeholderbookings.filter(booking => booking.showtimeId === showtimeId)
      
      let currentshowtime = state.showtimes.find(show => show.id === showtimeId)

      let currentauditorium = state.auditoriums.find(auditorium => auditorium.Id === currentshowtime.auditoriumId)

      let tempseatings = {}

      for (let i = 1; i < currentauditorium.seatsPerRow.length + 1; i++){
        tempseatings[i] = []
      }

      for(let document of bookings){
        tempseatings[document.row].push(document.col)
      }

      return tempseatings

      //return sho

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
     },

     setAuditoriums(state, data){
      state.auditoriums = data
     },

     setShowtimes(state, data){

      let tempdata = []

      for(let document of data){


        let tempshowtime = {}
        tempshowtime.auditoriumId = document.auditoriumId
        tempshowtime.movieId = document.movieId
        tempshowtime.id = document.id
        tempshowtime.startDatetime = new Date(document.startDatetime*1000)

        tempdata.push(tempshowtime)
        /*
        let auditorium = data.auditoriumId
        let movie = data.movieId
        let showtime = data.id
        let startDatetime = data.startDatetime*1000
        */

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

        publishAuditoriums(){
          let documents = require('@/data/auditoriums.json')
          this.commit('setAuditoriums', documents)
        },

        async publishShowtimes(){

          let querySnapshot = await db.collection("showtimes").get()

          let showtimesdata = []

          querySnapshot.forEach((document) => {
            showtimesdata.push(document.data())
        })

          /*
          let data = []
          if (showtimesdata.length === 1){
            //3 numbers specify year, month, and day:
            let startdate = new Date(2020, 2, 2)
            
            for (let i = 0; i < 7; i++) {

              let tempdate = new Date(2020, 2, 2)
              tempdate.setDate(startdate.getDate() + i)
              tempdate.setHours(18)

              let tempshowtime = {}
              tempshowtime.auditoriumId = 1
              tempshowtime.movieId = 1
              tempshowtime.id = i*3 + 1
              tempshowtime.startDatetime = tempdate.getTime()/1000 //convert epoch milliseconds to epoch seconds
              data.push(tempshowtime)

              let tempshowtime2 = {}
              tempshowtime2.auditoriumId = 2
              tempshowtime2.movieId = 2
              tempshowtime2.id = i*3 + 2
              tempshowtime2.startDatetime = tempdate.getTime()/1000
              data.push(tempshowtime2)

              tempdate.setHours(21)
              tempdate.setMinutes(15)

              let tempshowtime3 = {}
              tempshowtime3.auditoriumId = 1
              tempshowtime3.movieId = 1
              tempshowtime3.id = i*3 + 3
              tempshowtime3.startDatetime = tempdate.getTime()/1000
              data.push(tempshowtime3)
            }
          }//
          
          for(let document of data){
            let res = await db.collection('showtimes').add(document)
            console.log('publishshowtimes res', res)
          }
          */
         this.commit('setShowtimes', showtimesdata)


        },
        },
  modules: {
  }
})
