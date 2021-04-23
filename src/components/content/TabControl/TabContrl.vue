<template>
  <div class="tabcontrl">
   <div v-for="(item,index) in titles" :key="index" class="tabcontrl-item" :class="{active:(index===currentIndex)}" @click="itemClick(index)">
       <span >{{item}}</span>
       </div>
  </div>
</template>

<script>
export default {
name:"tabcontrl",
  props:{
    titles:{
     type:Array,
     default(){
     return []
      }
    }
  },
   data(){
   return {
     currentIndex:0
     
   }    
   },
   methods:{
    itemClick(index){

      this.currentIndex = index;
      this.$emit('tabClick',index)
    } 



   }
  

}
</script>

<style>
.tabcontrl {
 display:flex;
 text-align: center;
 background-color:#fff;
 
}
.tabcontrl-item {
   flex:1;
   height:40px;
   line-height:40px;
}

.tabcontrl-item span {

 padding-bottom:3px;

}


.active {
  color:var(--color-high-text);
 
}

.active span {
 border-bottom: 3px solid var( --color-tint);
} 




</style>