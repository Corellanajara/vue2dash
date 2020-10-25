<template>
  <div class="dashboard-container">
    <div class="card-container" v-for="element of elements" v-bind:key="element">
        <chart-app class="prueba" :msg="element.name"></chart-app> 
    </div>
  </div>
</template>

<script>
import Chart from './Chart.vue'

export default {
  name: 'Dashboard',
  props: {
    textoculiao: String,
  },
  data: function (){
      return {elements:[{name:'charmander'},{name:'charmeleon'},{name:'pikachu'},{name:'charizard'}]};
  },
  components: {
    'chart-app':Chart,
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard-container{
    background: #dedede;
    width: 100%;
}

.card-container{
    width: 45%;
    padding-top:2.5%;
    padding-bottom: 2.5;
    margin-left: 2.5%;
    margin-right: 2.5%;
    margin-top: 3%;
    height: auto;
    display: inline-flex;
    border-radius:5px;
    background:white;
}

.prueba{
    width:90%;
    margin-left: 5%;
}
</style>