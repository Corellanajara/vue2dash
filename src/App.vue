<template>
  <div>
    
    <div>
      <hello-app textoculiao="soy una card "></hello-app>
      <hello-app></hello-app>
      <hello-app></hello-app>
    </div>
    <div >
      <chart-app v-if="stats" :msg="stats"></chart-app>    
      <hello-app v-if="!stats" textoculiao="Aun no carga la wea"></hello-app>
      <chart-app v-if="stats" :msg="stats"></chart-app>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Chart from './components/Chart.vue'
import HelloWorld from './components/HelloWorld.vue'
import CardCustom from './components/CardCustom.vue'

export default {
  name: 'App',
  data () {
    return {
      items: [
        { text: 'item 1' },
        { text: 'Item 2' }
      ],
      stats:null,
      var1: 'hola cabros',               
    }
  }
  ,
  components: {
    'hello-app':HelloWorld,
    'chart-app':Chart,
    'card-app':CardCustom    
  }
  ,
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => {
      console.log(response);
      var stats = response.data.stats
      var realStats = [];
      for(var stat of stats){
        
        realStats.push(stat['base_stat']);
      }
      console.log(realStats);
      this.stats = realStats;

      })
  }
}

</script>

<style>
.esteesflex{
  display:flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
