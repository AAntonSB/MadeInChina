
<template>
  <div id="app">
    <header>
<<<<<<< Updated upstream
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
=======
      <nav> <!-- navbar content here  --> </nav>
      <ul id="slide-out" class="sidenav">
        <li><div class="user-view">
          <div class="background">
            <img src="images/office.jpg">
          </div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
          <a href="#name"><span class="white-text name">user name</span></a>
          <a href="#email"><span class="white-text email">email adress</span></a>
        </div></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger" v-on:click="sideNavLoad()"><i class="material-icons">menu</i></a>
>>>>>>> Stashed changes
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
    <footer>
       <div class="">
            <div class="row">
              <div class="col l4">
                <h5 class="white-text">Om oss</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Kontakta oss</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Jobba hos oss</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Vår historia</a></li>
                 
                </ul>
              </div>
              <div class="col l4">
                <h5 class="white-text">Sociala medier</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Instagram</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Twitter</a></li>
                  
                </ul>
              </div>
              <div class="col l4">
                <h5 class="white-text">Medlemsskap</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Logga in</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Bli medlem</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Medlemsförmåner</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2018 Copyright Text
           
            </div>
          </div>
    </footer>
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
.hooper-next, .hooper-prev {
  padding: 1em 0em !important;
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
}
.row .col{
  width: 33%;
}
@media only screen and (min-width: 993px)
.row .col.offset-l2 {
    margin-left: 5px;
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
          sideNavLoad: function (){
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, options);
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