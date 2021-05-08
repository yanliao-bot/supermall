<template>
  <div class="toast">
      <div>{{message}}</div>
      </div>
</template>

<script>
export default {
  name:"toast",
  props:{
    message:{
     type:String,
     default:''





    }




  }
}
</script>

<style>
 .toast{
    position:fixed;
     top:50%;
     left:50%;
     color:#fff;
     transform:translate(-50%,-50%);
    background-color:rgba(0, 0, 0,0.75);
 }
</style>