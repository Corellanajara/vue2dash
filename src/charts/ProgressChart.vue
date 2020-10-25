<template>
  <div class="chart-container">
    <h1 class="chart-title">Progress chart</h1>
    <apexcharts v-if="msg" class="chart" type="radialBar" height='350' :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'ProgressChart',
  info:Array,
  props:{
    msg:String
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
   
    return {
      chartOptions: {
        labels: ['Progreso'],
        chart: {
          id: 'radialBar'
        },
      
      },
      series: [50]
    }
  }, 
  methods: {
    async updateChart() {   
      console.log("refrescanding", this.msg);
        this.series = [73];
        
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  .chart-container{
    width: 100%;
    display: block;
  }

  .chart-title{
    width:100%;
    padding: 0%;
    font-size: 20px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
  }

  .chart{
    width: 90%;
    margin-left:5%;
    padding: 0%;    
  }

</style>
