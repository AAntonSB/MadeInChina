<template>
  <div id="app">
    <header>
      <nav>
        <div class="nav-wrapper">
          <button id="show-menu-button" v-on:click="showNavMenu()">
            <i id="navMenuIcon" class="material-icons menu-button">menu</i>
          </button>
          <button id="close-menu-button" v-on:click="closeNavMenu()">
            <i id="navMenuIcon" class="material-icons menu-button">close</i>
          </button>
          
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">About</a>
            </li>
            <li>
              <a href="badges.html">Filmer</a>
            </li>
            <li>
              <a href="collapsible.html">Medlem</a>
            </li>
          </ul>

          <div class="nav-search">
             <div class="btn">
              <i class="material-icons search-icon">search</i>
            </div>
            <div class="search-box">
              <input type="text" class="search-input" placeholder="Search" />
            </div>
           
          </div>

          <a href="#">
            <i class="material-icons account-icon">account_circle</i>
          </a>
        </div>
        <div id="mySidenav" class="sidenavmenu">
          <a href="#">
            <i class="material-icons account-icon">account_circle</i>
          </a>
          <a href="#">About</a>
          <a href="#">Filmer</a>
          <a href="#">Medlem</a>
        </div>
      </nav>

      <div id="mySidenav" class="sidenavmenu">
        <a href="#">
          <i class="material-icons account-icon">account_circle</i>
        </a>
        <a href="#">About</a>
        <a href="#">Filmer</a>
        <a href="#">Medlem</a>
      </div>
    </header>

    <div class="containerapp">
      <router-view :key="$route.fullPath"></router-view>
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
            <h5 class="white-text">Medlem</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Logga in</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Bli medlem</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">Förmåner</a>
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
  margin: 0;
  padding: 0;
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
  margin: 0;
  padding: 0;
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

.nav-search {
  position:absolute;
  align-self: center;
  box-sizing: border-box;
  left: 10px;
}
.search-box {
  position: relative;
  display: inline-block;
  height: 50px; 
  left:10px; 
}
.btn{
  align-self: center;
  border-radius: 50%;
  width: 36px;
  background: rgba(255, 255, 255, 0.2); 
  padding: 0px;
  
}
.btn:hover
{
background-image:none;
background-color:rgba(255, 254, 254, 0.4); 
}

.search-icon{
  position:absolute;
  bottom:40%;
  display: flex; 
  height: 36px !important; 
  width: 36px;
  position:relative;
  display: flex;
  justify-content: center;
}

.containerapp {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
}
.flexdirectioncolumn {
  display: flex;
  flex-direction: column;
}

.flexdirectionrow {
  display: flex;
  flex-direction: row;
}

.flexcenter{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgholder {
  max-height: 300px;
  width: fit-content;
  display: inline-block;
  margin-right: 15px;
}
.brand-logo {
  text-align: center;
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
footer h5, footer{
  font-size: 12px!important;
}
@media  (min-width: 1000px) {
  footer h5, footer{
    font-size: 18px!important;
  }
}
.row .col {
  width: 33%;
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
  .nav-search{
    display: none;
  }
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

.menu-button {
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

.overlay{
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 50; /* Sit on top */
  left: 0px;
  top: 0px;
  background-color: rgb(0,0,0); /* Black fallback color */
  background-color: rgba(0,0,0, 0.75); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
.bookingcontainer{
  flex-grow: 1;
}
.bookingbox{
  flex-grow: 1;
  width: 50%;
  border-radius: 3px; 
  padding: 5px 0px 15px 0px;
  margin: 15px; 
  background-color: #efefef;
  justify-content: space-around;
}
.bookingbox h2{
  font-size: 2.56rem;
}
</style>


<script>
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
          },
              showNavMenu: function(){
      document.getElementById("close-menu-button").style.visibility = "visible";
      document.getElementById("mySidenav").style.width = "200px";      
      document.getElementById("show-menu-button").style.display = "none";
      },
    closeNavMenu: function(){
    
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("show-menu-button").style.display = "block";
      document.getElementById("close-menu-button").style.visibility = "hidden";
      
    }
      },
}
</script>