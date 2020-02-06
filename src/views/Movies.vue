<template>
        <div class="flexdirectioncolumn">
            <!-- Big picture with search -->

            <div class="bigimgmovies">
                  <div class="bigimginnerbckg">
                      <div class="searchcontainer">
                        <span class="my-custom-dropdown">
                            <select>
                                <option>Sök via dag</option>
                                <option  v-for="index in 7" :key="index">{{setDateWithIndex(index)}}</option>
                            </select>
                        </span>
                        <span class="my-custom-dropdown">
                            <select>
                                <option>Sök via film</option>
                                <option  v-for="movie in movies" :key="movie.id">{{movie.title}}</option>
                            </select>
                        </span>
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
    position: absolute;
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
  mounted() {

  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    movie(){
            return this.$store.state.movie
    }
  },
  created() {
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getMovie", String(Math.floor(Math.random()*(5-1+1)+1)));
  },
  methods: {
    publishMovies() {
      this.$store.dispatch("publishMovies");
    },
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
    setDateWithIndex: function(x){
        // Getting required values
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth()
        let day = today.getDate()

        // Creating a new Date (with the delta)
        let finalDate = new Date(year, month, day + x-1)

        day = ''+finalDate.getDate();
        //let monthIndex = finalDate.getMonth();
        month = ''+(finalDate.getMonth()+1)
        year = finalDate.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return day+'/'+month;
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
