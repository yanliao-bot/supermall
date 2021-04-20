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
 mounted () {
   this.scroll = new BScroll(this.$refs.wrapp, 
{
  probeType:3,
  pullUpLoad:true,
  click:true
//   observeDOM:true
})
// this.scroll.scrollTo(0,0)

// this.scroll.on('scroll',(position)=>{

//    console.log(position);

//  })




 },
 methods:{
 scrollTo (x,y,time=800){
    this.scroll.scrollTo(x,y,time)




 }





 }
}
</script>

<style>

</style>