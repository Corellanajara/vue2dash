<template>
<div>
  <button @click="show = !show">Toggle render</button>
  <transition name="slide-fade">
    <div v-if="show" class="card">
      <div>
        <div id="example-1">
          <apexcharts v-if="msg && show"  class="chart" type="bar" :options="chartOptions" :series="series"></apexcharts>
        </div>
      </div>
    </div>
  </transition>
</div>
    
    
</template>

<script>
import axios from 'axios'
import VueApexCharts from 'vue-apexcharts'

var obj = {
  name: 'Chart',
  info:Array,
  props:{
    show:true,
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
          data: await this.info
        }]
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
  .card{
    width: 85%;
    background: black;
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


.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
  

</style>