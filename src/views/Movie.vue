<template>
    <div class="movie">
        Movie site: Coming soon...
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
      computed: {
        movies(){
        return this.$store.state.movies
        }
    },
    created(){
        this.$store.dispatch("getMovies")
    },
    methods:{
    }
}
</script>