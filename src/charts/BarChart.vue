<template>
  <div class="chart-container">
    <h1 class="chart-title">Bar Chart</h1>
    <apexcharts v-if="msg" class="chart" type="bar" height="300" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'BarChart',
  info:Array,
  props:{
    msg:String,
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
          id: 'basic-bar'
        },
        xaxis: {
          categories: this.xaxisCategories
        },
        dataLabels: {
              enabled: true
        },    
      },
      series: [{
        name: x,
        data: this.dataSeries
      }]
    }
  },
  methods: {
  }
  ,
  created: function () {
  },
  
  
}
export default obj;
var x = "Bar chart"

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