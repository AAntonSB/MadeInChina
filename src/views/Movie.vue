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
    computed: {
        movie(){
            return this.$store.state.movie
        }
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