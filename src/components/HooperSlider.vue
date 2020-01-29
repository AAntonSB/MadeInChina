<template>
    <hooper :infiniteScroll="true" :itemsToShow="4" style="min-height: 300px; padding-bottom: 30px;">
        <slide v-for="movie in movies" :key="movie.document">
          <div class="hooper-img">
            <div  style="position: relative; display: inline-block;">
              <router-link :to="{ path: '/movie', query: { movieId: movie.id }}">
                <img :src="movie.image"/>
                <span class="hooperimgage">
                  {{movie.age}}
                </span>
                <span class="hooperimgtext">
                  {{movie.title}}
                </span>
              </router-link>              
              <span style="position: absolute; left: 0; width: 100%; ">
                <div v-for="onegenre in movie.genre" :key="onegenre.value">{{onegenre.value}}</div>
              </span>
            </div>   
          </div>          
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
</template>
<style scoped>
.hooper-img{
    object-fit: contain;
    width: 100%;
}
.hooperimgtext{
  position: absolute; 
  left: 0;  
  width: 100%; 
  bottom: 1px; 
  color: white;
  background: rgba(0, 0, 0, 0.7); 
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.hooperimgage{
  position: absolute; 
  left: 83%;  
  width: 25px;
  height: 25px;
  bottom: 50px;
  border: solid #efe911;
  background-color: rgba(0, 0, 0, 0.7); 
  border-radius: 50%;
  color: #efe911;
}

/*
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
*/

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