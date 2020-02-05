<template>
  <div class="maxSize">
      <div class="ordinarySection">
        <div class="informationText">
        <div class="ordinary">Ordinarie</div>
        <div class="subOrdinary">85kr/st</div>
        </div>
        <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
        <i class="material-icons" @click="addOrdinaryTicket">add</i>
      </a>
      <div class="amountOfTickets">
      {{ordinaryTickets}}
      </div>
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
          <i class="material-icons" @click="removeOrdinaryTicket">remove</i>
      </a>
    </div>
    </div>
    <div class="seniorSection">
        <div class="informationText">
        <div class="ordinary">Pensionär</div>
        <div class="subOrdinary">75kr/st</div>
        </div>
        <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
        <i class="material-icons" @click="addSeniorTicket">add</i>
      </a>
      <div class="amountOfTickets">
      {{seniorTickets}}
      </div>
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
        <i class="material-icons" @click="removeSeniorTicket">remove</i>
      </a>
    </div>
    </div>
    <div class="kidSection">
        <div class="informationText">
        <div class="ordinary">Barn</div>
        <div class="subOrdinary">65kr/st | (12 år)</div>
        </div>
        <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
        <i class="material-icons" @click="addKidTicket">add</i>
      </a>
      <div class="amountOfTickets">
      {{kidTickets}}
      </div>
      <a class="btn-floating btn-medium waves-effect waves-light red btn-spacing">
        <i class="material-icons" @click="removeKidTicket">remove</i>
      </a>
    </div>
    </div>
    <br>
    <div class="nextbutton">
    <router-link to="/"><a class="waves-effect waves-light btn-large red">Välj platser</a></router-link>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      ordinaryTickets: 0,
      seniorTickets: 0,
      kidTickets: 0
    };
  },

  methods: {
    addOrdinaryTicket() {
      return this.ordinaryTickets++;
    },
    addSeniorTicket() {
      return this.seniorTickets++;
    },
    addKidTicket() {
      return this.kidTickets++;
    },
    removeOrdinaryTicket() {
        return this.ordinaryTickets--;
    },
    removeSeniorTicket() {
        return this.seniorTickets--;
    },
    removeKidTicket() {
        return this.kidTickets--;
    }
  }
};
</script>


<style>
.buttons {
  margin-top: 6%;
  color: rgb(184, 90, 90);
  display: flex;
  flex-direction: row-reverse;
  width: 25vw;
  flex: 1;

}
.maxSize{
    margin-left: 35vw;
    margin-right: 35vw;
    width: 30vw;
    display: flex;
    flex: 1;
    flex-direction: column;

}

.ordinarySection{
    display: flex;
    flex-direction: row;
    flex: 1;
}

.seniorSection{
    display: flex;
    flex-direction: row;
    flex: 1;
}

.kidSection{
    display: flex;
    flex-direction: row;
    flex: 1;
}

.amountOfTickets{
    font-size: 40px;
}

.informationText{
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: left;
    width: 24vw;
    color: white;
    margin-top: 4%;
}

.btn-spacing{
    margin-top: 2%;
    margin-left: 0.5%;
    margin-right: 0.5%;
}
.ordinary{
    font-size: 40px;
}

.subOrdinary{
    font-size: 20px;
    
}

.nextbutton{
    
}

@media(max-width: 450px ) {
    .maxSize{
        margin:0;
        margin-left: 2vw;
        margin-right: 2vw;
        width: 96vw;
    }
}

.nextbutton{
  margin-bottom: 4%;
    
}
</style>