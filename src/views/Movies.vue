<template>
    <div class="movie-bg-image valign-wrapper center-align">
        <i class="material-icons large icon-white valign-wrapper center-align btn-flat">play_circle_filled</i>
        <img class="img-bg" src="https://trumpwallpapers.com/wp-content/uploads/Joker-2019-Wallpaper-01-2560-x-1440.jpg">
    </div>
</template>

<script>
export default {

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
}
i.icon-white{
    color:white;   
}

</style>