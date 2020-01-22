
<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-wrapper">
          <button id="show-menu-button" v-on:click="showNavMenu()">
            <i id="navMenuIcon" class="material-icons">menu</i>
          </button>
          <button id="close-menu-button" v-on:click="closeNavMenu()">
            <i id="navMenuIcon" class="material-icons">close</i>
          </button>
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">Logga in</a>
            </li>
          </ul>
        </div>
        <div id="mySidenav" class="sidenavmenu">
          <a href="#"><i class="material-icons account-icon">account_circle</i></a>
          <a href="#">About</a>
          <a href="#">Filmer</a>
          <a href="#">Medlem</a>
        </div>
      </nav>
    </header>
    <div class="container">
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

      <router-view />
    </div>
    <footer>
      <div class>
        <div class="row">
          <div class="col l4">
            <h5 class="white-text">Om oss</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Kontakta oss</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Jobba hos oss</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Vår historia</a>
              </li>
            </ul>
          </div>
          <div class="col l4">
            <h5 class="white-text">Sociala medier</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Facebook</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Instagram</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="col l4">
            <h5 class="white-text">Medlemsskap</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Logga in</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Bli medlem</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Medlemsförmåner</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">© 2018 Copyright Text</div>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  background-color: #000;
  font-family: sans-serif;
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#app {
  flex-grow: 1;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

header {
  color: #fff;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: fixed;
  z-index: 10;
  width: 100%;
}
nav {
  background-color: #c02215;
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

.container {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15px;
}

.imgholder {
  max-height: 300px;
  width: fit-content;
  display: inline-block;
  margin-right: 15px;
}

.arrowbtn,
.abtn {
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

footer {
  background-color: #c02215;
  color: #fff;
}
.row .col {
  width: 33%;
}
.hooper {
  margin: 15px;
}

.hooper span {
  color: #c21c1c;
  font-size: 14px;
  margin-bottom: 5px;
  max-width: 160px;
}
.hooper img {
  height: 100%;
}
.hooper-next, .hooper-prev {
  padding: 1em 0em !important;
}
.hooper-pagination{
  padding: 0px !important;
}
.icon {
  width: 30px;
  height: 30px;
  fill: red;
}
#show-menu-button, #close-menu-button {
  visibility: hidden;
}
button:focus {
  background-color: transparent;
}

@media only screen and (max-width: 992px) {
  .hide-on-med-and-down {
    display: none !important;
  }
  
  #show-menu-button{
    visibility: visible;
  }
}
#show-menu-button, #close-menu-button {
  float: left;
  height: 50px;
  display: flex;
  background-color: #c02215;
  border: none;    
  margin-left: 3%;
}

.material-icons {
    color: white;
}

.sidenavmenu {
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #c02215;
  overflow-x: hidden;
  transition: 0.5s;
  color: #fff;
  margin-top: 55px;
}

.sidenavmenu a {
  padding: 8px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.sidenavmenu a:hover {
  background-color: #9f2727;
}

.sidenavmenu .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.account-icon{
  font-size: 40px !important;
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
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
};
</script>