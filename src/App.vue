
<template>
  <div id="app">
    <header>
      <nav>
    <div class="nav-wrapper">
      <button id="menu-button"><i class="material-icons">menu</i></button>
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
    </header>
    <div class="container">

      <hooper :infiniteScroll="true" :itemsToShow="4" style="min-height: 300px;">      
          <slide v-for="movie in movies" :key="movie.document">
            <div>
              <div class="hooper-img">
                <router-link :to="{ name: 'movie', params: { movieId: movie.id }}">
                  <img :src="movie.image">
                </router-link>
              </div>  
              <div><span>{{movie.title}}</span></div>
            </div>         
          </slide>
          <router-view/>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    
    <router-view/>
    </div>
    <footer></footer>
  </div>
</template>

<style>
body{
    background-color: #000;
    font-family: sans-serif;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

#app {
  flex-grow: 1;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

header{    
    background-color:#C02215;
    color: #fff;
    height: 49px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
    z-index: 10;
    width: 100%;
    
}
nav{
  background-color:#C02215;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.box{    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 15px;
}
#gallery {
    display: flex;
    overflow-x: auto;
    width: 96%;
    height: 305px;
}
#gallery:hover{
    overflow-x: auto; 
}
#gallery::-webkit-scrollbar {    
    display: none;
}
.imgholder{
    max-height: 300px;
    width: fit-content;
    display: inline-block;
    margin-right: 15px;  
}

.arrowbtn, .abtn {
    text-decoration: none;
    text-align: center;
    display: inline-block;
    padding: 8px 16px;
    margin: 0 10px;
    background-color: #cae8cb;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 50%;
}

footer{
    background-color:#C02215;
    color: #fff;
    height: 50px;
}
.hooper{
  margin: 15px;
}

.hooper span{
  color: #c21c1c;
  font-size: 14px;
  margin-bottom: 5px;
  max-width: 160px;
}
.hooper img{
  height: 100%;
}

.icon {
  width: 30px;
  height: 30px;
  fill: red;
}
 #menu-button{
    visibility: hidden;
  } 
button:focus{background-color:transparent;}

@media only screen and (max-width: 992px){
  .hide-on-med-and-down {
    display: none !important;
  } 
   #menu-button{
     visibility:visible;
     float: left;
     height: 50px;
     display: flex;
     background-color: #C02215;
     border: none;
  } 
  .material-icons{
    color: white;
    
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

export default {
    computed: {
        movies(){
        return this.$store.state.movies
        }
      },
    created(){
          this.$store.dispatch("getMovies")
      },
    methods:{
          publishMovies(){
              this.$store.dispatch("publishMovies")
          },
          nextImg: function(){
            document.getElementById('gallery').scrollLeft += 200;
          },
          prevImg: function(){
            document.getElementById('gallery').scrollLeft -= 200;
          }
      },
      components: {
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination
      }
}
</script>