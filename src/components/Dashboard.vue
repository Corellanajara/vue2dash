<template>
  <div class="dashboard-container">
    <div v-bind:class="element.size" v-for="element of elements" v-bind:key="element.id">
        <bar-app class="prueba" :msg="element.name" v-if="element.type == 'bar'"></bar-app>
        
        <donut-app class="prueba" :msg="element.name" v-if="element.type == 'donut'"></donut-app>
        <progress-app class="prueba" :msg="element.name" v-if="element.type == 'progress'"></progress-app>
        
        <area-app class="prueba" :msg="element.name" v-if="element.type == 'area'"></area-app>
        <spark-app class="prueba" :msg="element.name" v-if="element.type == 'sparkline'"></spark-app>
        
        <polar-app class="prueba" :title="element.title" :seriesData="element.series" v-if="element.type == 'polar'"></polar-app>
        <line-app class="prueba" :xaxisCategories="element.categories" :dataSeries="element.series" v-if="element.type == 'line'"></line-app>        
    </div>
  </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'
import DonutChart from '../charts/DonutChart.vue'
import ProgressChart from '../charts/ProgressChart.vue'
import AreaChart from '../charts/AreaChart.vue'
import PolarChart from '../charts/PolarChart.vue'
import LineChart from '../charts/LineChart.vue'
import SparklineChart from '../charts/SparklineChart.vue'

export default {
  name: 'Dashboard',
  props: {
    textoculiao: String,
  },
  data: function (){
      return {elements:[
                        {id:1,name:'charmeleon',size:'small',type:'sparkline'},
                        {id:2,name:'charmeleon',size:'small',type:'sparkline'},
                        {id:3,name:'charmeleon',size:'small',type:'sparkline'},
                        {id:4,name:'charmeleon',size:'small',type:'sparkline'},           
                        {id:5,name:'charmeleon',size:'bigger',type:'bar',chart:''},
                        {id:6,name:'charmeleon',size:'bigger',type:'donut',chart:'pie'},
                        {id:7,name:'charmeleon',size:'bigger',type:'progress',chart:'pie'},
                        {id:8,name:'charmeleon',size:'bigger',type:'area',chart:'pie'},
                        {id:9,name:'charmeleon',size:'bigger',type:'polar',title:'caca',series:[1,2,3,4]},
                        {id:10,name:'charmeleon',size:'bigger',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
                        {id:11,name:'charmander',size:'bigger',type:'bar',chart:''},
                        {id:12,name:'charmeleon',size:'big',type:'bar',chart:''},
                        {id:13,name:'charmeleon',size:'big',type:'donut',chart:'pie'},
                        {id:14,name:'charmeleon',size:'big',type:'progress',chart:'pie'},
                        {id:15,name:'charmeleon',size:'big',type:'area',chart:'pie'},
                        {id:16,name:'charmeleon',size:'big',type:'polar',title:'pichi',series:[1,2,3,4]},
                        {id:17,name:'charmeleon',size:'bigger',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},                      
                        {id:18,name:'charmeleon',size:'medium',type:'bar',chart:''},
                        {id:19,name:'charmeleon',size:'medium',type:'donut',chart:'pie'},
                        {id:20,name:'charmeleon',size:'medium',type:'progress',chart:'pie'},
                        {id:21,name:'charmeleon',size:'medium',type:'area',chart:'pie'},
                        {id:22,name:'charmeleon',size:'medium',type:'polar',title:'pichi',series:[1,2,3,4]},
                        {id:23,name:'charmeleon',size:'medium',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},     
]};
  },
  components: {
    'donut-app':DonutChart,
    'progress-app':ProgressChart,
    'area-app': AreaChart,
    'polar-app' : PolarChart,
    'line-app':LineChart,
    'spark-app':SparklineChart,
    'bar-app':BarChart
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container{
    background: #e6e9f8;
    width: 100%;
}

.small{
    width: 20%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    height: 30%;
    display: inline-flex;
    border-radius:5px;
    background:white;
    -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  transition: .5s;
  cursor:pointer;
}

.small:hover{
  transform: scale(1.1);
  transition: .5s;
}

.medium{
    width: 40%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    height: auto;
    display: inline-flex;
    border-radius:5px;
    background:white;
    -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  transition: .5s;
  cursor:pointer;
}

.medium:hover{
  transform: scale(1.1);
  transition: .5s;
}

.big{
     width: 65%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 17.5%;
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    display: inline-flex;
    border-radius:5px;
    background:white;
    -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  transition: .5s;
  cursor:pointer;
}

.big:hover{
  transform: scale(1.1);
  transition: .5s;
}

.bigger{
    width: 80%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    display: inline-flex;
    border-radius:5px;
    background:white;
    -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
    box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  transition: .5s;
  cursor:pointer;
}

.bigger:hover{
  transform: scale(1.1);
  transition: .5s;
}
.prueba{
    width:90%;
    margin-left: 5%;
}
</style>