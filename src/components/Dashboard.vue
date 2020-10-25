<template>
  <div class="dashboard-container">
    <div v-bind:class="element.size" v-for="element of elements" v-bind:key="element">
        <chart-app class="prueba" :msg="element.name" v-if="element.type == 'chart'"></chart-app>
        <spark-app class="prueba" :msg="element.name" v-if="element.type == 'sparkline'"></spark-app>        
        <h1 v-if="element.type == 'text'">{{element.name}}</h1>
        <h2 v-if="element.type == 'value'">{{element.color}}</h2>
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue'
import Sparkline from './Sparkline.vue'

export default {
  name: 'Dashboard',
  props: {
    textoculiao: String,
  },
  data: function (){
      return {elements:[{name:'charmander',size:'bigger',type:'chart',chart:''},
                        {name:'charmeleon',size:'medium',type:'chart',chart:''},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},
                        {name:'charmeleon',size:'small',type:'sparkline',chart:'pie'},          {name:'charmeleon',size:'big',type:'chart',chart:''},                        
                        {name:'charizard',size:'small',type:'text',chart:''},
]};
  },
  components: {
    'chart-app':Chart,
    'spark-app':Sparkline
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container{
    background: #dedede;
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
    height: auto;
    display: inline-flex;
    border-radius:5px;
    background:white;
}

.medium{
    width: 45%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    height: auto;
    display: inline-flex;
    border-radius:5px;
    background:white;
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
}

.bigger{
    width: 90%;
    padding-top:1%;
    padding-bottom: 2.5;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 3%;
    margin-bottom: 2.5%;
    display: inline-flex;
    border-radius:5px;
    background:white;
}

.prueba{
    width:90%;
    margin-left: 5%;
}
</style>