<template>  
<div class="login-container">
  <div class="side-container">
    <div class="left-side">
      <div class="logo-container">
        <img class="logo" src="../assets/logo-white2.svg">
      </div>
      <div class="input-container">
        <div class="input-box">
          <input class="input" type="text" placeholder="Correo">
        </div>
        <div class="input-box">
          <input class="input" type="password" placeholder="Contraseña">
        </div>
      </div>
      <div class="button-container">
        <button class="login-button" v-on:click="login">Ingresar</button>         
      </div>
      <!--<button> NAVEGAR A PORTALES</button>-->
    </div>
    <div class="rigth-side">
      <div class="rigth-logo-container">
        <img class="rigth-logo" src="../assets/bar-logo.svg">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TextCard',
  methods:{
    login: function(){
       this.$router.push({ path:'portals' });              
    },
  }
  /*props: {
    msg: Array,
    cardTitle:String,
    cardSubtitle:String,
  }*//*,
  data: function(){
      return{
        title:this.cardTitle,
        subtitle:this.cardSubtitle
      }
  }
  */
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.login-container{
  height: 100vh;
  /* background-image: url('https://cdn.dribbble.com/users/1333218/screenshots/14028944/media/04f335429ab464678d56ce61566147fb.jpg'); */
  background-position: center;
}

.side-container{
  width: 100%;
  height: 100vh;
  display: flex;
}

.left-side{
  background: white;
  width: 60%;
}

/* Logo */

.logo-container{
  width: 40%;
  margin-left: 30%;
  margin-top: 5%;
}

.logo{
  width: 50%;
  margin-left: 25%;
}

/* logo animation */

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-20px);
  }
  100% {
    transform: translatey(0px);
  }
}

/* Inputs */

.input-container{
  width: 50%;
  margin-left: 25%;
}

.input-box{
  background: #eeeeee;
  width: 90%;
  margin-top: 10%;
  margin-left: 5%;
  /* border-radius: 15px; */
  display: flex;
}

.input{
  border: 0;
  width: 90%;
  margin-left: 5%;
  padding-top: 3%;
  padding-bottom: 3%;
  background: #eeeeee;
  color:  #070618;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
}

.input:active{
  border: 0;
}

.input:focus{
  outline: none;
}

/* Button */

.button-container{
  width: 50%;
  margin-left: 25%;
  margin-top: 8%;
}

.login-button{
  font-family: "Roboto", sans-serif;
  font-weight: 700;
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

.rigth-side{
  /*background: #1B0709;*/
  /*background: linear-gradient(90deg, rgba(49,49,204,1) 0%, rgba(115,111,254,1) 100%);*/
  background: #070618;
  background-size: 300% 300%;
	animation: gradient 10s ease infinite;
  width: 40%;
}

.rigth-logo-container{
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
}

.rigth-logo{
  width: 50%;
  margin-top: 25%;
  margin-left: 25%;
  animation: float 1.5s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>