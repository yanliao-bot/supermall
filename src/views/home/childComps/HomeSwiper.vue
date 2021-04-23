<template>
    <swiper> 
         <swiper-item v-for="item in banners" :key='item.title' >
          
            
             <a  :href="item.link"> <img :src="item.image"  @load="imageLoad" alt="" /></a>
         </swiper-item>


        </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    name:"HomeSwiper",
    components:{
        Swiper,
        SwiperItem  
    },
    data (){

     return { 
         isLoad:false
        }
    


    },
    methods:{
     imageLoad () {
         if(!this.isLoad){
              this.$emit('imageloadfinish')
           
              this.isLoad = true
         
         
         }
     
    
     



      }



    },
   props:{
    banners:{
    type:Array,
    defult(){
     return []
    }

    }



   }
}
</script>

<style>

</style>