<template>
  <div>
    <section class="movie-bg-image valign-wrapper" v-for="movi in movie" v-bind:key="movi.id">
      <div class="img-bg">
        <img class="img-bg" :src="movi.videoImage" />
      </div>
      <i
        @click="toggleTrailer()"
        class="material-icons large icon-white valign-wrapper center-align btn-flat play-button"
      >play_circle_filled</i>
        <div class="box">
        <div class="poster-info">
        <p>{{movi.genre.toString()}}</p>
        <p class="time-and-age">{{movi.time}} | {{movi.age}} år</p>
        <a class="waves-effect waves-light btn-large red book-button">Boka</a>
      </div>
      </div>
      <div @click="toggleTrailer()" class="overlay" v-if="trailerVisible === true">
        <div class="video-player overlay-content">
          <div class="video-frame">
            <a class="button btn-flat btn-large waves-effect transparent">
              <i class="material-icons">close</i>
            </a>
            <iframe
              width="920"
              height="517.5"
              :src="'https://www.youtube.com/embed/' + movi.trailer + '?autoplay=1&cc_load_policy=1'"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="test">
      <div class="main-info">    
        <p @click="consoleLog(movi.trailer)">{{movi.plot}}</p>
        <p class="movieInformation"><span style="font-weight: bold;">Regi:</span> {{movi.director.toString()}}</p>
        <p class="movieInformation"><span style="font-weight: bold;">Skådespelare:</span> {{movi.actors.toString()}}</p>
        <p class="movieInformation"><span style="font-weight: bold;">Språk:</span> {{movi.language}}</p>
      </div>
      </div>
      <!-- <div class="Booking collection">
          <li class="collection-header"><h4>Visningar v.47</h4></li>
          <a href="#!" class="collection-item black"><p class="white-font">Film tid</p></a>
          <a href="#!" class="collection-item black white-font"><p class="white-font">Sal 2 17:00</p> <p class="reddd">68 av 68 platser kvar</p></a>
          <a href="#!" class="collection-item black white-font"><p class="white-font">Film tid</p></a>
          <a href="#!" class="collection-item black white-font"><p class="white-font">Film tid</p></a>
      </div> -->
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
    movie() {
      return this.$store.state.movie;
    }
  },
  methods: {
    consoleLog(trailer){
      console.log(trailer.toString());
    },
        exitLogin(){
      this.$router.go(-1);
    },
    publishMovie() {
      this.$store.dispatch("publishMovie");
    },

    toggleTrailer() {
      this.trailerVisible = !this.trailerVisible;
    },
    handleKeyPress(e) {
      if (e.keyCode === 27 && this.trailerVisible) {
        this.toggleTrailer();
      }
    }
  },
  watch: {
    trailerVisible(value){
      if(value){
        document.body.style.setProperty("height", "100vh")
        document.body.style.setProperty("overflow-y", "hidden")
      }else{
        document.body.style.setProperty("height", "100%")
        document.body.style.setProperty("overflow-y", "auto")
      }
    }
  },
  created() {
    console.log(this.$route.query.movieId);
    window.addEventListener("keydown", this.handleKeyPress);
    this.$store.dispatch("getMovie", this.$route.query.movieId);
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
};
</script>

<style>
.img-bg img {
  justify-content: flex-start;
  max-width: 100%;
  height: auto;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0.2));
}

.img-bg::after {
    display: block;
    position: relative;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #000 100%);
    height: 150px;
    margin-top: -150px;
    width: 100%;
    content: '';
}
.test{
  width:100%;
  padding: 10px 50px;
}

.movieInformation{
}

.movie-bg-image {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.play-button {
  position: absolute;
  padding-top: 20%;
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
  left: 20%;
  z-index: 5;
}
.btn-large {
  display: block;
}
.box{
  position: absolute;
  width: 200px;
  top: 40%;
  right:75vw;
  background-color: rgb(0, 0, 0, 0.3);
  display: block;
  padding: 30px;
  
}
.video-frame {
  width: 920px;
  height: 517.5px;
}
.poster-info {
  position: relative;
  z-index: 1;
  color: white;
  text-transform: none;
  font-size: 15px;
  display: block;
}
.time-and-age {
  color: gray;
}
.main-info {
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px;
  word-wrap: break-all;
  text-align: left;
  max-width: 50%;
  display: block;
  
}
.book-button {
  border-radius: 6.35%;
}
.Booking{
  position: absolute;
  right: 0;
  top:47.5%;
  border:rosybrown;
}
.reddd{
  color: red;
}
.dark-grey{
  background-color:rgb(27, 26, 26)
}
.white-font{
  color: white;
  margin:0px;
  padding: 2px;
}

@media only screen and (max-width: 950px){
  .box{
    position: relative;
    left:1%;
    width: 300px;
    padding: 0;

  }
  .main-info{
    max-width: 100%;
 }
}

@media only screen and (max-width: 600px)  {
  .main-info{
    max-width: 100%;
  }
}

@media only screen and ( max-width: 450px){
  .main-info{
    max-width: 100%;
  }
  .box{
    position: relative;
    left:1%;
  }
}

@keyframes draw {
  to{
    transform: translateY(1);
  }
}
</style>