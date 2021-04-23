<template>
  <div>{{ild}}</div>
</template>

<script>
export default {
 name:"Detail",
 data(){
 return {
   ild:null


 }


 },
 created()
   {
     this.ild =this.$route.params.iid

   console.log(this.$route.params.iid);
   



   }







}

</script>

<style>

</style>