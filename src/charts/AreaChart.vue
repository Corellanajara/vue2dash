<template>
  <div class="chart-container">
    <h1 class="chart-title">Area Chart</h1>
    <apexcharts v-if="msg" class="chart" type="area" height="300" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'AreaChart',
  info:Array,
  props:{
    msg:String,
    title: String,
    subtitle: String,
    dataSeries: Array,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
   
    return {
      chartOptions: {
        chart: {
              type: 'area',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              curve: 'straight'
            },

            title: {
              text: this.title,
              align: 'left'
            },
            subtitle: {
              text: this.subtitle,
              align: 'left'
            },
            labels: [1,2,3,4,5,6,7],
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              opposite: true
            },
            legend: {
              horizontalAlign: 'left'
            }
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
var x = "Area chart"

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