<template>
<div>
  
  <div class="card">
      <apexcharts v-if="msg" class="chart" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
  <div>
       <button @click="updateChart">Refresca!</button>
  </div>
  
</div>
    
    
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'Chart',
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
          data: await this.msg
        }]
      }
  }
  ,
  created: function () {
       this.updateChart();
  },
  mounted() {
    this.series = [{
          name: x,
          data: this.msg
        }]
  }
  
}
export default obj;
var x = "grafico culiao"

</script>

<style scoped>
  .card{
    width: 85%;
    background: white;
    margin-top: 5%;
    margin-left: 7.5%;
    margin-right: 10%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    border-radius: 5px;
  }
  .chart{
    width: 50%;
    margin-left:25%;
    padding: 0%;    
  }

</style>