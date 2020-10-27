<template>
  <div class="dashboard-container">
    
    <div v-bind:class="element.size" v-for="element of elements" v-bind:key="element.id">
        <text-card-app :cardTitle="element.title" :cardSubtitle="element.subtitle" v-if="element.type == 'textCard'"></text-card-app>

        <bar-app class="prueba" :msg="element.name" :xaxisCategories="element.categories" :dataSeries="element.series" v-if="element.type == 'bar'"></bar-app>
        <donut-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'donut'"></donut-app>
        <progress-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'progress'"></progress-app>
        <area-app class="prueba" :msg="element.name" :title="element.title" :subtitle="element.subtitle" :dataSeries="element.series" v-if="element.type == 'area'"></area-app>
        <spark-app class="prueba" :msg="element.name" :dataSeries="element.series" :sparklineType="element.sparklineType" :chartTitle="element.title" :chartSubtitle="element.subtitle" v-if="element.type == 'sparkline'"></spark-app>
        <mixed-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" :yaxisTitle="element.yTitle" v-if="element.type == 'mixed'"></mixed-app>
        <polar-app class="prueba" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'polar'"></polar-app>
        <triple-line-app class="prueba" :xaxisCategories="element.categories" :dataSeries="element.series" :title="element.title" v-if="element.type == 'tripleLine'"></triple-line-app>
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
import LineColumnArea from '../charts/LineColumnArea.vue'
import TripleLineChart from '../charts/TripleLineChart.vue'
import TextCard from './TextCard'


export default {
  name: 'Dashboard',
  props: {
    textoculiao: String,
  },
  data: function (){
      return {elements:[
                        {id:1,name:'charmeleon',size:'small',type:'textCard', title:'Titulos',subtitle:'Subtitulos'},
                        {id:2,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'bar', title:'Titulo', subtitle:'Subtitulo',series:[23, 11, 29, 50, 23, 12, 77, 51, 44, 22, 30]},
                        {id:3,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'area', title:'Titulo', subtitle:'Subtitulo',series:[87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]},
                        {id:4,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'line', title:'Titulo', subtitle:'Subtitulo', series:[35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]},           
                        {id:5,name:'charmeleon',size:'bigger',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
                        {id:6,name:'charmeleon',size:'bigger',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
                        {id:7,name:'charmeleon',size:'bigger',type:'progress',series:[30], labels:['Progreso']},
                        {id:8,name:'charmeleon',size:'bigger',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
                        {id:9,name:'charmeleon',size:'bigger',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
                        {id:10,name:'charmeleon',size:'bigger',type:'tripleLine',
                        series:
                          [{
                            name: "Area A",
                            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                          },
                          {
                            name: "Area B",
                            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                          },
                          {
                            name: 'Area C',
                            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                          }
                        ],
                        categories:['01 Jan', '02 Jan', '03 Jan',
                                    '04 Jan', '05 Jan', '06 Jan', 
                                    '07 Jan', '08 Jan', '09 Jan',
                                    '10 Jan', '11 Jan', '12 Jan'
                        ],
                        title:"Triple line chart",
                        },
                        {id:11,name:'charmander',size:'bigger',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
                        {id:12,name:'charmeleon',size:'big',type:'mixed',
                            series:
                            [{name: 'AREA A',
                              type: 'column',
                              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                            }, {
                              name: 'AREA B',
                              type: 'area',
                              data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                            }, {
                              name: 'AREA C',
                              type: 'line',
                              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                            },
                            {
                              name: 'AREA A',
                              type: 'column',
                              data: [23, 11, 29, 50, 23, 12, 77, 51, 44, 22, 30]
                            }],
                            labels:['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', 
                                        '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003',
                                        '09/01/2003', '10/01/2003', '11/01/2003'],
                            yTitle: ['Titulo'], 
                        },
                        {id:13,name:'charmeleon',size:'big',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
                        {id:14,name:'charmeleon',size:'big',type:'progress',series:[60], labels:['Progreso']},
                        {id:15,name:'charmeleon',size:'big',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
                        {id:16,name:'charmeleon',size:'big',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
                        {id:17,name:'charmeleon',size:'bigger',type:'line',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},                      
                        {id:18,name:'charmeleon',size:'medium',type:'bar',series:[1,2,3,4,5],categories:['uno','dos','tres','cuatro','cinco']},
                        {id:19,name:'charmeleon',size:'medium',type:'donut', series:[1,2,3,4,5,6,7,8], labels:['Area 1','Area 2','Area 3','Area 4','Area 5','Area 6','Area 7','Area 8']},
                        {id:20,name:'charmeleon',size:'medium',type:'progress',series:[100], labels:['Progreso']},
                        {id:21,name:'charmeleon',size:'medium',type:'area', title:"Titulo area chart", subtitle: "Subtitulo area chart", series:[78,80,35,20,28,46,87,90]},
                        {id:22,name:'charmeleon',size:'medium',type:'polar',series:[20,50,90,120],labels:['Area 1','Area 2', 'Area 3','Area 4']},
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
    'bar-app':BarChart,
    'mixed-app':LineColumnArea,
    'triple-line-app':TripleLineChart,
    'text-card-app':TextCard,
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