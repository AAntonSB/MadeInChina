<template>
    <div>
        <!--<img class="image" :src="$store.getters.getMovieImage">
        {{$store.state.movies.Joker}}
        {{movies.image}} -->

 <section
      v-for="movie in movies [$route.params.movie]"
      v-bind:key="movie.title"
      >
     <img :src="movie.image" alt="poster">
 </section>

    </div>
</template>

<script>
export default {

   // data(){
    //    return{
    //    image: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    //    }

      computed: {
        movies(){
        return this.$store.state.movies
        }
    }
    
    

  
}
</script>