<template>
        <div class="flexdirectioncolumn">
            <!-- Big picture with search -->
            <!-- Big picture with search -->
            <div class="bigimgmovies" 
                v-bind:style="{ 'background-image': 'url(' + randommovie[0].videoImage + ')' }"
                >
                <div class="bigimginnerbckg">                    
                    <div class="searchcontainer">                        
                        <span class="my-custom-dropdown">
                            <select id="moviesDropdown"  v-on:change="getSelectedMovie()">
                                <option>Sök via film</option>
                                <option  v-for="movie in movies" :id="movie.id" :key="movie.id">{{movie.title}}</option>
                            </select>
                        </span>
                        <span id="dateDropdown"  class="my-custom-dropdown">
                            <select id="showtimeSelect" v-on:change="getSelectedShowtimeId()">
                                <option id="0">Sök via dag</option>
                                <option  v-for="showtime in showtimesByMovieId" 
                                  :key="showtime.showtimeId" 
                                  :id="showtime.showtimeId">
                                  {{getDatum(showtime.startDatetime)}} (salong {{showtime.auditoriumId}})</option>
                            </select>
                        </span>
                        <div id="bookingButton" class="bookingButtonBox">
                            <router-link :to="{path: '/bookingpage', query: { showtimeId: selectedShowtimeId }}">
                              <button class="waves-effect waves-light book-btn">Boka</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Hooper -->
            <div class="flexcenter" style="margin: 15px 0px;">
                <HooperSlider style=" width:70vw;" msg="Text"/>
            </div>

            <div class="flexcenter">
                <div class="carousel">
                    <!-- Carousel -->
                    <hooper :progress="true"  :infiniteScroll="true" :autoPlay="true" :transition="2000" :playSpeed="5000" :hoverPause="true">
                        <slide v-for="movie in movies" :key="movie.id"   style="position: relative;">
                            <div>
                                <router-link :to="{ path: '/movie', query: { movieId: movie.id }}">
                                    <img :src="movie.imageOfCarousel" />                                
                                    <span class="carouselimgtext">
                                        {{movie.title}}<br>
                                    </span>
                                </router-link>
                            </div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
            </div>
      </div>
</template>

<style>
.carousel{
    width: 90vw;
    height: 100%;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
}
.img-bg{
    width:100vw;
    
}
.carousel .hooper{
    height: 90vh;
    object-fit: contain;
}

@media screen and (orientation: portrait){
    .carousel .hooper{
        height: 30vh;
    }
}

.bigimgmovies{
    background-color: #000;
    height: 550px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 15px;
}
.bigimginnerbckg{
    background: linear-gradient(-180deg,transparent 50%,rgba(0,0,0,.68) 85%,#000);
    display: flex;
    /*position: absolute;*/
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.square {
  width: .7em;
  height: .7em;
  margin: .5em;
  display: inline-block;
}

.my-custom-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 10px; /* demo only */
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

.my-custom-dropdown select[disabled] {
  color: rgba(0,0,0,.3);
}

.my-custom-dropdown select[disabled]::after {
  color: rgba(0,0,0,.1);
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
.searchcontainer{
    justify-content: center;
    align-items: center;
    width: 100%;
}
.searchinput{
    width: 50%;
    display: flex;
    flex-direction: row;
}
.carousel .hooper-slide{
    width: 100%!important;
}
.carouselimgtext{
    position: absolute; 
    left: 0;
    font-size: 14px;
    color: white!important;
    background: rgba(116, 26, 26, 0.7); 
    padding: 5px 20px;
    margin: 5px 0px 0px 5px;
    border-radius: 3px;
    opacity: 0.8;
}
.hooper {
  margin: 15px;
}
.hooper span {
  color: #c21c1c;
  font-size: 14px;
  margin-bottom: 5px;
}
.hooper img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}
.hooper-next, .hooper-prev {
  padding: 1em 0em !important;
}
#bookingButton{  
  visibility: hidden;
}
.bookingButtonBox{
  display: inline-block;
  vertical-align: middle;
}
.book-btn{    
  width: 200px;
  padding: 12px;
  border-radius: 6.35%;
  background-color: #C62828;
  color: #fff;
  border: #C62828;
}
#dateDropdown{
  visibility: hidden;
}
</style>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";
import HooperSlider from "@/components/HooperSlider.vue";
//import func from '../vue-temp/vue-editor-bridge';

export default {
  data(){
    return {
      selectedDate: 0,
      selectedMovieId: 0,
      selectedShowtimeId: 0,
      currentDate: new Date()
    };
  },
  mounted() {

  },
  computed: {
    movies() { //ändrad till att använda getter
        return this.$store.getters.getMovies
    },
    showtimesByMovieId(){
        return this.$store.getters.getAllShowtimesByMovieId(this.selectedMovieId).filter(showtime => showtime.startDatetime > this.currentDate)
    },
    randommovie: function (){
        //return this.$store.state.movie
        return this.$store.getters.getMovieByID(String(Math.floor(Math.random()*(5-1+1)+1)))
    },
    /*dateshowtimes: function (){

      let myday = new Date(2020, 2, 2)

      return this.$store.getters.getAllShowtimesByDate(myday)
    }*/
    /*
    bookedSeats: function (){
      return this.$store.getters.getBookedSeats(2)
    }
    */
  },
  created() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("pullShowtimes");
    //store.dispatch('incrementAsync', {
    //amount: 10
    
    /*this.$store.dispatch("publishAuditoriums")
    this.$store.dispatch("pullShowtimes")
    this.$store.dispatch("pullBookings", {showtimeId: 1})*/
    //this.$store.dispatch("publishBookings", {showtimeId: 1})
    
    //his.$store.dispatch("getMovie", String(Math.floor(Math.random()*(5-1+1)+1)));
  },
  methods: {
    /*publishMovies() {
      this.$store.dispatch("publishMovies");
    },*/
    showNavMenu: function() {
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("close-menu-button").style.visibility = "visible";
      document.getElementById("show-menu-button").style.display = "none";
    },
    closeNavMenu: function() {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("close-menu-button").style.visibility = "hidden";
      document.getElementById("show-menu-button").style.display = "block";
    },
    getSelectedShowtimeId: function (){
      this.selectedShowtimeId = document.getElementById("showtimeSelect").options[document.getElementById("showtimeSelect").selectedIndex].id;
      if (this.selectedShowtimeId > 0){
        document.getElementById('bookingButton').style.visibility= "visible";
      } else {
        document.getElementById('bookingButton').style.visibility= "hidden";
      }
    },
    getSelectedMovie: function(){
      this.selectedMovieId = document.getElementById("moviesDropdown").options[document.getElementById("moviesDropdown").selectedIndex].id;
      if(this.selectedMovieId > 0){
        document.getElementById('dateDropdown').style.visibility= "visible";
      }
      document.getElementById('bookingButton').style.visibility= "hidden";
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
      let showtimeHours=(showtimestDT.getHours() < 10 ? '0' : '') +showtimestDT.getHours();    
      let showtimeMinutes=(showtimestDT.getMinutes() < 10 ? '0' : '') +showtimestDT.getMinutes();      
      return showtimestDT.getDate()+'/'+(showtimestDT.getMonth()+1)+ ' '+showtimeHours +':'+showtimeMinutes+' '+dayName;
    }
    },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    HooperSlider
  }
};
</script>