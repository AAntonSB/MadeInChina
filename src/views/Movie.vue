<template>
    <div class="movie">
        movieId:
        {{ $route.query.movieId }}
        <br>
        <section
          v-for="oneMovie in movie"
          v-bind:key="oneMovie.id"
          >
            <div class="filmBox" :style="{ backgroundImage: `url('${oneMovie.imageOfCarousel}')` }">        
                <span style="padding-left: 10px; background-color: #cc0028; border-radius: 0px 0px 15px 15px;">
                    <span style="font-size: 22px;">{{oneMovie.title}}</span> 
                    <p>{{oneMovie.genre}} {{oneMovie.time}} | {{oneMovie.age}} år </p>
                    <p>{{oneMovie.plot}}</p>
                </span>
            </div>
        </section>      
    </div>
</template>

<style scoped>
.movie{
    color: red;
    padding: 50px 0;
}
.filmBox{
    display:flex; 
    flex-direction: column;
    height: 640px;
    width: 1000px;
    background-repeat: no-repeat;
    margin-bottom: 5px;
    justify-content: flex-end;
    text-align: left;
    color: #fff;
    border-radius: 0px 0px 15px 15px;
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
    computed: {
        movie(){
            return this.$store.state.movie
        }
        */
    },
    created(){
        this.$store.dispatch("getMovie",this.$route.query.movieId)
    },
    methods:{
        /*mounted: function() {
        let parameters = this.$route.path
        alert(parameters)
   
        let name = this.$route.name
        alert(name) 
        },*/
    },
    
}
</script>