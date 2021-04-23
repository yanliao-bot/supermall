<template>
     <div id="wrapper" ref="wrapp">
        <div class="content">
         <slot></slot>   


        </div>

     </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
 name:'Scroll',
 data (){
  return {
  scroll:null
  }

 },
 props:{
 probeType:{
   type:Number,
   default:0
 },
 pullingUp:{
 type:Boolean,
   default:true




 }



 },
 mounted () {
   this.scroll = new BScroll(this.$refs.wrapp, 
{
  probeType:this.probeType,
  pullUpLoad:this.pullingUp,
  click:true
//   observeDOM:true
})
// this.scroll.scrollTo(0,0)

this.scroll.on('scroll',(position)=>{

//    console.log(position);
this.$emit('scroll',position)

 })
this.scroll.on('pullingUp',()=>{

  this.$emit('pullingUp')
  
  //  this.scroll.scroll.finishPullUp()

 })





 },
 methods:{
 scrollTo (x,y,time=800){
   this.scroll&&this.scroll.scrollTo(x,y,time)
 },
 refresh(){
   this.scroll && this.scroll.refresh()
  


 


 }





 }
}
</script>

<style>

</style>