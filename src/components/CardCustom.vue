<template>  
    <span>{{msg}}</span>
</template>

<script>
export default {
  name: 'CardCustom',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:red;  
}

</style>
