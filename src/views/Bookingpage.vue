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
        <div class="flexdirectionrow allTicketSection" v-if="allTypesCount > 0">
            <div id="ticketsPrice" nowrap>{{allTypesCount}} st ( {{ticketsPrice}} kr )</div>
        </div>
        <div class="buttonsBox">
          <button id="bookingBtn" class="btn-small red" v-on:click="showScene()">Välj platser</button>
          <button id="changeBtn" class="btn-small grön" v-on:click="showPanel()">Ändra</button>         
          <button id="saveBtn" class="btn-small red" v-on:click="saveBooking()">Spara</button>
        </div>        
        <div id="scenePanel" class="avoid-clicks">       
          <div class="scene"></div>
          <div v-for="rowindex in seatsRow" :key="rowindex">
            <div class="seatsrow">
              <div class="seatscolumn" v-for="columnindex in getAuditorium[0].seatsPerRow[rowindex-1]" :key="columnindex"  
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
      document.getElementById('saveBtn').style.visibility= "hidden";
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
            document.getElementById('saveBtn').style.visibility= "visible";
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
    setBookedSeats(){
        for(let b = 0; b < this.bookings.length; b++){
          let bookedSeatId = this.bookings[b].row+'_'+this.bookings[b].col;
          document.getElementById(bookedSeatId).classList.add("soldSeat");
        }
        return null;
    },
    saveBooking(){
      alert('coming soon')
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
    getAuditorium() {
      return this.$store.getters.getAuditorium(this.auditoriumId)
    },
  },
  mounted() {
    this.setAuditoriumId();
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
  margin: 15px; 
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
  padding: 0px 15px;
  width: 100%;
}
#bookingBtn, #changeBtn{
  margin: 15px;
  display: none;
}
#saveBtn{
  margin: 15px;
  visibility: hidden;
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
  background-color: #21c02f;
}
.scene{
  width: 80%;
  border-color: #000;
  padding: 3px;
  height: 5%;
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
.allTicketSection{
  margin: 15px 0px 0px 0px;
}
.reservedSeat{
  background-color: #ff8383;
}
.soldSeat{
  background-color: #e93030;
  pointer-events: none;
}
</style>