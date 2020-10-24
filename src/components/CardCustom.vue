<template>  
    <ul id="demo">
        <li v-for="mensaje of msg" >
            {{mensaje.base_stat}}
        </li>
    </ul>  
</template>

<script>
export default {
  name: 'CardCustom',
  props: {
    msg: Array
  }
}
console.log("no cacho na");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:red;  
}

</style>
