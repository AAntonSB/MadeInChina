<template>
    <div class="movie">
        Movie site: Coming soon...
        here is some stuff
        {{ film }}
    </div>    
</template>

<style scoped>
.movie{
    color: red;
    padding: 50px 0;
}
</style>
<script>
export default {

    data(){
        return {

            today: Date(),
            someDay: new Date(2020, 2, 1, 20, 0)
            //id: null,
            //id: this.$router.params.movieId,
            
            //dude: this.$route.params.movieId
            //film: this.$router,
            //film2: this.$router.currentRoute,
        }
    },
    computed: {
        movies(){
        return this.$store.state.movies
        },
        // use this
        film(){
            return this.$route.params.movieId
        },
        /*
        //unreactive, why?
        film(){
            return this.$router.currentRoute.params.movieId
        }
        */
    },
    created(){
        this.$store.dispatch("getMovies");

    },
    methods:{
    }
}
</script>