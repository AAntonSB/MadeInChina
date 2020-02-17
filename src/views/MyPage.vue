<template>
<div class="row">
       <!-- <section v-for="movie in movies" v-bind:key="movie.title"> -->
           
 <section v-for="show in groups" v-bind:key="show">
    
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
//import { functions } from 'firebase'
//import * as firebase from "firebase/app";
//import "firebase/auth";
//import { db} from '@/firebase';
export default {
    data(){
        return{

            groups: null,

            showtimes: [

                {   
                    showtimeId: 1,
                    auditoriumName: "Stora salongen",
                    movieID: 1001,
                    length: 122,
                    date: new Date(2020, 2, 2, 19, 0),
                    film: "Joker",
                },
                {   
                    showtimeId: 2,
                    auditoriumName: "Lilla salongen",
                    movieID: 1002,
                    length: 103,
                    date: new Date(2020, 2, 2, 19, 0),
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

     sortShowtimes() {

         return "dude"

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
    console.log(this.getuniquebookings())
    //this.groups = this.createBookingGroups()
    //this.user.email = firebase.auth().currentUser.email
    //console.log(firebase.auth().currentUser.email)
    //console.log(this.user.email)
    

},
methods:{

    createBookingGroups: function(){

        let bookingNumbers = this.getuniquebookings()

        let groups = {}

        for (let booking in bookingNumbers){

            //console.log(this.bookings.filter(ticket => ticket.bookingNumber == bookingNumbers[booking]))

            groups[bookingNumbers[booking]] = this.bookings.filter(ticket => ticket.bookingNumber == bookingNumbers[booking].bookingnumber)
            
        }

        return groups

    },

    getuniquebookings: function(){

        //let bookingids = this.showtimes.map( show => { return show.bookingNumber })
        let uniquebookigns = []
        let templist = []
        //console.log(templ)

        for (let id in this.bookings){

            //console.log("ID is " + id)

            

            if (uniquebookigns.includes(this.bookings[id].bookingNumber) == false){

                console.log(this.bookings.filter(ticket => ticket.bookingNumber == this.bookings[id].bookingNumber).map(
                    ticket => { return {row: ticket.row, col: ticket.col}}
                ))

                uniquebookigns.push(this.bookings[id].bookingNumber)
                templist.push({bookingnumber: this.bookings[id].bookingNumber,
                             showtimeId: this.bookings[id].showtimeId,
                             })
            }
        }
        return templist//this.showtimes.map( show => { return show.bookingNumber })
    },
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