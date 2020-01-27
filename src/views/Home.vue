<template>
    <div>
      <div class="white">
    {{movieID}}
    </div>
    <section
          v-for="movie in movies"
          v-bind:key="movie.id"
          >
          <div class="white">
        <img :src="movie.image" alt="poster" class="poster" @click="movieRoute(movie.id)">
        </div>
    </section>

    </div>
</template>

<script>
export default {
      computed: {
        movies(){
        return this.$store.state.movies
        },
        movieID(){
          return console.log(this.$store.state.moveID)
        },
        movie(){
        return this.$store.state.movie
        }
    },
    created(){
        this.$store.dispatch("getMovies")
        this.$store.dispatch("getMovie")
    },
    methods:{
        movieRoute(id){
          this.$router.push(`/movies/${id}`)
        },
        
        publishMovies(){
            this.$store.dispatch("publishMovies")
        },
        publishMovie(){
          this.$store.dispatch("publishMovie")
        }
    }
}
</script>


<style>
.white{
  color: white;
  background-color: transparent;
}
.poster{
  cursor: pointer;
}
</style>