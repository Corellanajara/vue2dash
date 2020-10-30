<template>    
    
  <div class="dashboard-container">
    <div v-bind:class="element.size" v-for="element of elements" v-bind:key="element.id">
        <table-card-app :msg="element.name" :data="element.data" v-if="element.type == 'table'"></table-card-app>
        
    </div>
   
  </div>
  
</template>

<script>


import axios from 'axios'
import TableCard from '../charts/TableCard.vue'


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
      }
    },
  mounted () {
    axios
      .get('http://201.239.15.63:5000/contraloria')
      .then(response => {
        var entireData = response.data;
        console.log(entireData)
        this.elements.push(
          {id:5,name:'Datos de las contralorias',size:'bigger',type:'table',data:entireData},                              
        )
       
      })      
      .finally(() => this.loading = false)
  },
  
  data: function (){
      return {
        showModal: false,        
        valuesByMonth : [],
        namesByMonth : [],
        byDates : [],
        byMonths : [],
        commons : [],
        prices : [],        
        elements:[]};
  },
  components: {    
    'table-card-app':TableCard,
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

</style>