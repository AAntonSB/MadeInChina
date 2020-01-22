<template>
    <div class="movie-bg-image valign-wrapper center-align">
        <i @click="showTrailer()" class="material-icons large icon-white valign-wrapper center-align btn-flat">play_circle_filled</i>
        <img class="img-bg" src="https://trumpwallpapers.com/wp-content/uploads/Joker-2019-Wallpaper-01-2560-x-1440.jpg">
        <div class="video-player" v-if="this.trailerVisible === true">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zAGVQLHvwOY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
data(){
    return{
        trailerVisible: false,
    }
},
methods:{
    showTrailer(){
        if(this.trailerVisible === false){
            return this.trailerVisible = true;
        }
        return this.trailerVisible = false
    }
}
}
</script>

<style>
.img-bg{
    width: 100%;
    max-height: 100vh;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.2));
}

.movie-bg-image{
    padding: 0;
    margin: 0;
}

.material-icons{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
}
i.icon-white{
    color:white;   
}
.video-player{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
}

</style>