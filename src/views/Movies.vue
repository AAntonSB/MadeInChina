<template>

  <div class="movie-bg-image valign-wrapper">
    <section
          v-for="movi in movie"
          v-bind:key="movi.id"
          >
          <div class="img-bg">
    <img
    class="img-bg"
      :src="movi.videoImage"
    />
    </div>
    <i @click="toggleTrailer()" class="material-icons large icon-white valign-wrapper center-align btn-flat">play_circle_filled</i>

    <div @click="toggleTrailer()" class="overlay" v-if="trailerVisible === true">
        <div class="video-player overlay-content">
            <div class="video-frame">
                <a class="button btn-flat btn-large waves-effect transparent"><i class="material-icons">close</i></a>
                <iframe width="920" height="517.5" src="movi.trailer" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
            </div>
        </div>
    </div>

        <div class="poster-info row">
            <img class="col s6" src="https://catalog.cinema-api.com/images/ncg-images/c1957ea282b246e88b076f7d2b37b7b0.jpg?width=240&version=A62BB796D46DA2A542F4C5E373BAC4F4&format=webp"/>
            <div class="col s3">
            <h4>Joker</h4>
            <p>Action, Komedi<p>
            <p class="time-and-age">2tim 4min | 15 år</p>
            <a class="waves-effect waves-light btn-large red book-button">Boka</a>
            </div>
        </div>
    

    <div class="main-info">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt veritatis, vitae obcaecati odit eligendi magni possimus quam laborum, placeat unde quasi provident voluptatibus? Possimus voluptas molestiae tempora quidem expedita?</p>
        <p>Director:</p>
        <p>Actor:</p>
        <p>Language:</p>
    </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trailerVisible: false
    };
  },
  computed: {
      movie(){
        return this.$store.state.movie
      }
  },
  methods: {
              publishMovie(){
          this.$store.dispatch("publishMovie")
        },
        
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
        this.$store.dispatch("getMovie")
    },
    destroyed(){
        window.removeEventListener('keydown', this.handleKeyPress)
    }

}
</script>

<style>
.img-bg img{
    width: 100%;
    max-height:100%;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0)));
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
}

.img-bg div{
  width: 100vh;
  max-height: 100vh;
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
    color: white;
}
.time-and-age{
    color: gray;
}
.main-info{
    color: white;
    position: absolute;
    top: 100%;
    left: 10%;
    margin: 0px;
    word-wrap: break-all;
    width: 750px;
}
.book-button{
    border-radius: 6.35%;
}
</style>