<template>
<div class="row">
       <!-- <section v-for="movie in movies" v-bind:key="movie.title"> -->
    <div v-if="currenttickets.length > 0">
    <h2 class="ticketheader">Aktuella biljetter</h2>        
    <section v-for="show in currenttickets" v-bind:key="show">
    
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
            
            <h6 class="col s12">{{show.title}} {{show.dateformat}}</h6>
            <h6 class="col s12">>Tid: {{show.timeformat}}  </h6>
            <h6 v-for="row in show.seats" v-bind:key="row" class="col s12">Rad: {{ row.row }}, stolsnummer: {{ row.seats }}</h6>
            <h6>>Bokningsnummer: #{{show.bookingnumber}}</h6>
            <h6>>Pris: {{ show.price }}:-</h6>
            </div>
        </div> 
    </div>
    </section>
    </div>

    <div v-if="oldtickets.length > 0">
    <h2 class="ticketheader">Tidigare biljetter</h2>        
    <section v-for="show in oldtickets" v-bind:key="show">
    
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
            
            <h6 class="col s12">{{show.title}} {{show.dateformat}}</h6>
            <h6 class="col s12">>Tid: {{show.timeformat}}  </h6>
            <h6 v-for="row in show.seats" v-bind:key="row" class="col s12">Rad: {{ row.row }}, stolsnummer: {{ row.seats }}</h6>
            <h6>>Bokningsnummer: #{{show.bookingnumber}}</h6>
            <h6>>Pris: {{ show.price }}:-</h6>
            </div>
        </div> 
    </div>
    </section>
    </div>

    </div>

</template>
<script>

//import { functions } from 'firebase'
import * as firebase from "firebase/app";
import "firebase/auth";
//import { db} from '@/firebase';
export default {
    data(){
        return{

            allshowtimes: null,

            alluserbookings: null,

            currenttoday: null,

            listoftickets: null,

            allmovies: null,
        }
    },
 computed:{


    oldtickets() {

       return this.listoftickets.filter(ticket => ticket.startDatetime.getTime() < this.currenttoday.getTime())

    },
    
    currenttickets() {

        return this.listoftickets.filter(ticket => ticket.startDatetime.getTime() > this.currenttoday.getTime())

    },
},

created(){
    //this.$store.dispatch("getMovies")
    this.$store.dispatch("getBookings")
    this.$store.dispatch("pullShowtimes")


    this.currenttoday = this.setTodaysDate()
    this.setallmovies()
    this.alluserbookings = this.getUserBookings()
    this.allshowtimes = this.getShowtimes()
    this.listoftickets = this.getuniquebookings(this.alluserbookings, this.allshowtimes, this.allmovies)
    

},
methods:{

    getShowtimes: function() {

        let tempshowtimes = this.$store.getters.getShowTimes
        
        return tempshowtimes

    },

    getUserBookings: function() {
        
        let allbookings = this.$store.getters.getBookings

        let userbookings = allbookings.filter(booking => booking.userId == firebase.auth().currentUser.uid)

        return userbookings

    },

    setallmovies: function() {

        this.allmovies = this.$store.getters.getMovies

    },

    setTodaysDate: function(){

        //let currentdate = new Date()
        let currentdate = new Date(2020, 2, 17)

        let currentyear = currentdate.getFullYear()
        let currentmonth = currentdate.getMonth()
        let currentday = currentdate.getDate()

        return new Date(currentyear, currentmonth, currentday)

    },

    getuniquebookings: function(listofbookings, listofshowtimes, listofmovies){ 

        //console.log(listofshowtimes.find(show => show.showtimeId == 183))

        let uniquebookings = []
        let templist = []

        let swedishweek = [
        'söndag',
        'måndag',
        'tisdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lördag'
        ]

        for (let id in listofbookings){

            if (uniquebookings.includes(listofbookings[id].bookingNumber) == false){

                uniquebookings.push(listofbookings[id].bookingNumber)

                let bookedtickets = listofbookings.filter(ticket => ticket.bookingNumber == listofbookings[id].bookingNumber)

                let data = {}
                let currentshowtime = listofshowtimes.find(show => show.showtimeId == listofbookings[id].showtimeId)
                let currentmovie = listofmovies.find(film => film.id == currentshowtime.movieId)
                let month = currentshowtime.startDatetime.getMonth() + 1
                let day = currentshowtime.startDatetime.getDate()
                let weekday = swedishweek[currentshowtime.startDatetime.getDay()]
                let hour = "" + currentshowtime.startDatetime.getHours()
                let minutes = "" + currentshowtime.startDatetime.getMinutes()

                if (hour.length < 2){
                    hour = "0" + hour
                }

                if (minutes.length < 2){
                    minutes = "0" + minutes
                }

                data.bookingnumber = listofbookings[id].bookingNumber
                data.showtimeId = listofbookings[id].showtimeId
                data.title = currentmovie.title //
                data.startDatetime = currentshowtime.startDatetime
                data.dateformat = weekday + " " + day + "/" + month
                data.timeformat = hour + ":" + minutes

                let temptotalprice = 0
                let seatsperrow = {}

                for (let ticket in bookedtickets){

                    temptotalprice += bookedtickets[ticket].price

                    if (seatsperrow.hasOwnProperty(bookedtickets[ticket].row)){

                        seatsperrow[bookedtickets[ticket].row].seats += " ," + bookedtickets[ticket].col
                    }else{

                        seatsperrow[bookedtickets[ticket].row] = {row: bookedtickets[ticket].row, seats: ""}
                        seatsperrow[bookedtickets[ticket].row].seats += bookedtickets[ticket].col
                    }
                }

                data.price = temptotalprice
                data.seats = seatsperrow

                templist.push(data)
            }
        }
        return templist
    },

}   

}

</script>

<style>
*{
    margin: 0;
    padding: 0;
}

.ticketheader{
    color:white;

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