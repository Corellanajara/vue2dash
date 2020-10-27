<template>
  <div class="chart-container">
    <h1 class="chart-title">Line Column Area</h1>
    <apexcharts v-if="msg" class="chart" type="line" height="300" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'LineColumnArea',
  info:Array,
  props:{
    msg:String,
    dataSeries: Array,
    dataLabels:Array,
    yaxisTitle:Array,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
   
    return {
        series: this.dataSeries,
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false,
            },
            stroke: {
              width: [0, 2, 5],
              curve: 'smooth'
            },
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            },
            
            fill: {
              opacity: [0.85, 0.25, 1],
              gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
              }
            },
            labels: this.dataLabels,
            markers: {
              size: 0
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              title: {
                text: this.yaxisTitle,
              },
              min: 0
            },
          }
      
    }
  },
  methods: {
  }
  ,
  created: function () {
  },
  
  
}
export default obj;
var x = "Line Column Area  "

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