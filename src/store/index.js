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
      bookings:[],
      booked: null,
      auditoriums: auditoriums,
  },
  getters: {

    getBooked: state => {
      return state.booked

    },

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
    
    getSingleShowtimeById: state=> (showtimeId) => {
      return state.showtimes.filter(showtime => showtime.showtimeId == showtimeId)
    },

    getShowtimesByMovieId: state => (movieId) => {
      return state.showtimes.filter(show => show.movieId === movieId)
    },

    getAuditorium : state => (auditoriumId) => {
      return state.auditoriums.filter(auditorium => auditorium.id == auditoriumId);
    },

    getAllBookingsByShowtimeId: state => (showtimeId) => {
      return state.bookings.filter(bookings => bookings.showtimeId == showtimeId)
    },
    /*getAuditoriumIdByShowtimeId : state => (showtimeId) => {
      return state.db.collection("showtimes").where("showtimeId","==",showtimeId).showtimeId
    }*/
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
     setBookingsA(state, data){
      state.bookings = data
     },
     setBookings(state, data){

      let tempseatings = {seats: {}, occupiedSeats: data.bookings.length, availableSeats: data.currentauditorium.seats - data.bookings.length}

      let seatsleft = data.currentauditorium.seats - data.bookings.length

      console.log("number of seats left " + seatsleft)

      for (let i = 1; i < data.currentauditorium.seatsPerRow.length + 1; i++){
        tempseatings.seats[i] = []
      }

      for(let document of data.bookings){
        tempseatings.seats[document.row].push(document.col)
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
      //tempdata.sort((a, b) => Number(a.id) - Number(b.id))
      tempdata.sort((a, b) => Number(a.startDatetime) - Number(b.startDatetime))
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
        /*async getShowtimes({commit}){   // async = möjlighet att vänta på svar.
          if (this.state.showtimes.length === 0){ // om arrayn state.movies är tom, hämta från databasen, här sparar vi en massa fb reads
            console.log("retrieving showtimes from DB")
            let querySnapshot = await db.collection("showtimes").get()
            let data = []
            querySnapshot.forEach((document) => {
            data.push(document.data())
          })
          commit('setShowtimes', data)
          }
        },*/
        async getBookings({commit}){   // async = möjlighet att vänta på svar.
          if (this.state.bookings.length === 0){ // om arrayn state.movies är tom, hämta från databasen, här sparar vi en massa fb reads
            console.log("retrieving bookings from DB")
            let querySnapshot = await db.collection("bookings").get()
            let data = []
            querySnapshot.forEach((document) => {
            data.push(document.data())
          })
          commit('setBookingsA', data)
          }
        },
        /* pullShowtimes och pullBookings försvann med merge. Jag tog tillbaka den från Joakims version. */
        async pullShowtimes(){

          console.log("pulling showtimes")

          let querySnapshot = await db.collection("showtimes").get()

          let showtimesdata = []

          querySnapshot.forEach((document) => {
            showtimesdata.push(document.data())
        })
        console.log("showtimes!")
         //console.log(showtimesdata)
         this.commit('setShowtimes', showtimesdata) //commit data instead of showtimesdata

        },
        async pullBookings({commit}, payload){

          console.log("pulling bookings for :" + payload.showtimeId)
          //console.log(payload)

          let querySnapshot = await db.collection("bookings").where("showtimeId","==",payload.showtimeId).get()

          let bookingsdata = []

          querySnapshot.forEach((document) => {
            bookingsdata.push(document.data())
          })

          let currentshowtime = this.state.showtimes.find(show => show.showtimeId === payload.showtimeId)

          let currentauditorium = null //this.state.auditoriums.find(auditorium => auditorium.Id === currentshowtime.auditoriumId)

          for(let auditorium of this.state.auditoriums){
            if(auditorium.id == currentshowtime.auditoriumId){
              currentauditorium = auditorium
            }
          }

          commit('setBookings', {bookings:bookingsdata, currentauditorium: currentauditorium})

        },
  },
  modules: {
  }
})
