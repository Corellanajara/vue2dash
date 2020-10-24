<template>
  <div class="caja">
    <!--<mail-app title="Hola"></mail-app>-->
   </div>
</template>

<script>

import axios from 'axios'
import Chart from './components/Chart.vue'
import HelloWorld from './components/HelloWorld.vue'
import CardCustom from './components/CardCustom.vue'
import MailCard from './components/MailCard.vue'

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
    'card-app':CardCustom,
    'mail-app':MailCard,
  }
  ,
  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(response => {
      //console.log(response);
      var stats = response.data.stats
      var realStats = [];
      for(var stat of stats){

        realStats.push(stat['base_stat']);
      }
      //console.log(realStats);
      //this.stats = realStats;
      this.stats = []
      })
  }
}

var ok = true;

</script>

<style>
.esteesflex{
  display:flex;
}

body{
  background: url('https://cdn.dribbble.com/users/648922/screenshots/11206395/media/5998f56329eda70b71fecd050032bc21.png');
  background-position: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fondo{
background: red;
}

.caja{
  width: 100%;
  top: 2%;
  position: fixed;
}

.container{

}
</style>
