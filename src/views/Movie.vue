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

      <div class="poster-info row box">
        <p>{{movi.genre.toString()}}</p>
        <p></p>
        <p class="time-and-age">{{movi.time}} | {{movi.age}} år</p>
        <a class="waves-effect waves-light btn-large red book-button">Boka</a>
      </div>
      <div style="width:100%;padding: 10px 50px;">
      <div class="main-info">
        <p @click="consoleLog(movi.trailer)">{{movi.plot}}</p>
        <p>Regi:{{movi.director.toString()}}</p>
        <p>Skådespelare: {{movi.actors.toString()}}</p>
        <p>Språk: {{movi.language}}</p>
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
  width: 100vw;
  height: 100vh;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2));
}

.img-bg div {
  width: 100vh;
  max-height: 100vh;
}
.movie-bg-image {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.play-button {
  position: absolute;
  left: 50%;
  top: 40%;
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
  left: 20%;
  z-index: 50;
}
.button {
  left: 52%;
}
.video-frame {
  width: 920px;
  height: 517.5px;
}
.poster-info {
  position: absolute;
  left: 10%;
  top: 50%;
  color: white;
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
  
}
.book-button {
  border-radius: 6.35%;
}
.box {
  background-color: rgba(0, 0, 0, 0.3);
  width: 20%;
  padding: 30px;
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
</style>