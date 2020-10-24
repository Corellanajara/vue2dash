<template>
  <h1> {{textoculiao}} {{asfkljas}}</h1>
 
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    textoculiao: String,
    asfkljas:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:blue
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
