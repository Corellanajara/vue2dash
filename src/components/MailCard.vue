<template>
  <div class="card">
    <div class="title-container">
      <img class="imagen" src="../assets/logo2.png">
    </div>
    <div>
      <h1 class="title-data">Envío de Información</h1>
    </div>
    <div>
      <h1 class="text-data">Se enviará data desde el portal "x" en relación a la ciudad "x" </h1>
    </div>

    <div>
      <h1 class="title-data">Correo</h1>
    </div>

    <div>
      <h1 class="text-data">Para enviar a un correo más de una dirección  <br> se deben escribir los correos separados por coma (,) <br><br>Ejemplo: <br><br>correoejemplo1@ejemplo.com,correoejemplo2@ejemplo.com</h1>
    </div>

    <div class="sender-container">
      <input class="mail-input" placeholder="Ingrese sus correos">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.card{
    width:80%;
    margin-left:10%;
    background:rgba(255, 255, 255, 0.9);
    padding-bottom: 2.5%;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    -moz-box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    box-shadow: 0px 2px 5px 0px rgba(184,184,184,1);
    border-radius: 5px;
}

.title-container{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #2a1468;
}

.title{
  text-align:center;
  color: white;
  font-size: 30px;
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
  font-size: 16px;  
  margin-top: 2%;  
  font-family: 'Roboto', sans-serif;
}

.imagen{
  width: 10%;
  margin-left: 45%;
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
</style>
