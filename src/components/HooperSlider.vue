<template>
    <hooper :infiniteScroll="true" :itemsToShow="4" style="height: 30%; padding-bottom: 30px;">
        <slide v-for="movie in movies" :key="movie.document">
          <div class="hooper-img">
            <div  style="position: relative; display: inline-block;">
              <router-link :to="{ path: '/movie', query: { movieId: movie.id }}">
                <img :src="movie.image"/>
                <span class="hooperimgage">
                  {{movie.age}}
                </span>
                <div class="hooperimgtext">
                  {{movie.title}}<br>
                  <span class="hooperimgtime">{{movie.time}}</span>
                </div>
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

@media screen and (orientation: portrait){
    .hooper{
        width: 90vw!important;
    }
    .hooper img {
      height: 30vw;
    }
}

.hooper-img{
    object-fit: contain;
    width: 100%;
}
.hooperimgtime{
  color: #ccc;
  font-size: 11px;
}

.hooperimgtext{
  position: absolute; 
  left: 0;  
  width: 100%; 
  font-size: 13px;
  font-weight: bold;
  bottom: 1px; 
  color: white;
  background: rgba(0, 0, 0, 0.7); 
  padding: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media (max-width: 780px) {
    .hooperimgtext {
        font-size: 11px;
    }
    .hooperimgtime{
      font-size: 10px;
    }
}

@media (max-width: 702px) {
    .hooperimgtext {
        font-size: 10px;
    }
    .hooperimgtime{
      font-size: 9px;
    }
}

@media (max-width: 724px) {
    .hooperimgtext {
        font-size: 9px;
    }
    .hooperimgtime{
      font-size: 8px;
    }
}

@media (max-width: 623px) {
    .hooperimgtext {
        font-size: 8px;
    }
    .hooperimgtime{
      font-size: 7px;
    }
}

.hooperimgage{
  position: absolute; 
  left: 83%;  
  width: 25px;
  height: 25px;
  bottom: 20%;
  border: solid #efe911;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  color: #efe911;
}

@media screen and (max-width: 500px){
  .hooperimgage{
    bottom: 30%;
    left: 70%!important;
    width: 20px;
    height: 20px;
    font-size: 10px;
  }

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