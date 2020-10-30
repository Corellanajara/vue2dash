<template>
  <div class="chart-container">
    <h1 class="chart-title">{{msg}}</h1>
    <table>
        <thead>
            <th>Clasificacion </th>
            <th>Modo contrato </th>
            <th>Titulo </th>
            <th>Financiamiento</th>
            <th>Comuna</th>
        </thead>
        <tbody>
            <tr v-for="(item) of data" v-bind:key="item._id">
                <td>{{item.CLASIFICACION}}</td>
                <td>{{item.MOD_CONTRATAC}}</td>
                <td>{{item.TITULO}}</td>
                <td>{{item.TIPO_FIN}}</td>
                <td>{{item.TCOMUNA}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
var obj = {
  name: 'TableCard',
  info:Array,
  props:{
    data: Array,
    msg: String, 
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