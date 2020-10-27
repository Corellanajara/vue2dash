<template>
  <div class="chart-container">
    <h1 class="chart-title">Progress chart</h1>
    <apexcharts v-if="msg" class="chart" type="radialBar" height='300' :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'ProgressChart',
  info:Array,
  props:{
    msg:String,
    dataSeries: Array,
    dataLabels: Array,
  },
  components: {
    apexcharts: VueApexCharts,

  },
  data: function() {
   
    return {
      chartOptions: {
        labels: this.dataLabels,
        chart: {
          id: 'radialBar'
        },
      
      },
      series: this.dataSeries
    }
  }, 
  methods: {
  }
  ,
  created: function () {

  },
  
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
