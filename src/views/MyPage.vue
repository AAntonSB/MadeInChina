<template>
<div class="row">
       <!-- <section v-for="movie in movies" v-bind:key="movie.title"> -->
    <div v-if="currenttickets.length > 0">
    <h2 font-color="red">Aktuella biljetter</h2>        
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
            <h6 v-for="row in show.seats" v-bind:key="row" class="col s12">Rad: {{ row.row }}, stolsnummer {{ row.seats }}</h6>
            <h6>>Bokningsnummer: #{{show.bookingnumber}}</h6>
            <h6>>Pris: {{ show.price }}:-</h6>
            </div>
        </div> 
    </div>
    </section>
    </div>

    <div v-if="oldtickets.length > 0">
    <h2 font-color="red">Tidigare biljetter</h2>        
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
            <h6 v-for="row in show.seats" v-bind:key="row" class="col s12">Rad: {{ row.row }}, stolsnummer {{ row.seats }}</h6>
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
//import * as firebase from "firebase/app";
//import "firebase/auth";
//import { db} from '@/firebase';
export default {
    data(){
        return{

            currenttoday: null,

            today: new Date(2020, 2, 2),

            groups: null,

            showtimes: [

                {   
                    showtimeId: 1,
                    auditoriumName: "Stora salongen",
                    movieID: 1001,
                    length: 122,
                    startDatetime: new Date(2020, 2, 2, 19, 0),
                    film: "Joker",
                },
                {   
                    showtimeId: 2,
                    auditoriumName: "Lilla salongen",
                    movieID: 1002,
                    length: 103,
                    startDatetime: new Date(2020, 2, 3, 19, 0),
                    film: "Frozen 2",
                },

            ],

            bookings: [
                {
                    bookingId: 1,
                    showtimeId: 1,
                    row: 1,
                    col: 1,
                    price: 75,
                    bookingNumber: 1001,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
                {
                    bookingId: 2,
                    showtimeId: 1,
                    row: 1,
                    col: 2,
                    price: 75,
                    bookingNumber: 1001,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
                {
                    bookingId: 3,
                    showtimeId: 1,
                    row: 1,
                    col: 3,
                    price: 75,
                    bookingNumber: 1001,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
                {
                    bookingId: 4,
                    showtimeId: 1,
                    row: 2,
                    col: 1,
                    price: 75,
                    bookingNumber: 1002,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
                {
                    bookingId: 5,
                    showtimeId: 2,
                    row: 3,
                    col: 5,
                    price: 75,
                    bookingNumber: 1003,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
                {
                    bookingId: 6,
                    showtimeId: 2,
                    row: 3,
                    col: 6,
                    price: 75,
                    bookingNumber: 1003,
                    userId: null,
                    bookingDatetime: null,
                    ticketType: 1,
                },
            ]

        }
    },
 computed:{


    oldtickets() {

       return this.groups.filter(ticket => ticket.startDatetime.getTime() < this.currenttoday.getTime())

    },
    
    currenttickets() {

        return this.groups.filter(ticket => ticket.startDatetime.getTime() > this.currenttoday.getTime())

    },
    /* 
    showtimes() {
        return this.$store.state.showtimes;
        
    }, 
    movies() {
        return this.$store.state.movies;
        }
    */
},

created(){
    //this.$store.dispatch("getMovies");
    //this.$store.dispatch("getShowTimes")
    //this.$store.dispatch("pullShowtimes")
    console.log("Creating mypage")
    //console.log(this.getuniquebookings())
    this.groups = this.getuniquebookings(this.bookings, this.showtimes)
    //this.user.email = firebase.auth().currentUser.email
    //console.log(firebase.auth().currentUser.email)
    //console.log(this.user.email)
    this.currenttoday = this.setTodaysDate()
    

},
methods:{

    setTodaysDate: function(){

        //let currentdate = new Date()
        let currentdate = new Date(2020, 2, 2)

        let currentyear = currentdate.getFullYear()
        let currentmonth = currentdate.getMonth()
        let currentday = currentdate.getDate()

        return new Date(currentyear, currentmonth, currentday)

    },

    getuniquebookings: function(listofbookings, listofshowtimes){ //, listofshowtimes

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
        //for (let id in this.bookings){    

            //if (uniquebookings.includes(this.bookings[id].bookingNumber) == false){
            if (uniquebookings.includes(listofbookings[id].bookingNumber) == false){

                uniquebookings.push(listofbookings[id].bookingNumber)
                //uniquebookings.push(this.bookings[id].bookingNumber)

                let bookedtickets = listofbookings.filter(ticket => ticket.bookingNumber == listofbookings[id].bookingNumber)
                //let bookedtickets = this.bookings.filter(ticket => ticket.bookingNumber == this.bookings[id].bookingNumber)

                let data = {}

                let currentshowtime = listofshowtimes.find(show => show.showtimeId == listofbookings[id].showtimeId)
                //let currentshowtime = this.showtimes.find(show => show.showtimeId == this.bookings[id].showtimeId)

                let month = currentshowtime.startDatetime.getMonth() + 1
                let day = currentshowtime.startDatetime.getDay() + 1
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
                //data.bookingnumber = this.bookings[id].bookingNumber
                data.showtimeId = listofbookings[id].showtimeId
                //data.showtimeId = this.bookings[id].showtimeId
                data.title = currentshowtime.film
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