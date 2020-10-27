<template>
  <div class="chart-container">
    <h1 class="chart-title">Line Chart</h1>
    <apexcharts class="chart" height='300' type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'LineChart',
  info:Array,
  props:{
    xaxisCategories: Array,
    dataSeries: Array, 
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
   
    return {
      chartOptions: {
        chart: {
          type: 'line', 
        },
        xaxis: {
          categories: this.xaxisCategories
        }
      },
      series: [{
        name: x,
        data: this.dataSeries
      }]
    }
  }
}

export default obj;
var x = "Line Chart"
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