<template>
  <div>

    <section v-for="movie in movies" v-bind:key="movie.title">
      <img :src="movie.image" alt="poster" />
    </section>
  </div>
</template>

<script>
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
    }
  }
};
</script>


<style>
.white{
  color: white;
  background-color: transparent;
}
.poster{
  cursor: pointer;
}
</style>