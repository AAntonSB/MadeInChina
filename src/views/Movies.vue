<template>
    <div>

        <div class="flexdirectioncolumn">
            <!-- Big picture with search -->
            

            <!-- Hooper -->
            <HooperSlider msg="Text"/>

            <!-- Carousel -->
            <hooper :progress="true" :autoPlay="true" :playSpeed="3000" style="width: 100%; height:100%;">
                <slide v-for="movie in movies" :key="movie.id">
                <div>
                    <img :src="movie.imageOfCarousel" />
                    
                </div>
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>

      </div>
    </div>
</template>

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

<style>
.img-bg{
    width:100vw;
    height: 70vh;
}
</style>