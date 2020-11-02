<template>
  <div class="dashboard-container">
    <div v-bind:class="element.size" v-for="element of elements" v-bind:key="element.id">
        <text-card-app :msg="element.name" v-if="element.type == 'textCard'"></text-card-app>
        <bar-app class="prueba" :msg="element.name"  :dataSeries="element.series" :xaxisCategories="element.labels" v-if="element.type == 'bar'  && valuesByMonth"></bar-app>
        <donut-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'donut'"></donut-app>
        <progress-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'progress'"></progress-app>
        <area-app class="prueba" :msg="element.name" :title="element.title" :subtitle="element.subtitle" :dataSeries="element.series" v-if="element.type == 'area' "></area-app>
        <spark-app class="prueba" :msg="element.name" :dataSeries="element.series" :sparklineType="element.sparklineType" :chartTitle="element.title" :chartSubtitle="element.subtitle" v-if="element.type == 'sparkline'"></spark-app>
        <mixed-app class="prueba" :msg="element.name" :dataSeries="element.series" :dataLabels="element.labels" :yaxisTitle="element.yTitle" v-if="element.type == 'mixed'"></mixed-app>
        <polar-app class="prueba" :dataSeries="element.series" :dataLabels="element.labels" v-if="element.type == 'polar'"></polar-app>
        <triple-line-app class="prueba" :xaxisCategories="element.categories" :dataSeries="element.series" :title="element.title" v-if="element.type == 'tripleLine'"></triple-line-app>
        <line-app class="prueba" :xaxisCategories="element.categories" :dataSeries="element.series" v-if="element.type == 'line'"></line-app>        
    </div>
    <button class="kc_fab_main_btn" @click="activateModal()"><img class="image-fab-button" src="../assets/fab-button-mail.svg"></button>
   <div class="modal-overlay" v-if="showModal" @click="activateModal()"></div>
    <div class="modal" v-if="showModal">
      <div class="bar-modal">
        <div class="container-bar-image">
          <img class="bar-image" src="../assets/bar-logo3.svg">
        </div>
      </div>
      <div class="data-modal">
        <h1 class="title-data">Envío de Información</h1>
        <div>
          <h1 class="text-data">Se enviará la información desde <br>el portal "x" en relación a la ciudad "x" </h1>
        </div>

        <div>
          <h1 class="title-data">Correo</h1>
        </div>

        <div>
         <h1 class="text-data">Para enviar a un correo a más de una dirección  <br> se deben escribir los correos separados por coma (,) <br><br>Ejemplo: <br><br>correoejemplo1@ejemplo.com,correoejemplo2@ejemplo.com</h1>
        </div>

        <div class="input-box">
            <input class="input" type="text" placeholder="correoejemplo1@ejemplo.com,correoejemplo2@ejemplo.com" @input="handleMailInput($event.target.value)"></div>

        <button class="send-button" @click="confirmMail()">
          Enviar Correo
        </button>
        <!--
        <div class="container-mail-image">
          <img class="mail-image" src="../assets/mail.svg">
        </div>
        -->

      </div>
    </div>

     <div class="alert-overlay" v-if="showAlert"  @click="desactivateAlert()"></div>

    <div class="alert" v-if="showAlert">
      <h1 class="title-alert">Confirmar</h1>
      <h1 class="text-alert">Estás apunto de enviar la información</h1>
      <div class="button-alert-container">
        <div class="right-side-button-alert">
          <h1 class="alert-option" @click="desactivateAlert()">Cancelar</h1>
        </div>
        <div class="left-side-button-alert">
          <h1 class="alert-option" @click="sendMail()">Enviar</h1>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import axios from 'axios'
import BarChart from '../charts/BarChart.vue'
import DonutChart from '../charts/DonutChart.vue'
import ProgressChart from '../charts/ProgressChart.vue'
import AreaChart from '../charts/AreaChart.vue'
import PolarChart from '../charts/PolarChart.vue'
import LineChart from '../charts/LineChart.vue'
import SparklineChart from '../charts/SparklineChart.vue'
import LineColumnArea from '../charts/LineColumnArea.vue'
import TripleLineChart from '../charts/TripleLineChart.vue'
import TextCard from './CardCustom'


export default {
  name: 'Dashboard',
  errored : false,
  loading : false,      
  

  props: {
    textoculiao: String,
  },
    methods:{
      activateModal: function(){
        this.showModal = !this.showModal
      },
      activateAlert: function(){
        this.showAlert = true
      },
      desactivateAlert: function(){
        this.showAlert = false
      },
      confirmMail: function(){
        this.activateAlert();        
      },
      sendMail: function(){
       var mails = this.inputMail;
      axios
        .post('http://localhost:4600/mails',{mails}).then(this.cleanPage());
      },
      handleMailInput: function(value){
        this.inputMail = value;
      },
      cleanPage(){
        this.desactivateAlert();
        this.activateModal();
        this.inputMail ='';
      }
    },
  mounted () {
    axios
      .get('http://201.239.15.63:5000/portalinmobiliario/')
      .then(response => {
        var datos = response.data     
        var datosFiltrados = datos.filter(dato=>{
          var newdate = new Date(dato.date);          
          var month = newdate.getMonth() +"-"+ newdate.getFullYear()            
          return month == "9-2020"
        })           
        var prices = [];        
        var rooms = []        
        var bySectors = [];
        datos.map(dato=>{     
          var newdate = new Date(dato.date);
            var date = newdate.toLocaleString();
            var month = newdate.getMonth() +"-"+ newdate.getFullYear()            
            
            if(!this.byDates[date]){
              this.byDates[date] = []
            }
            if(!this.byMonths[month]){
              this.byMonths[month] = []
            }                                    
            //dato.price = dato.price.replaceAll(".","")               
            this.byDates[date].push({"title":dato.title,"price":( parseInt( dato.price )||0),"commons":(parseInt(dato['Gastos comunes'])||0)})            
            this.byMonths[month].push({"title":dato.title,"price":( parseInt( dato.price )||0),"commons":(parseInt(dato['Gastos comunes'])||0)})                                                
        })        
        datosFiltrados.map(dato=>{                    
          var tam = dato.title.split(",")
          var sector = tam[tam.length - 2] || tam[tam.length - 1]
          if(!bySectors[sector]){
              bySectors[sector] = []
            }
          bySectors[sector].push(dato);
          if(!rooms[dato.Dormitorios||'No Informa']){
            rooms[dato.Dormitorios||'No Informa'] = 0;
          }
          rooms[dato.Dormitorios||'No Informa'] = rooms[dato.Dormitorios||'No Informa'] + 1;
          prices.push(parseInt(dato.price));          
        })
        this.valuesByMonth = [];        
        this.namesByMonth = [];
        for(var mon of Object.keys( this.byMonths) ){            
            this.valuesByMonth.push(this.byMonths[mon].length)
            this.namesByMonth.push(mon)      
        }
        ////console.log(bySectors);
        
        var keys = Object.keys(bySectors)

        var ordenados = keys.sort(function(a, b){  
          return bySectors[b].length - bySectors[a].length; 
        });
        var arr = [];
        var names = []
        ordenados.map(propierty =>{
          
          if(bySectors[propierty].length > 1&&names.length < 40 ){
            names.push(propierty)
            arr.push(bySectors[propierty].length)
          }
        })
        //console.log("ordenados",arr)
        //console.log("names",names)
    //    //console.log("values",this.valuesByMonth)
        this.elements.push(
          {id:5,name:'Cantidad por Mes',size:'bigger',type:'bar',series:this.valuesByMonth,labels:this.namesByMonth},                    
          {id:13,name:'Cantidad de piezas por arriendo',size:'medium',type:'donut', series:Object.values(rooms), labels:Object.keys(rooms)},
          {id:11,name:'Cantidad de piezas por arriendo',size:'medium',type:'donut', series:Object.values(rooms), labels:Object.keys(rooms)},
          {id:7,name:'Cantidad por Sector',size:'bigger',type:'bar',series:arr,labels:names},          
          {id:9,name:'Cantidad de casas en arriendo por Sector',size:'bigger',type:'donut',series:arr,labels:names}      
        )
       
      })      
      .finally(() => this.loading = false)
  },
  
  data: function (){
      return {
        showModal: false,
        showAlert : false,
        inputMail: "",       
        valuesByMonth : [],
        namesByMonth : [],
        byDates : [],
        byMonths : [],
        commons : [],
        prices : [],        
        elements:[                    
        /*                        
                        {id:2,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'bar', title:'Titulo', subtitle:'Subtitulo',series:[23, 11, 29, 50, 23, 12, 77, 51, 44, 22, 30]},
                        {id:3,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'area', title:'Titulo', subtitle:'Subtitulo',series:[87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]},
                        {id:4,name:'charmeleon',size:'small',type:'sparkline',sparklineType:'line', title:'Titulo', subtitle:'Subtitulo', series:[35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]},           
                        
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
                        */     
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
    background: #f5f5f5;
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
  -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
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
  -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
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
  -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
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
  -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
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
/* modal */

.modal-overlay {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 overflow-y: auto;
 width: 100%;
 max-width: 600px;
 max-height: 620px;
 background-color: #FFF;
 /*
 background-image: url('../assets/mail-background.svg');
 */
 /*border-radius: 16px;*/
}

/*modal bar */

.bar-modal{
  width:100%;
  margin-left:0%;
  background:#070618;
}

.container-bar-image{
  width: 70px;
  padding-top:3%;
  padding-bottom: 3%;
  margin-left: calc(  (100% - 70px)/2);
}

.bar-image{
  width: 90%;
  margin-left: 5%;
}

/* modal data */

.container-mail-image{
  width: 80%;
  margin-left: 10%;
}

.mail-image{
  width: 40%;
  margin-top: 8%;
  margin-left: 30%;
}

.title-data{
  text-align: center;
  font-size: 24px;
  margin-top: 4%;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

.text-data{
  text-align: center;
  font-size: 18px;  
  margin-top: 2%;  
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

.sender-container{
  width: 80%;
  margin-left: 10%;
}

.mail-input{
  width: 60%;
  margin-top: 2.5%;
  margin-left: 20%;
}
/* input de correos */

.input-box{
  background: #eeeeee;
  width: 80%;
  margin-top: 5%;
  margin-left: 10%;
  border-radius: 15px;
}

.input{
  border: 0;
  width: 90%;
  margin-left: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  background: #eeeeee;
  color: #252526;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}

.input:active{
  border: 0;
}

.input:focus{
  outline: none;
}

/* boton de envio */

.send-button{
  font-family: "Roboto", sans-serif;
  /* text-transform: uppercase; */
  outline: 0;
  background: #070618;
  width: 60%;
  height: 40px;
  margin-top: 7%;
  margin-bottom: 4%;
  margin-left: 20%;
  border: 0;
  padding: 5px;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition:.5s;
}

.send-button:hover{
  transition: .5s;
  transform: scale(1.1);
}

/* fab button */

.kc_fab_main_btn{
  background-color:#070618;
  width:60px;
  height:60px;
  position: fixed;
  top: 87%;
  left: 90%;
  border-radius:100%;
  background:#070618;
  border:none;
  outline:none;
  color:#FFF;
  font-size:36px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transition:.3s;  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  cursor: pointer;
  top:90;
  transition: .5s;
}

.kc_fab_main_btn:hover{
  transition: .5s;
  transform: scale(1.2);
}

.image-fab-button{
  margin-top: 10px;
  width: 33px;
  height: 30px;
}

.alert-overlay {
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 998;
 background-color: rgba(0, 0, 0, 0.3);
}

.alert{
 padding: 1%;
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 999;
 overflow-y: hidden;
 width:100%;
 height: 100%;
 max-width: 250px;
 max-height: 150px;
 background-color: #FFF;
 border-radius:5px;
 -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
 -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
 box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
}

.title-alert{
  font-size:20px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  margin-left: 5%;
  font-weight: 600;
}


.text-alert{
  font-size:18px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 400;
}

.button-alert-container{
  width:100%;
  margin-top:2%;
  display:flex;
}

.left-side-button-alert{
  width: 100%;
}

.right-side-button-alert{
  width:100%;
}

.alert-option{
  font-size:15px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-weight: 400;
  color: #3880ff;
  cursor:pointer
}
</style>