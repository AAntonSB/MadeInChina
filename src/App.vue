
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/movies/Joker">Joker</router-link> |
      <router-link to="/movies/Frozen2">Frozen2</router-link>
      <router-link to="/movies/BadBoys4Life">Bad Boys For Life</router-link>
      <router-link to="/movies/Cats">Cats</router-link>
      <router-link to="/movies/EnDelAvMittHjarta">En del av Mitt Hjärta</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  data(){
    return{
    image: "",

    }
  },
  
  methods: {

    
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
