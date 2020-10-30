<template>  
<div class="principal-container">
    <div class="bar">
        <div class="input-box">
            <input class="input" type="search" placeholder="Buscar">
        </div>
        <div class="text-bar-container">
            <h1>Cerrar Sesión</h1>
        </div>
    </div>

  <div class="sides-container">
      <div class="left-side">
        <div class="card-container" v-for="element of elements" v-bind:key="element.id" @click="selectPortal(element)">
          <div class="card-wrapper">
            <div class="image-container">
              <img class="image" src="../assets/portal-inmobiliario.jpg">
            </div>
            <div class="text-container" style="cursor: pointer;">
                <h1 class="title-card">{{element.title}}</h1>
                <h1 class="subtitle-card">{{element.url}}</h1>
            </div>
          </div>
        </div>

          <div class="card-container">
            <div class="card-wrapper">
              <div class="image-container">
                <img class="image" src="../assets/yapo.jpg">
              </div>
              <div class="text-container" style="cursor: pointer;">
                  <h1 class="title-card">Yapo</h1>
                  <h1 class="subtitle-card">Proximamente</h1>
              </div>
            </div>
          </div>

        <div class="final-item">
        </div>
      </div>

      <div class="rigth-side">
        <div v-if="portal!==''">
          <div class="image-right-title">
            <img src="../assets/unselected-chart3.svg" class="">
          </div>

          <div class="container-title">
            <h1 class="right-title">{{portal.title}}</h1>
          </div>
          <div class="buttons-container">
            <div class="button-container">
              <!--<button class="login-button" >Ingresar</button>-->
              <button class="login-button" @click="activateModal()">Ver Datos</button>
            </div>
            <div class="button-container">
              <button class="login-button">Configuraciones</button>
            </div>
          </div>
        </div>

        <div v-if="portal===''">
          <div class="image-right-title">
            <img src="../assets/unselected-chart2.svg" class="">
          </div>

          <div class="container-title">
            <h1 class="right-title">No has seleccionado ningún portal por el momento</h1>
          </div>
        </div>
      </div>
   </div>
   <div class="modal-overlay" v-if="showModal" @click="activateModal()"></div>
    <div class="modal" v-if="showModal">
      <div class="bar-modal">
        <div class="container-bar-image">
          <img class="bar-image" src="../assets/bar-logo3.svg">
        </div>
      </div>
      <div class="data-modal">

        <div class="first-container" v-if="modalEstate==0">
          <h1 class="title-data">Información</h1>
          <div>
            <h1 class="text-data">Para poder acceder a la información es <br>necesario que selecciones el tipo de información <br>a la que quieres ingresar</h1>
          </div>

          <h1 class="title-data">Primero, selecciona una ciudad</h1>
          <div class="input-search-box">
            <input class="input-search" type="buscar para filtrar" v-model="filterCity" placeholder="Buscar">
          </div>
          <div class="item-container" v-for="(city,index) in filteredList()" v-bind:key="city.id" @click="changeCityEstate(city,index)">
            <div class="item-radio-button" v-if="city.estate">
              <img class="radio-image" src="../assets/selected-radio.svg">
            </div>
            <div class="item-radio-button" v-if="!city.estate">
              <img class="radio-image" src="../assets/unselected-radio.svg">
            </div>
            <div class="item-title-container">
              <h1 class="item-title" >{{city.name}}</h1>
            </div>
          </div>
          
        <h1 class="title-data">Lista de ciudades seleccionadas</h1>
          <div class="item-tags">
            <div class="item-container" v-for="(selectedCity,index) in selectedCities" v-bind:key="selectedCity.id" @click="removeElement(selectedCity,index)">
              <div class="text-container-image">
                <h1 class="text-tag">{{selectedCity.name}}</h1>
              </div>
              <div class="item-cancel-button">
                <img class="cancel-image" src="../assets/cancel-button.svg">
              </div>
            </div>
          </div>
          <button class="modal-button" @click="changeModal(1)">Continuar</button>
        </div>
               
        <div class="second-container" v-if="modalEstate==1">
          <h1 class="title-data">Selecciona un rango de fechas</h1>
          <div>
            <h1 class="text-data">(Fecha inicial y Fecha de término que deseas)</h1>
          </div>
          <div>
            <h1 class="title-date">Fecha inicial (Desde)</h1>
          </div>
          <div class="date-container">      
            <input class="date-input" type="date" value="2020-10-30" min="2015-10-9" max="2020-10-30">
          </div>
          <div>
            <h1 class="title-date">Fecha de término (Hasta)</h1>
          </div>
          <div class="date-container">      
            <input class="date-input" type="date" value="2020-10-30" min="2015-10-9" max="2020-10-30">
          </div>
          <button class="modal-button" @click="changeModal(2)">Continuar</button>                   
          <button class="modal-button" @click="changeModal(0)">Volver Atrás</button> 
        </div>

          <div class="third-container" v-if="modalEstate==2">
            <h1 class="title-data">Selecciona un rango de precios</h1>
            <div>
              <h1 class="text-data">Desde que precio hasta precio deseas la información</h1>
            </div>
            <h1 class="title-price">Precio Inicial (Desde)</h1>
           
            <div class="input-price">
                <input class="input" type="number" placeholder="Desde">
            </div>

            <h1 class="title-price">Precio Final (Hasta)</h1>

            <div class="input-price">
                <input class="input" type="number" placeholder="Hasta">
            </div>
            <!--
            <div class="range-container">          
                <input class="slider" type="range" min="0" max="1000000" value="500000" id="myRange">
            </div>
            -->
            <button class="modal-button" @click="goToDashboard()">Generar Información</button>            
            <button class="modal-button" @click="changeModal(1)">Volver Atrás</button>                           
          </div>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  filterCity : '',
  name: 'TextCard',
    methods:{
      filteredList() {      
        return this.cities.filter(city => {
          //console.log("filtrando");
          return city.name.toLowerCase().includes(this.filterCity.toLowerCase())
        })
      },      
      selectPortal: function(itemParam){
        this.portal = itemParam
        //console.log('item',itemParam.title)
      },
      goToDashboard: function(){
        this.$router.push({ path:'dashboard' });              
      },
      activateModal: function(){
        this.showModal = !this.showModal
      },
      changeCityEstate: function(cityParam,index){

        this.cities[index].estate = !this.cities[index].estate
        if(this.cities[index].estate){
          this.selectedCities.push(cityParam);
        }
        if(!this.cities[index].estate){
          var arr = [];

          for(let i= 0; i<this.selectedCities.length; i++){
            if(cityParam.id!=this.selectedCities[i].id){
              arr.push(this.selectedCities[i])
            }
          }
          
          this.selectedCities = arr;
        }
      },
      removeElement: function(cityParamRe,indexRe){
        this.selectedCities[indexRe].estate = false
        var arr = [];

        for(let i= 0; i<this.selectedCities.length; i++){
           if(cityParamRe.id!=this.selectedCities[i].id){
            arr.push(this.selectedCities[i])
          }
        }
        this.selectedCities = arr;
      },
      changeModal: function(indexChangeModal){
        this.modalEstate = indexChangeModal
      }
    },
  props: {
    msg: Array,
  },
  mounted(){
    this.elements.push(
    {title:'Portal Inmobiliario',url:'portalinmobiliario.com'})
    this.cities.push({id:1,name:'concepcion',estate:false},{id:2,name:'santiago',estate:false},{id:3,name:'talca',estate:false},{id:4,name:'valparaiso',estate:false})
  },

  data: function(){

      return{   
          filterCity : '',       
          elements:[],
          cities: [],
          selectedCities: [],
          portal:'',
          showModal: false,
          modalEstate: 0,
      }
  },
  computed: {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.principal-container{
  height: 100vh;
  overflow-y: hidden;
}

.bar{
  width: 100%;
  background:#070618;
  height: 50px;
  padding-bottom: 0.2%;
  border-bottom-style: solid;
  border-bottom-color:#070618;
  display: flex;
}

/*
.filter-container{
  height: 10vh;
  background: white;
  position: inherit;
  width: 70%;
  margin-left: 15%;
  margin-top: 2.5%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-radius: 8px;
  -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
}
*/

.input-container{
  width: 50%;
  margin-left: 25%;
}

.text-bar-container{
  margin-left: 45%;
  width: 20%;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-align: right;
  color: white;
}

.input-box{
  background: #eeeeee;
  width: 30%;
  margin-top: .5%;
  margin-left: 2.5%;
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

.text-container{
  width: 100%;
}

.sides-container{
  display: flex;
}

.left-side{
  width: 70% !important;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background: #f5f5f5;
}

.cards-container{
  width: 100%;
}

.card-container{
  background: white;
  width: 25%;
  margin-left: 5%;
  margin-top: 4%;
  padding-top: 2.5%;
  padding-bottom: 2.5%;
  border-radius: 8px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
  font-family: "Roboto", sans-serif;
  transition: .5s;
  cursor: pointer;
  display: inline-flex;
}

.card-container:hover{
  transition: .5s;
  transform: scale(1.1);
}

.card-wrapper{
  width: 80%;
  margin-left: 10%;
}

.title-card{
  width: 100%;
  margin-left: 0;
  font-size: 20px;
  text-align: center;
}

.subtitle-card{
  width: 100%;
  font-size: 13px;
  color: #90a4ae;
  text-align: center;
}

.card-images{
  width: 100px;
  height: 100px;
  border-radius: 200px;
}

.image-container{
  width: 50%;
  margin-left: 25%;
}

.image{
  width: 100px;
  border-radius: 200px;
}

.item-sucursal{
  cursor: pointer;
}

.final-item{
  height: 20vh;
}

.rigth-side{
  width: 30%;
  height: 100vh;
  background: white;
  overflow-y: auto;
}

.container-title{
  width: 70%;
  margin-left: 15%;
}

.image-right-title{
  width: 60%;
  margin-top: 20%;
  margin-left: 20%;
}

.right-title{
  text-align: center;
  font-size: 20px;
  color: #252526;
  font-family: 'Roboto', sans-serif;
}

.subtitulo-texto{
  text-align: center;
  font-size: 17px;
}

.container-right-image{
  width: 50%;
  margin-top: 10%;
  margin-left: 25%;
  border-radius: 200px;
}

.title-portal{
  width: 100%;
  text-align: center;
  color: white;
}

.buttons-container{
  margin-top: 15%;
}

.button-container{
  width: 80%;
  margin-left: 10%;
  margin-top: 4%;
}

.login-button{
  font-family: "Roboto", sans-serif;
  /* text-transform: uppercase; */
  outline: 0;
  background: #070618;
  width: 90%;
  height: 40px;
  margin-left: 5%;
  border: 0;
  padding: 5px;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition:.5s;
}

.login-button:hover{
  transition: .5s;
  transform: scale(1.1);
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
 overflow-x: hidden;
 overflow-y: auto;
 width: 100%;
 max-width: 600px;
 max-height: 530px;
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
  margin-left: calc((100% - 70px)/2);
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

.input-search-box{
  background: #eeeeee;
  width: 70%;
  margin-top: .5%;
  margin-left: 15%;
  border-radius: 15px;
}

.input-search{
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

.input-search:active{
  border: 0;
}

.input-search:focus{
  outline: none;
}

.modal-button{
  font-family: "Roboto", sans-serif;
  /* text-transform: uppercase; */
  outline: 0;
  background: #070618;
  width: 50%;
  height: 40px;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 25%;
  border: 0;
  padding: 5px;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition:.5s;
}

.select-css {
  width: 70%;
  background: #f5f5f5;
  height: 35px;
  margin-top: 0%;
  margin-left: 15%;
  padding-left: 2.5%;
  border: none;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #252526;
  border-color: #fff transparent transparent transparent !important;
}
/*
.text-option{

}
*/
.select-css::-ms-expand {
  display: none;
}

.select-css:hover {
  border: none;
}

.select-css:active{
  border: none;
  border-color: #fff transparent transparent transparent !important;
}

.select-css:focus {
  border: none;
  border-color: #fff transparent transparent transparent !important;
}

.select-css:checked{
  border: none;
}

.select-css option {
  margin-top: 2%;
  font-weight:normal;
}

/* Seleccionador de ciudad */

.list-header{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  margin-left: 3%;
}

.item-container{
  width: 100%;
  height: 50px;
  margin-top: 2%;
  background: white;
  border: 2px;
  cursor:pointer;
  display: flex;
  border-bottom-style: solid;
  border-bottom-color:#EFEFEF;  
}

.item-title-container{
  width: 40%;
}

.item-title{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-left: 8%;
}

.item-radio-button{
  width: 10%;
  margin-left:5%;
}

.radio-button{
  margin-top: 22%;
  margin-left: 25%;
  width: 20px;
  height: 20px;
}

.radio-image{
  margin-left: calc((100% - 20px)/2);
  margin-top: 25%;
  width: 20px;
  height: 20px;
}

.city-tag{
  margin-left: 2%;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: 10px;
  border-bottom-right-radius: 25px;
  background: #f5f5f5;
  cursor: pointer;
}

.text-tag{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 20px;
}

.text-container-image{
  width: 80%;
  margin-left: 5%;
  margin-right: 5%;
}

.item-cancel-button{
  width: 10%;
}

.cancel-image{
  width: 20px;
  height: 20px;
  margin-left: calc((100% - 20px)/2);
  margin-top: 25%;  
}

/* fechas */

.title-date{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.date-container{
  width: 90%;
  margin-left: 5%;
  margin-top: 3%;
}


.date-input{
  padding: 2%;
  width: 50%;
  margin-left: 23%;
  background: #f5f5f5;
  border: none;
}

/* Prices */

.title-price{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  margin-top:5%;
}

.input-price{
  background: #eeeeee;
  width: 80%;
  margin-top: 0%;
  margin-left: 10%;
  border-radius: 5px;
}

.input{
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
}





@media (max-width: 900px) {
  
  .modal{
    max-width: 100%;
    max-height: 100%;
  }
}
</style>