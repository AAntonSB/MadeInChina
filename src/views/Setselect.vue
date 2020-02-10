<template>
    <div class="flexdirectioncolumn bookingcontainer">
        <div class="flexdirectioncolumn bookingbox">
            <h1>Platser</h1>
            <div>{{getAuditorium[0].seatsPerRow}}</div>
        </div>
    </div>
</template>

<style scoped>
.flexdirectioncolumn{
  align-items: center;
}
</style>

<script>
export default {
  data(){
    return {
      showtimeId: this.$route.query.showtimeId
    }
  },
  mounted() {
    },
  computed: {
        getAuditoriumIdByShowtimeId(showtimeId){
            //return this.$store.state.getAuditoriumIdByShowtimeId(showtimeId)
            return showtimeId
        },
        getAuditorium() {
            return this.$store.getters.getAuditorium(1)
        },
    },
  created() {
        //this.$store.dispatch("auditoriums");
    },
  methods: {    
    },
  components: {
    }
};
</script>