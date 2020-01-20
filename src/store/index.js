import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '@/firebase' // @ = src.

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
    movies:{
      Frozen2:[
        {
          title: "hejsan",
          image: "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
      }
      ],
      BadBoys4Life:[
        {
          title: "hejsan",
          image: "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
      }
      ],
      Joker:[
      {
          title: "hejsan",
          image: ('https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'),
      }
      ],
      Cats:[
        {
          title: "hejsan",
          image: "https://m.media-amazon.com/images/M/MV5BNjRlNTY3MTAtOTViMS00ZjE5LTkwZGItMGYwNGQwMjg2NTEwXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
      }
      ],
      EnDelAvMittHjarta:[
        {
          title: "hejsan",
          image: "https://m.media-amazon.com/images/M/MV5BNDhhY2ViYjQtNjNiZC00ZTE0LTkyOWEtZWUzODhkYTVlYTFkXkEyXkFqcGdeQXVyODc2NTcxODU@._V1_UY268_CR242,0,182,268_AL_.jpg",
      }
      ]
    }
  },
  //getters: {
   // getMovieImage: state => {
   //   return state.movies.Frozen2.image
   // }
  //},
  mutations: {
    // Använd egna metoder till actions nedanför, se receptia för mer info.
    setBurgers(state, data){
      state.foods.burgers = data
     },
     publishedFoods(state){
       state.publishedFoods = true
     }
  },
  actions: {
      // Bind till våra egna metoder 
        //Get data from firebase
        async getBurgers({commit}){   // async = möjlighet att vänta på svar.
          let querySnapshot = await db.collection("burgers").get()
          let data = []
          querySnapshot.forEach((document) => {
          data.push(document.data())
      })
        commit('setBurgers', data)
        },
  },
  modules: {
  }
})
