<template>
  <div id="app">
    <header class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <button id="show-menu-button" v-on:click="showNavMenu()">
            <i id="navMenuIcon" class="material-icons menu-button">menu</i>
          </button>
          <button id="close-menu-button" v-on:click="closeNavMenu()">
            <i id="navMenuIcon" class="material-icons menu-button">close</i>
          </button>

          <div id="rightMenu">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <router-link :to="{path: '/omoss', query: { typeId: 1 }}">Om oss</router-link>
            </li>
            <li>
              <router-link v-if="!loggedIn" to="/mypage"><i class="material-icons account-icon">account_circle</i></router-link>
            </li>
            <li>
              <router-link v-if="loggedIn" :to="{path: '/login', query: { typeId: 1 }}">Logga in</router-link>
              <i @click="signOut()" v-if="!loggedIn" class="signoutBtn material-icons account-icon">exit_to_app</i>
            </li>
          </ul>
          </div>


           <router-link to="/"><img id="logo" src="@/assets/filmvisarna.png"></router-link>

         <!-- <router-link to="/"><i class="material-icons logo-icon">movie_filter</i></router-link> -->

        </div>
        <div id="mySidenav" class="sidenavmenu">
          <router-link :to="{path: '/login', query: { typeId: 1 }}"><i class="material-icons account-icon">account_circle</i></router-link>
          <router-link :to="{path: '/omoss', query: { typeId: 1 }}">Om oss</router-link>
        </div>
      </nav>
    </header>

    <div class="containerapp">
      <router-view :key="$route.fullPath"></router-view>
    </div>

<div id="footerAnchor"> </div>
    <Footer />
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
  overflow-x: hidden;
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
  
  z-index: 5;
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

#logo{
  margin-top: 5px;
}

#rightMenu{
  margin-right: 20px;
}

.containerapp {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

.signoutBtn{
  cursor: pointer;
}

.icon {
  width: 30px;
  height: 30px;
  fill: red;
}
#show-menu-button,
#close-menu-button {
  visibility: hidden;
}
button:focus {
  background-color: transparent;
}
@media only screen and (max-width: 992px) {
  .nav-search {
    display: none;
  }
  .hide-on-med-and-down {
    display: none !important;
  }

  #show-menu-button {
    visibility: visible;
  }
}
#show-menu-button,
#close-menu-button {
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

.overlay {
  height: 100%;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 6; /* Sit on top */
  left: 0px;
  top: 0px;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.75); /* Black w/opacity */
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
.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}
</style>


<script>
import * as firebase from 'firebase'
import 'firebase/auth'
import Footer from "@/components/Footer.vue";
export default {
  data(){
    return{
      that: this,
      userState: () => firebase.auth().onAuthStateChanged,
      loggedIn: false
      }
  },
  computed: {
    /*movies() {
      return this.$store.state.movies;
    }*/
  },
  created() {
    this.userState = 1;
    this.$store.dispatch("getMovies");
    firebase.auth().onAuthStateChanged(user => {
      this.loggedIn = !!user;
    });
  },

  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "start" });
      } catch (err) {
        console.log(err);
      }
    },

    /*publishMovies() {
      this.$store.dispatch("publishMovies");
    },*/
    nextImg: function() {
      document.getElementById("gallery").scrollLeft += 200;
    },
    prevImg: function() {
      document.getElementById("gallery").scrollLeft -= 200;
    },
    showNavMenu: function() {
      document.getElementById("close-menu-button").style.visibility = "visible";
      document.getElementById("mySidenav").style.width = "200px";
      document.getElementById("show-menu-button").style.display = "none";
    },
    closeNavMenu: function() {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("show-menu-button").style.display = "block";
      document.getElementById("close-menu-button").style.visibility = "hidden";
    },

  },
  components: {
    Footer
  },
  watch: {
    userState(){
      let that = this;
 firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    that.loggedIn = false;
  } else {
    // No user is signed in.
        that.loggedIn = true;

  }
});
    }
  },
};
</script>