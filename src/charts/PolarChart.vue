<template>
  <div class="chart-container">
    <h1 class="chart-title">Area Chart</h1>
    <apexcharts v-if="msg" class="chart" type="polarArea" height="300" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'Polar Chart',
  info:Array,
  props:{
    msg:String
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      series: [1,2,3,23,12,56,73],
          chartOptions: {
            chart: {
              type: 'polarArea',
            },
            stroke: {
              colors: ['#fff']
            },
            fill: {
              opacity: 0.8
            }
          },
    }
  }
}
export default obj;

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