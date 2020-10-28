<template>
  <div class="chart-container">
    <h1 class="chart-title">Triple line chart</h1>
    <apexcharts class="chart" height='300' type="line" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'TripleLineChart',
  info:Array,
  props:{
    xaxisCategories: Array,
    dataSeries: Array,
    title:String,
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
              zoom: {
                enabled: false
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [5, 7, 5],
              curve: 'straight',
              dashArray: [0, 8, 5]
            },
            title: {
              text: this.title,
              align: 'left'
            },
            xaxis: {
              categories:this.xaxisCategories
            },
            grid: {
              borderColor: '#f1f1f1',
            },
            
          }
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