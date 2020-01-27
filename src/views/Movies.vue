<template>
        <div class="flexdirectioncolumn">
            <!-- Big picture with search -->
           
            <!-- Hooper -->
            <div class="flexcenter">
                <HooperSlider style=" width:70vw;" msg="Text"/>
            </div>

            <div class="flexcenter">
                <div class="carousel">
                    <!-- Carousel -->
                    <hooper :progress="true" :autoPlay="true" :playSpeed="3000">
                        <slide v-for="movie in movies" :key="movie.id">
                            <img :src="movie.imageOfCarousel" />
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
    width: 70%;
    height: 100%;
    padding-bottom: 30px;
}
.img-bg{
    width:100vw;
    height: 70vh;
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
