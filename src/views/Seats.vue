
<template>
    
    <div class='seatLayout'>
        <tile
        v-for="(seats, i) of flatSeats"
        v-bind:position="seats"
        v-bind:key="'seats' + i + seats.x + seats.y"        
        ></tile>
    </div>
</template>


<script>
import Tile from '@/components/Tile.vue'
export default {
    components: {
        Tile
    },
  data() {
    return {
      seats: [],
      //customGrid: mapsArray[this.audit]
    };
  },
  computed:{
      flatSeats(){
          return this.seats.flat()
      }
  },
  created() {
        for (let col =0; col < 12; col++) {
            this.seats[col] = [];
            for (let row = 0; row < 12; row++) {
              let position = {
                  x: col,
                  y: row,
              }
              this.seats[col].push(position)
            }
            
        }
  },
  methods: {
    renderSeats() {
      for (let col = 0; col < 12; col++) {
        for (let row = 0; row < 12; row++) {
          switch (this.customGrid[row][col]) {
            case "S":
                this.seats[row][col].background = 'A';
              break;
            case "B":
                 this.seats[row][col].background = 'A';
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
*{
    box-sizing: border-box;
}
.seatLayout {
    display: flex;
    width: 60vw;
    flex-wrap: wrap;
}
.seats {
    width: 20%;
    height: 30px;
}
</style>