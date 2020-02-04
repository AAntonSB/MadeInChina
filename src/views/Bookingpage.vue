<template>
  <div>
    <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="removeOrdinaryTicket">remove</i>
      </a>
      {{ordinaryTickets}}
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="addOrdinaryTicket">add</i>   
      </a>
      
    </div>
    <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="removeSeniorTicket">remove</i>
      </a>
      {{seniorTickets}}
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="addSeniorTicket">add</i>
      </a>
    </div>
    <div class="buttons">
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="removeKidTicket">remove</i>
      </a>
      {{kidTickets}}
      <a class="btn-floating btn-medium waves-effect waves-light red">
        <i class="material-icons" @click="addKidTicket">add</i>
      </a>
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
  margin-top: 3%;
  color: white;
}

.nextbutton{
    
}
</style>