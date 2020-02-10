<template>
    <div class="flexdirectioncolumn bookingcontainer">      
      <div class="flexdirectioncolumn  bookingbox">
        <h2>Antal biljetter</h2>
        <!-- Ordinary -->
        <div class="flexdirectionrow ticketSection">
          <div class="ticketTypeTextBox">
            <span class="ticketTypeText">Ordinarie</span>
            <label> ({{ordinaryTicketPris}}kr/st)</label>
          </div>
          <div class="ticketCounter">
            <i id="ordinaryMinusIcon" class="material-icons booking-icon" v-on:click="ordinaryTicketCount--" v-on:click.capture="checkCounter('ordinary')">remove_circle_outline</i>
            <span class="countNumber" id="ordinarycount">{{ordinaryTicketCount}}</span>
            <i class="material-icons booking-icon" v-on:click="ordinaryTicketCount++" v-on:click.capture="checkCounter('ordinary')">add_circle_outline</i>
          </div>
        </div>
        <!-- Retired -->
        <div class="ticketSection flexdirectionrow">
          <div class="ticketTypeTextBox">
            <span class="ticketTypeText">Pensionär</span>
            <label> ({{retiredTicketPris}}kr/st)</label>
          </div>
          <div class="ticketCounter">
            <i id="retiredMinusIcon" class="material-icons booking-icon" v-on:click="retiredTicketCount--" v-on:click.capture="checkCounter('retired')">remove_circle_outline</i>
            <span class="countNumber" id="countNumber retiredcount">{{retiredTicketCount}}</span>
            <i class="material-icons booking-icon" v-on:click="retiredTicketCount++" v-on:click.capture="checkCounter('retired')">add_circle_outline</i>
          </div>
        </div>
        <!-- Child -->
        <div class="ticketSection flexdirectionrow">
          <div class="ticketTypeTextBox">
            <span class="ticketTypeText">Barn</span>
            <label> ({{childTicketPris}}kr/st)</label>
          </div>
          <div class="ticketCounter">
            <i id="childMinusIcon" class="material-icons booking-icon" v-on:click="childTicketCount--" v-on:click.capture="checkCounter('child')">remove_circle_outline</i>
            <span class="countNumber" id="countNumber childcount">{{childTicketCount}}</span>
            <i class="material-icons booking-icon" v-on:click="childTicketCount++" v-on:click.capture="checkCounter('child')">add_circle_outline</i>
          </div>
        </div>
        <div id="ticketsPrice"><label>Pris {{ticketsPrice}} kr</label></div>
        <a id="bookingBtn" class="btn-small red"><router-link :to="{path: '/setselect'}">Välj platser</router-link></a>
      </div>
    </div>
</template>
    
<script>
export default {
  data() {
    return {
      ordinaryTicketPris: 85,
      retiredTicketPris: 75,
      childTicketPris: 65,
      ordinaryTicketCount: 0,
      retiredTicketCount: 0,
      childTicketCount: 0,
      //bigAuditoriumSize
      //littleAuditorumSize
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
        document.getElementById('bookingBtn').style.visibility= "visible";
      }else{
        document.getElementById('bookingBtn').style.visibility= "hidden";
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
      }   
  }
};
</script>


<style scoped>
.flexdirectioncolumn{
  align-items: center;
}
</style>
<style>
.ticketSection{
  width: 100%;
  padding: 5px 0px;
  justify-content: left;
}
.ticketTypeTextBox{
  padding-left: 20%;
  text-align: left;  
  width: 60%;
}
.ticketTypeText{
  font-weight: bold;
}
.ticketCounter{
  padding-left: 15px;
  display: flex;
}
#bookingBtn{
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
  font-weight: 500;
  color: #615656;
  padding: 0px 10px;
}
.icon-disabled{
  cursor: auto;
  background: #c8c8c8;
}
#childMinusIcon, #retiredMinusIcon, #ordinaryMinusIcon{
  visibility: hidden;
}
</style>