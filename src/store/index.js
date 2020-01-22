import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      movies:[]
  },
  //getters: {
   // getMovieImage: state => {
   //   return state.movies.Frozen2.image
   // }
  //},
  mutations: {
    // Använd egna metoder till actions nedanför, se receptia för mer info.
    setMovies(state, data){
      state.movies = data
     },
     publishedMovies(state){
       state.publishedMovies = true
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
  },
  modules: {
  }
})
