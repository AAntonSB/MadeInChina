<template>
<div class="row">
       <!-- <section v-for="movie in movies" v-bind:key="movie.title"> -->
           
 <section v-for="show in showtimes" v-bind:key="show">
    
    <div class="main-body row">
       <div class="relative">
        
           
        <!-- <svg class="defs-only">
            <filter id="monochrome" 
            color-interpolation-filters="sRGB"
            x="0" y="0" height="100%" width="100%">
            <feColorMatrix type="matrix"
            values="1.00 0 0 0 0 
            0.80 0 0 0 0 
            0.65 0 0 0 0
            0    0 0 1 0" />
            </filter>
        </svg> -->
       
            <div class="row">
            <h6 class="col s12">Mån 3/4</h6>
            <h6 class="col s12">>Tid: 18:00</h6>
            <h6 class="col s12">Stolsnummer: rad 4, stol 5</h6>
            <h6>>Bokningsnummer: #213242545</h6>
            <h6>>Pris: 85:-</h6>
            </div>
        </div> 
    </div>
    </section>
    </div>

</template>
<script>
export default {
    data(){
        return{

        }
    },
 computed:{
 showtimes() {
      return this.$store.state.showtimes;
      
 }, 
  movies() {
      return this.$store.state.movies;
    }    
},

created(){
    this.$store.dispatch("getMovies");
    this.$store.dispatch("getShowTimes")
    this.$store.dispatch("pullShowtimes")
    

},
methods:{
    setDateWithIndex: function(x){
        // Getting required values
        let today = new Date()
        let year = today.getFullYear()
        let month = today.getMonth()
        let day = today.getDate()

        // Creating a new Date (with the delta)
        let finalDate = new Date(year, month, day + x-1)

        day = ''+finalDate.getDate();
        //let monthIndex = finalDate.getMonth();
        month = ''+(finalDate.getMonth()+1)
        year = finalDate.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        let days = [
        'söndag',
        'måndag',
        'tisdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lördag'
        ]

        let dayName = days[finalDate.getDay()]

        return day+'/'+month +' '+ ' - '+dayName;
        }
}   

}

</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.ticket{
    -webkit-filter: url(#monochrome);
  filter:  url(#monochrome);
  justify-content: center;
    align-items: center;
}

.test{
    position: absolute;
}

.relative{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 446px;
    height: 223px;
    background-image: url("https://www.pngkey.com/png/full/19-196604_large-raffle-ticket-printable-raffle-tickets.png");
    fill: red;
}


.main-body{
    display:flex;
    justify-content: center;
    align-items: center;
}

.defs-only{
 
}


</style>