<template>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; flex-grow: 1;" class="">      
      <div class="flexdirectioncolumn  bookingbox">
        <div id="ticketSelectorSection">
          <div id="bookingPanel">
            <h2>Antal biljetter</h2><label>{{this.auditoriumSize-this.bookedSeatsCount}} kvar av {{this.auditoriumSize}}</label>
            <!-- Ordinary -->
            <div class="flexdirectionrow ticketSection">
              <div class="ticketTypeTextBox">
                <span class="ticketTypeText">Ordinarie</span>
                <label> ({{ordinaryTicketPris}}kr/st)</label>
              </div>
              <div class="ticketCounter">
                <i id="ordinaryMinusIcon" class="material-icons booking-icon" v-on:click="ordinaryTicketCount--, allTypesCount--" v-on:click.capture="checkCounter('ordinary')">remove_circle_outline</i>
                <span class="countNumber" id="ordinarycount">{{ordinaryTicketCount}}</span>
                <i id="ordinaryPlusIcon" class="material-icons booking-icon" v-on:click="ordinaryTicketCount++, allTypesCount++" v-on:click.capture="checkCounter('ordinary')">add_circle_outline</i>
              </div>
            </div>
            <!-- Retired -->
            <div class="ticketSection flexdirectionrow">
              <div class="ticketTypeTextBox">
                <span class="ticketTypeText">Pensionär</span>
                <label> ({{retiredTicketPris}}kr/st)</label>
              </div>
              <div class="ticketCounter">
                <i id="retiredMinusIcon" class="material-icons booking-icon" v-on:click="retiredTicketCount--, allTypesCount--" v-on:click.capture="checkCounter('retired')">remove_circle_outline</i>
                <span class="countNumber" id="countNumber retiredcount">{{retiredTicketCount}}</span>
                <i id="retiredPlusIcon" class="material-icons booking-icon" v-on:click="retiredTicketCount++ , allTypesCount++" v-on:click.capture="checkCounter('retired')">add_circle_outline</i>
              </div>
            </div>
            <!-- Child -->
            <div class="ticketSection flexdirectionrow">
              <div class="ticketTypeTextBox">
                <span class="ticketTypeText">Barn</span>
                <label> ({{childTicketPris}}kr/st)</label>
              </div>
              <div class="ticketCounter">
                <i id="childMinusIcon" class="material-icons booking-icon" v-on:click="childTicketCount--, allTypesCount--" v-on:click.capture="checkCounter('child')">remove_circle_outline</i>
                <span class="countNumber" id="countNumber childcount">{{childTicketCount}}</span>
                <i id="childPlusIcon" class="material-icons booking-icon" v-on:click="childTicketCount++, allTypesCount++" v-on:click.capture="checkCounter('child')">add_circle_outline</i>
              </div>
            </div>          
          </div>
        </div>
        <div class="buttonsBox">
          <button id="bookingBtn" class="btn-small red" v-on:click="showScene()">Välj platser</button>
          <button id="changeBtn" class="btn-small grön" v-on:click="showPanel()">Ändra</button>
          <div v-if="allTypesCount > 0" id="ticketsPrice" nowrap>{{allTypesCount}} st ({{ticketsPrice}}kr)</div>    
          <button id="saveBtn" class="btn-small red" v-on:click="saveBooking()">Spara</button>
        </div>        
        <div id="scenePanel" class="avoid-clicks">       
          <div class="flexdirectioncolumn" style="margin: 5px 0px;"><div class="scene">BIODUK</div></div>
          <div style="height: 30px;" v-for="rowindex in seatsRow" :key="rowindex">
            <div class="seatsrow">
              <div class="seatscolumn" 
              v-for="columnindex in auditorium[0].seatsPerRow[rowindex-1]" 
              :key="columnindex"  
              :id="rowindex+'_'+columnindex" v-on:click="manageSeat(rowindex+'_'+columnindex)">
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script>

export default {
  data() {
    return {      
      showtimeId: this.$route.query.showtimeId,
      auditorium:[],
      auditoriumId: 0,
      auditoriumSize: 0,
      ordinaryTicketPris: 85,
      retiredTicketPris: 75,
      childTicketPris: 65,
      ordinaryTicketCount: 0,
      retiredTicketCount: 0,
      childTicketCount: 0,
      allTypesCount: 0,
      seatsRow: 0,
      seats: [],
      bookings:[],
      newBooking:[],
      bookedSeatsCount: 0,
      choosenSeatCount: 0
    };
  },
  methods: {
    checkCounter: function(ticketType){
      if(ticketType == 'ordinary'){
        if(this.ordinaryTicketCount == 0){
          document.getElementById('ordinaryMinusIcon').style.visibility= "hidden";
        }else if(this.ordinaryTicketCount == 1){
          document.getElementById('ordinaryMinusIcon').style.visibility= "visible";
        }
      } else if(ticketType == 'retired'){
        if(this.retiredTicketCount == 0){          
          document.getElementById('retiredMinusIcon').style.visibility= "hidden";
        }else if(this.retiredTicketCount == 1){
          document.getElementById('retiredMinusIcon').style.visibility= "visible";
        }
      } else if(ticketType == 'child'){
        if(this.childTicketCount == 0){    
          document.getElementById('childMinusIcon').style.visibility= "hidden";
        }else if(this.childTicketCount == 1){
          document.getElementById('childMinusIcon').style.visibility= "visible";
        }
      }
      if (this.ticketsPrice > 0){
        document.getElementById('bookingBtn').style.display= "block";
      }else{
        document.getElementById('bookingBtn').style.display= "none";
        document.getElementById('scenePanel').classList.add('avoid-clicks');
      }
      if((this.auditoriumSize-this.bookedSeatsCount) == this.allTypesCount){
        document.getElementById('ordinaryPlusIcon').style.visibility= "hidden";
        document.getElementById('retiredPlusIcon').style.visibility= "hidden";
        document.getElementById('childPlusIcon').style.visibility= "hidden";
      }
    },
    showScene: function() {
      document.getElementById('scenePanel').classList.remove('avoid-clicks');
      document.getElementById('ticketSelectorSection').classList.add('avoid-clicks');
      document.getElementById('bookingBtn').style.display= "none";
      document.getElementById('changeBtn').style.display= "block";
    },
    showPanel: function() {
      document.getElementById('ticketSelectorSection').classList.remove('avoid-clicks');
      document.getElementById('scenePanel').classList.add('avoid-clicks');
      document.getElementById('saveBtn').style.display= "none";
      this.ordinaryTicketCount=0
      this.retiredTicketCount=0
      this.childTicketCount=0
      this.allTypesCount=0
      this.choosenSeatCount=0
      for(let i = 0; i < this.seats.length; i++){
        document.getElementById(this.seats[i]).classList.remove('reservedSeat');
      }
      this.seats=[]
      document.getElementById('ordinaryMinusIcon').style.visibility= "hidden";
      document.getElementById('retiredMinusIcon').style.visibility= "hidden";
      document.getElementById('childMinusIcon').style.visibility= "hidden";
      document.getElementById('ordinaryPlusIcon').style.visibility= "visible";
      document.getElementById('retiredPlusIcon').style.visibility= "visible";
      document.getElementById('childPlusIcon').style.visibility= "visible";
      document.getElementById('changeBtn').style.display= "none";
    },
    manageSeat(seatId){    
      if(document.getElementById(seatId).classList.contains("reservedSeat") ){
        var index = this.seats.indexOf(seatId)
        this.seats.splice(index, 1)
        document.getElementById(seatId).classList.remove('reservedSeat');
        this.choosenSeatCount--;
      } 
      else {
        if (this.choosenSeatCount <  (this.allTypesCount)){
          this.seats.push(seatId);
          document.getElementById(seatId).classList.add('reservedSeat');
          this.choosenSeatCount++;
          if (this.choosenSeatCount == this.allTypesCount){
            document.getElementById('saveBtn').style.display= "block";
          }
        }
        else{
          alert('Du kan välja max '+(this.ordinaryTicketCount+this.retiredTicketCount+this.childTicketCount))
        }
      }
    },
    setAuditoriumId(){ 
        let singleShowtimeById = this.$store.getters.getSingleShowtimeById(this.$route.query.showtimeId);
        this.auditoriumId = singleShowtimeById[0].auditoriumId;
        this.seatsRow = this.$store.getters.getAuditorium(this.auditoriumId)[0].seatsPerRow.length;
        this.auditoriumSize = this.$store.getters.getAuditorium(this.auditoriumId)[0].seats;
    },
    getBookedSeats(){
      this.bookings=this.$store.getters.getAllBookingsByShowtimeId(this.$route.query.showtimeId);
      this.bookedSeatsCount=this.bookings.length;
    },
    getAuditorium() {
      this.auditorium = this.$store.getters.getAuditorium(this.auditoriumId)
    },
    setBookedSeats(){
        for(let b = 0; b < this.bookings.length; b++){
          let bookedSeatId = this.bookings[b].row+'_'+this.bookings[b].col;
          document.getElementById(bookedSeatId).classList.add("soldSeat");
        }
        return null;
    },
    saveBooking(){      
      let bookingCount = 0;
      let underscore = 0;
      let ticketTypeCount = 0;
      let ticketType = 0;
      let ticketPris = 0;

      underscore = this.seats[0].indexOf('_');
      let bookingNumber = this.showtimeId+this.seats[0].substring(0,underscore)+this.seats[0].substring(underscore+1);
      //ordinary
      for(let x = 0; x < 3; x++){
        if (x == 0){
          ticketTypeCount = this.ordinaryTicketCount;
          ticketPris = this.ordinaryTicketPris;
          ticketType = 1;
        }
        else if (x == 1){
          ticketTypeCount = this.retiredTicketCount;
          ticketPris = this.retiredTicketPris;
          ticketType = 2;
        }
        else if (x == 2){
          ticketTypeCount = this.childTicketCount;
          ticketPris = this.childTicketPris;
          ticketType = 3;
        }

        for(let i=0; i < ticketTypeCount; i++){
          let seatId = this.seats[bookingCount];
          underscore = seatId.indexOf('_');
          this.newBooking = {
                showtimeId: Number(this.showtimeId),
                ticketType: ticketType.toString(), //ordinary
                userId: null,
                bookingNumber: Number(bookingNumber),
                bookingId: Number(bookingNumber+bookingCount),
                row: Number(seatId.substring(0,underscore)),
                col: Number(seatId.substring(underscore+1)),
                price: ticketPris,
                bookingDatetime: null
            }
          bookingCount++;
          alert(JSON.stringify(this.newBooking));
          console.log(this.newBooking);
        }
      }      
    }
  },
  computed: {
    ticketsPrice: { 
        get: function() {          
            return (this.ordinaryTicketCount*this.ordinaryTicketPris)
                  +(this.retiredTicketCount*this.retiredTicketPris)
                  +(this.childTicketCount*this.childTicketPris);
          },
        set: function() {            
        }
    },
  },
  mounted() {
    this.setAuditoriumId();
    this.getAuditorium();
    this.getBookedSeats();
  },
  updated(){
    this.setBookedSeats();
  },
  created() {
    console.log('bookingpage:'+this.$route.query.showtimeId);
    this.$store.dispatch("pullShowtimes");
    this.$store.dispatch("pullBookings");
    this.$store.dispatch("getBookings");
  },
};
</script>


<style scoped>
.flexdirectioncolumn{
  align-items: center;
}
.material-icons{
  outline: none !important;
  outline-style: none !important;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
<style>
#ticketSelectorSection{
  width: 100%;
  display: flex;
  justify-content: center;
}
.bookingcontainer{
  flex-grow: 1;
  justify-content: space-around;
}
.bookingbox{
  width: 80%;
  border-radius: 3px; 
  padding: 5px 5px 5px 5px;
  margin: 15px 10px; 
  background-color: #efefef;
  justify-content: space-around;
}
.bookingbox h2{
  font-size: 2.36rem;
  margin: 15px 15px;
}
.ticketSection{
  width: 100%;
  padding: 5px 0px;
  justify-content: left;
}
.ticketTypeTextBox{
  padding: 0px 15px;
  text-align: left;  
  width: 60%;
}
.ticketTypeText{
  font-size: 16px;
  font-weight: bold;
}
.ticketCounter{
  padding: 0px 15px;
  display: flex;
  font-weight: 500;
}
.buttonsBox{
  width: 100%;
  display: flex;
  justify-content: center;
}
#ticketsPrice{
  margin: auto 0;
  padding-top: 8px;
  font-weight: bold;
}
#bookingBtn, #changeBtn{
  margin: 15px 10px;
  display: none;
}
#saveBtn{
  margin: 15px 10px;
  display: none;
}
#bookingBtn a{  
  color: #fff!important;
}
.booking-icon{
  font-size: 30px !important;
  cursor: pointer;
  color: #9f9999;
}
.countNumber{
  font-family: sf_sansbold;
  font-size: 18px;
  font-weight: 800;
  padding: 0px 10px;
}
.icon-disabled{
  cursor: auto;
  background: #c8c8c8;
}
#childMinusIcon, #retiredMinusIcon, #ordinaryMinusIcon{
  visibility: hidden;
}
.seatsrow{
  display: flex; 
  flex-direction: row; 
  justify-content: center;
}
.seatscolumn{
  padding: 8px;
  border-color: gray;
  margin: 2px;
  outline: none;
  border-radius: 0 0 .25em .25em;
  cursor: pointer;
  border-width: .125rem;
  border-style: solid;
}
.seatscolumn:hover{
  border-color: #ff8383;
}
.scene{
  height: 50px;
  width: 250px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: linear-gradient(rgb(255, 126, 126), rgb(200, 71, 66));
  opacity: 0.8;
  border-radius: 5px 5px 0px 0px;
  color: #FFF;
  padding-top: 15px;
  margin-bottom: 10px;
}
#scenePanel{
  width: 100%;
}
.avoid-clicks{
  display: inline-block;
  padding: 5px;
  pointer-events: none;
  border-radius: 3px;
  background: #111010;
  opacity: 0.5;
}
.reservedSeat{
  background-color: #ff8383;
}
.soldSeat{
  background-color: #e93030;
  pointer-events: none;
}
.btn-small{
  width: 150px;
}
</style>