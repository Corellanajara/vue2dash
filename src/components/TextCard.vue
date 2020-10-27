<template>  
<div class='text-container'>
    <h1 class="title-card" :title="title" :subtitle="subtitle" >{{this.cardTitle}}</h1>
    <h1 class="subtitle-card">{{this.cardSubtitle}}</h1>
</div>
</template>

<script>
export default {
  name: 'TextCard',
  props: {
    msg: Array,
    cardTitle:String,
    cardSubtitle:String,
  },
  data: function(){
      return{
        title:this.cardTitle,
        subtitle:this.cardSubtitle

      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.title-card{
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
}   
.subtitle-card{
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
}
.text-container{
    width: 100%;
    text-align: center;

}
</style>