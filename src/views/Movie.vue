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
       <div class="dropDownMoviePage">
          <span id="showDateDropdown"  class="my-custom-dropdown">
              <select id="showtimeSelect" v-on:change="getSelectedShowtimeId()">
                  <option>Välj dag</option>
                  <option  v-for="showtime in showtimesByMovieId" 
                    :key="showtime" 
                    :id="showtime.showtimeId">
                    {{getDatum(showtime.startDatetime)}}</option>
              </select>
          </span>
          <router-link v-if="disable" :to="{path: '/bookingpage', query: { showtimeId: selectedShowtimeId }}"><a class="waves-effect waves-light btn-large red book-button">Boka</a></router-link>
        </div>
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

      
      <div style="width:100%;padding: 10px 50px;">
      <div class="main-info">
        <p @click="consoleLog(movi.trailer)">{{movi.plot}}</p>
        <p><span style="font-weight: bold;">Regi:</span> {{movi.director.toString()}}</p>
        <p><span style="font-weight: bold;">Skådespelare:</span> {{movi.actors.toString()}}</p>
        <p><span style="font-weight: bold;">Språk:</span> {{movi.language}}</p>
      </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      trailerVisible: false,
      selectedDate: 0,
      selectedMovieId: 0,
      selectedShowtimeId: 0,
      disable: false,
      currentDate: new Date()
    };
  },
  computed: {
    movie() {
      // TODO use getter for this this.$route.query.movieId
      return this.$store.getters.getMovieByID(this.$route.query.movieId)
    },
      showtimesByMovieId(){
        
        return this.$store.getters.getAllShowtimesByMovieId(this.$route.query.movieId).filter(showtime => showtime.startDatetime > this.currentDate)
    },
    /*
    movie2() {
      return this.$store.getters.getMovieByID(this.$route.query.movieId)
    },
    */
  },
  methods: {
    getSelectedShowtimeId: function (){
      this.selectedShowtimeId = document.getElementById("showtimeSelect").options[document.getElementById("showtimeSelect").selectedIndex].id;
      this.disable=true
      console.log(this.selectedShowtimeId)
      if(this.selectedShowtimeId == 0){
        this.disable = false;
        // document.getElementById('book-button').style.visibility= "visible";
      }
    },
    consoleLog(trailer){
      console.log(trailer.toString());
    },
        exitLogin(){
      this.$router.go(-1);
    },
    /*publishMovie() {
      this.$store.dispatch("publishMovie");
    },*/

    toggleTrailer() {
      this.trailerVisible = !this.trailerVisible;
    },
    handleKeyPress(e) {
      if (e.keyCode === 27 && this.trailerVisible) {
        this.toggleTrailer();
      }
    },   
         getDatum: function(showtimestDT){
      let days = [
        'söndag',
        'måndag',
        'tisdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lördag'
        ]
      let dayName = days[(showtimestDT.getDay())]
      let showtimeMinutes=showtimestDT.getMinutes();

      if (showtimeMinutes.toString().length < 2) 
      {
        showtimeMinutes = '0' + showtimeMinutes
      }
      return (showtimestDT.getDate())+' / '+(showtimestDT.getMonth()+1)+ ' '+showtimestDT.getHours() +':'+showtimeMinutes+' '+dayName;
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
    },

  },
  created() {
    console.log(this.$route.query.movieId);
    this.selectedMovieId = this.$route.query.movieId;
    console.log(this.selectedMovieId + "test");
    window.addEventListener("keydown", this.handleKeyPress);
    //this.$store.dispatch("getMovie", this.$route.query.movieId); // vi borde inte använda denna, kör på computed gettern ist
  },
  destroyed() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }
};
</script>

<style scoped>
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

.movie-bg-image {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.play-button {
  position: absolute;
  top:20%;
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
  width: auto;
  top: 40%;
  right:70vw;
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

.my-custom-dropdown {
  width: 201.77px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 8px;
}

.my-custom-dropdown select {
    background-color: #C62828;
    color: #fff;
    font-size: inherit;
    padding: .5em;
    padding-right: 2.5em;
    margin: 0;
    border-radius: 3px;
    text-indent: 0.01px;
    text-overflow: '';
    -webkit-appearance: button; /* hide default arrow in chrome OSX */
    display: block;
    border: none;
    border-radius: 2px;
}
.my-custom-dropdown::before,
.my-custom-dropdown::after {
  content: "";
  position: absolute;
  pointer-events: none;
  border: none;
}

.my-custom-dropdown::before { /*  Custom dropdown arrow cover */
  width: 2em;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}


.my-custom-dropdown::before {
  background-color: rgba(0,0,0,.15);
}

.my-custom-dropdown::after {
  color: rgba(0,0,0,.4);
}

.my-custom-dropdown select:focus{
    outline: none; 
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
  .play-button{
    top: 10%;
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