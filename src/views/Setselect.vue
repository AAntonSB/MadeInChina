<template>
    <div class="flexdirectioncolumn bookingcontainer">
        <div class="flexdirectioncolumn bookingbox">
            <h1>Platser</h1>
            <div></div>
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
  mounted() {
    },
  computed: {
        getAuditorium() {
            //alert()
            //return this.$store.state.getAuditorium('1')
            return null
        },
    },
  created() {
        this.$store.dispatch("auditoriums");
    },
  methods: {    
    },
  components: {
    }
};
</script>