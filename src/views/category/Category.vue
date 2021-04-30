<template>
  <!-- <h2>分类</h2>
   -->
   <div id="wrapper" >
   <div class="content">
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>
   <div>1233445</div>





   </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
// import BScroll from '@better-scroll/core'
// import Pullup from '@better-scroll/pull-up'
// BScroll.use(Pullup)
export default {
 name:"Category",
 data(){
   return  {serve:null}   


 },
mounted(){
  
this.serve = new BScroll(document.getElementById("wrapper"), 
{
  probeType:3,
  pullUpLoad:true,


})
 this.serve.on('scroll',(position)=>{

   console.log(position);

 })
   this.serve.on('pullingUp',()=>{

   console.log('上拉加载更多');
   bscroll.finishPullUp()

 })





}







}
</script>

<style>
#wrapper{width:100%;
     height:100px;
     background-color: red;
/* overflow: hidden; */
/* overflow-y:scroll ; */
}

</style>