<template>
    <hooper :infiniteScroll="true" :itemsToShow="4" style="min-height: 300px;">
        <slide v-for="movie in movies" :key="movie.document">
          <div>
            <div class="hooper-img">
              <router-link :to="{ name: 'movie', params: { movieId: movie.id }}">
                <img :src="movie.image" />
              </router-link>
            </div>
            <div>
              <span>{{movie.title}}</span>
            </div>
          </div>
        </slide>
        <router-view />
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
</template>

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