<template>
  <div class="chart-container">
    <apexcharts v-if="msg" class="chart" heigth="50" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
var obj = {
  name: 'SparklineChart',
  info:Array,
  props:{
    msg:String,
    dataSeries: Array,
    sparklineType: String,
    chartTitle:String,
    chartSubtitle:String,
  },
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          type: this.sparklineType,
          sparkline: {
            enabled: true
          }
        },
        title: {
              text: this.chartTitle,
              offsetX: 0,
              style: {
                fontSize: '24px',
              }
        },
        subtitle: {
              text: this.chartSubtitle,
              offsetX: 0,
              style: {
                fontSize: '14px',
              }
            }
      },
      series: [{
        name: this.msg,
        data: this.dataSeries
      }],

    }
  },
  methods: {

  },
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
