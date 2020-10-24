<template>
  <div>
    <apexcharts v-if="msg" class="chart" type="bar" :options="chartOptions" :series="series"></apexcharts>
  <button @click="updateChart">Refresca!</button>
  </div>
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'Chart',
  info:Array,
  props:{
    msg:Array
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
   
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996]
        }
      },
      series: [{
        name: x,
        data: this.msg
      }]
    }
  },
  methods: {
    async updateChart() {   
      console.log("refrescanding", this.msg)     ;
        this.series = [{
          name: x,
          data: await this.info
        }]
      }
  }
  ,
  created: function () {
       this.updateChart();
  },
  mounted() {
    
    axios.get("https://pokeapi.co/api/v2/pokemon/"+this.msg)
    .then(response => {
      console.log(response);
      var stats = response.data.stats
      var realStats = [];
      for(var stat of stats){
        
        realStats.push(stat['base_stat']);
      }
      console.log(realStats);
      this.info = realStats;
      this.updateChart();
      })
  }
  
}
export default obj;
var x = "grafico culiao"

</script>

<style scoped>
  .chart{
    width: 90%;
    margin-left:10%;
    padding: 0%;    
  }

</style>