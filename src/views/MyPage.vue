<template>
<div class="">
       <!-- <section v-for="movie in movies" v-bind:key="movie.title"> -->
           
 <section v-for="show in showtimes" v-bind:key="show">
    
    <div class="main-body">
        HELLO{{show.movieId}}
        <svg class="defs-only">
            <filter id="monochrome" 
            color-interpolation-filters="sRGB"
            x="0" y="0" height="100%" width="100%">
            <feColorMatrix type="matrix"
            values="1.00 0 0 0 0 
            0.80 0 0 0 0 
            0.65 0 0 0 0
            0    0 0 1 0" />
            </filter>
        </svg>
        <img class="ticket" src="https://www.pngkey.com/png/full/19-196604_large-raffle-ticket-printable-raffle-tickets.png">
    </div>
    </section>
    </div>

</template>
<script>
export default {
    data(){
        return{

        }
    },
 computed:{
 showtimes() {
      return this.$store.state.showtimes;
      
 }, 
  movies() {
      return this.$store.state.movies;
    }    
},

created(){
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getShowTimes")
    this.$store.dispatch("pullShowtimes")
    

},
methods:{

}   

}

</script>

<style>
.ticket{
    -webkit-filter: url(#monochrome);
  filter:  url(#monochrome);

}

.defs-only{
    position: relative;
    height: 0; width: 0;
    overflow: none;
    left: -100%;
}

</style>