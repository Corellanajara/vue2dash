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
              <img class="image" src="https://pbs.twimg.com/profile_images/714449847852642304/-YebACih.jpg">
            </div>
            <div class="text-container" style="cursor: pointer;">
                <h1 class="title-card">{{element.title}}</h1>
                <h1 class="subtitle-card">{{element.url}}</h1>
            </div>
          </div>
        </div>

        <div class="final-item">
        </div>
      </div>

      <div class="rigth-side">
        <div v-if="portal!==''">
          <div class="image-right-title">
            <img src="https://www.fisalis.vase.cl/assets/icon/sucursal.svg" class="">
          </div>

          <div class="container-title">
            <h1 class="right-title">{{portal.title}}</h1>
          </div>
          <div class="buttons-container">
            <div class="button-container">
              <button class="login-button" @click="activateModal()">Ingresar</button>
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
    <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
    <button class="button" @click="activateModal()">
      Close Modal
    </button>
        <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
    <button class="button" @click="activateModal()">
      Close Modal
    </button>
        <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
    <button class="button" @click="activateModal()">
      Close Modal
    </button>
        <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
    <button class="button" @click="activateModal()">
      Close Modal
    </button>
        <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
    <button class="button" @click="activateModal()">
      Close Modal
    </button>

  </div>

</div>
</template>

<script>
export default {
  name: 'TextCard',
    methods:{
      selectPortal: function(itemParam){
        this.portal = itemParam
        console.log('item',itemParam.title)
      },
      activateModal: function(){
        this.showModal = !this.showModal
      }
    },
  props: {
    msg: Array,
  },
  mounted(){
    this.elements.push(
    {title:'Portal Inmobiliario',url:'portalinmobiliario.com'},
    {title:'Yapo',url:'https://www.portalinmobiliario.com/'},
    {title:'Yapo',url:'https://www.portalinmobiliario.com/'},
    {title:'Portal Inmobiliario',url:'portalinmobiliario.com'},
    {title:'Yapo',url:'https://www.portalinmobiliario.com/'},
    {title:'Yapo',url:'https://www.portalinmobiliario.com/'},)
  },

  data: function(){
      return{
          elements:[],
          portal:'',
          showModal: false
      }
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
  background: white;
  height: 50px;
  padding-bottom: 0.2%;
  border-bottom-style: solid;
  border-bottom-color: #f5f5f5;
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
  overflow-x:hidden;
  background: #e6e9f8;
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
  -webkit-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  -moz-box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
  box-shadow: 1px 2px 56px 4px rgba(193,202,235,1);
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
  background: linear-gradient(90deg, rgba(49,49,204,1) 0%, rgba(115,111,254,1) 100%);
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

.modal-overlay {
 position: absolute;
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
 max-height: 530px;
 background-color: #FFF;
 /*border-radius: 16px;*/
 padding: 25px;
 
 h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
 }
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

@media (max-width: 900px) {
  
  .modal{
    max-width: 100%;
    max-height: 100%;
  }
}
</style>