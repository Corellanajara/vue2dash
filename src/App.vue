<template>
  <div>
   <router-view></router-view>
   <!--<portal-app></portal-app>-->
   <!-- <login-app></login-app>-->
   <!--<dashboard-app></dashboard-app>-->
    <!--
    <div class="caja">
      <mail-app title="Hola"></mail-app>
    </div>
    -->

    <!--
    <chart-app  msg="charizard"></chart-app>          
    <chart-app  msg="charmander"></chart-app>      
    -->
  </div>
  
    
  
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import CardCustom from './components/CardCustom.vue'
import MailCard from './components/MailCard.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import Portals from './components/Portals.vue'

export default {
  name: 'App',
  data () {
    return {
      items: [
        { text: 'item 1' },
        { text: 'Item 2' }
      ],
      stats:null,
      var1: 'hola cabros',
    }
  }
  ,
  components: {
    'hello-app':HelloWorld,
    'card-app':CardCustom,
    'mail-app':MailCard,
    'dashboard-app':Dashboard,
    'login-app':Login,
    'portal-app':Portals
  }

}

</script>

<style>
.esteesflex{
  display:flex;
}

body{
  background: #e6e9f8;
  background-position: center;
  margin: 0%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fondo{
background: red;
}

.caja{
  width: 100%;
  top: 2%;
  position: fixed;
  z-index: 999;
}
</style>
