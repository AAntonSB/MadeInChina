
<template>
  <div id="seatPage">
    <br>
    <div id="screen"></div>
    <br/>
    
    
    <div class="seatLayout">
      <tile
        v-for="(seats, i) of flatSeats"
        v-bind:position="seats"
        v-bind:key="'seats' + i + seats.x + seats.y"
      ></tile>
    </div>
  </div>
</template>


<script>
import Tile from "@/components/Tile.vue";
export default {
  components: {
    Tile
  },
  data() {
    return {
      seats: []
      //customGrid: mapsArray[this.audit]
    };
  },
  computed: {
    flatSeats() {
      return this.seats.flat();
    }
  },
  created() {
    for (let col = 0; col < 12; col++) {
      this.seats[col] = [];
      for (let row = 0; row < 12; row++) {
        let position = {
          x: col,
          y: row
        };
        this.seats[col].push(position);
      }
    }
  },
  methods: {
    renderSeats() {
      for (let col = 0; col < 12; col++) {
        for (let row = 0; row < 12; row++) {
          switch (this.customGrid[row][col]) {
            case "S":
              this.seats[row][col].background = "A";
              break;
            case "B":
              this.seats[row][col].background = "A";
              break;
            default:
              console.log("Error");
              break;
          }
        }
      }
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
#screen {
	border-top: 30px solid white;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
    filter: drop-shadow(0 0.20rem 0.75rem rgb(199, 222, 226));
	height: 20px;
	width: 350px;
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 15px;
  
}
#seatPage {
    margin-top: 50px;
    margin-bottom: 50px;
  align-content: center;
  justify-content: center;
}
.seatLayout {
  display: flex;
  width: 360px;
  flex-wrap: wrap;
  align-self: center;
  justify-content: center;
  margin: auto; 
}
.seats {
  width: 20%;
  height: 30px;
}

</style>