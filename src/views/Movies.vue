<template>

  <div class="movie-bg-image valign-wrapper">
    <img
      class="img-bg"
      src="https://trumpwallpapers.com/wp-content/uploads/Joker-2019-Wallpaper-01-2560-x-1440.jpg"
    />
    <i @click="toggleTrailer()" class="material-icons large icon-white valign-wrapper center-align btn-flat">play_circle_filled</i>

    <div @click="toggleTrailer()" class="overlay" v-if="this.trailerVisible === true">
        <div class="video-player overlay-content">
            <div class="video-frame">
                <a class="button btn-flat btn-large waves-effect transparent"><i class="material-icons">close</i></a>
                <iframe width="920" height="517.5" src="https://www.youtube.com/embed/zAGVQLHvwOY/D6Ac5JpCHmI?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
        </div>
    </div>

        <div class="poster-info">
            <img src="https://catalog.cinema-api.com/images/ncg-images/c1957ea282b246e88b076f7d2b37b7b0.jpg?width=240&version=A62BB796D46DA2A542F4C5E373BAC4F4&format=webp">
        </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      trailerVisible: false
    };
  },
  methods: {
    toggleTrailer() {
      this.trailerVisible = !this.trailerVisible;
    },
    handleKeyPress(e){
        if(e.keyCode === 27 && this.trailerVisible){
            this.toggleTrailer();
        }
    }
  },
    created() {
        window.addEventListener('keydown', this.handleKeyPress)
    },
    destroyed(){
        window.removeEventListener('keydown', this.handleKeyPress)
    }

}
</script>

<style>
.img-bg {
  width: 100%;
  max-height: 100vh;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0)));
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
}

.movie-bg-image {
  padding: 0;
    margin: 0;
}

.material-icons {
  position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 1;
}
i.icon-white {
  color: white;
}
.video-player {
  margin: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-60%);
}
.button {
  left: 52%;
}
.video-frame {
  width: 920px;
  height: 517.5px;
}
.poster-info{
    position: absolute;
    left: 10%;
    transform: translateY(80%);
}
</style>