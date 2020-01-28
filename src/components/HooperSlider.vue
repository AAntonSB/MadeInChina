<template>
    <hooper :infiniteScroll="true" :itemsToShow="4" style="min-height: 300px; padding-bottom: 30px;">
        <slide v-for="movie in movies" :key="movie.document">
          <div class="hooper-img">
            <router-link :to="{ path: '/movie', query: { movieId: movie.id }}">
              <img :src="movie.image" />
            </router-link>
          </div>
          <div>
            <span>{{movie.title}}</span>
          </div>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
</template>
<style scoped>
.hooper-img{
    object-fit: contain;
}
@media only screen and (max-width: 1100px)  {
  .hooper-img{
    height: 90%!important;
    }  
}
@media only screen and (max-width: 850px)  {
  .hooper-img{
    height: 80%!important;
    }  
}
@media only screen and (max-width: 700px)  {
  .hooper-img{
    height: 70%!important;
    }  
}
</style>
 <script>
import { Hooper, 
        Slide,
        Navigation as HooperNavigation,
        Pagination as HooperPagination 
} from 'hooper';
import 'hooper/dist/hooper.css';
//import func from '../vue-temp/vue-editor-bridge';

export default {
  name: 'HooperSlider',
  props: {
    msg: String
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: { Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
};
</script>