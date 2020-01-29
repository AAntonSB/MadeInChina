<template>
        <div class="flexdirectioncolumn">
            <!-- Big picture with search -->
            <div class="bigimgmovies">
                <div class="bigimginnerbckg"></div>
            </div>
            <!-- Hooper -->
            <div class="flexcenter" style="margin: 15px 0px;">
                <HooperSlider style=" width:70vw;" msg="Text"/>
            </div>

            <div class="flexcenter">
                <div class="carousel">
                    <!-- Carousel -->
                    <hooper :progress="true"  :infiniteScroll="true" :autoPlay="true" :transition="800" :playSpeed="3000" :hoverPause="true">
                        <slide v-for="movie in movies" :key="movie.id">
                            <router-link :to="{ path: '/movie', query: { movieId: movie.id }}">
                                <img :src="movie.imageOfCarousel" />
                            </router-link>
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
    width: 80%;
    height: 100%;
    padding-bottom: 30px;
}
.carousel .hooper{
    height: 78vh!important;
    object-fit: contain;
}
@media only screen and (max-width: 1300px)  {
  .carousel .hooper{
    height: 70vh!important;
    }  
}
@media only screen and (max-width: 1000px)  {
    .carousel .hooper{
        height: 50vh!important;
    }
    .hooper{
        width: 95%!important;
    }
}
@media only screen and (max-width: 750px)  {
  .carousel .hooper{
    height: 45vh!important;
    }  
}
@media only screen and (max-width: 600px)  {
  .carousel .hooper{
    height: 40vh!important;
    }  
}
@media only screen and (max-width: 400px)  {
  .carousel .hooper{
    height: 30vh!important;
    }  
}
.bigimgmovies{
    background-image: url('https://catalog.cinema-api.com/images/ncg-images/85125f023d564412b78598aecc388c4e.jpg?width=1920&version=5FFD6A056267F02198B2ABDD2DCAD9F1');
    background-color: #000;
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 15px;
}
.bigimginnerbckg{
    background: linear-gradient(-180deg,transparent 50%,rgba(0,0,0,.68) 85%,#000);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<script>
import { Hooper, 
        Slide,
        Navigation as HooperNavigation,
        Pagination as HooperPagination 
} from 'hooper'
import 'hooper/dist/hooper.css'
import HooperSlider from '@/components/HooperSlider.vue'
//import func from '../vue-temp/vue-editor-bridge';

export default {
    computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  created() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    publishMovies() {
      this.$store.dispatch("publishMovies");
    },
    showNavMenu: function(){
      document.getElementById("mySidenav").style.width = "200px";      
      document.getElementById("close-menu-button").style.visibility = "visible";
      document.getElementById("show-menu-button").style.display = "none";
    },
    closeNavMenu: function(){
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("close-menu-button").style.visibility = "hidden";
      document.getElementById("show-menu-button").style.display = "block";
    }
  },
  components: { Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    HooperSlider
  }
}
</script>
