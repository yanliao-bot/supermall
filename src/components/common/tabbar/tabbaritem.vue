<template>
  <div class="tab-bar-item" @click='itemClick'  >
    <div v-if="isActive"><slot  name="item-icon"></slot></div>
    <div  v-else > <slot name="item-icon-active"></slot></div>
    <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
   link:String,
   activeColor:{
     type:String,
     defalut:'red'
   }
  },
  // data() {
  //   return {
  //     isActive: true
  //   }
  // },
  computed:{
     isActive (){
      
     return !(this.$route.path.indexOf(this.link) !==-1)
          //  console.log(this.link);
          //  console.log(this.$route.link);     
     },
     isActiveColor(){
         
      return this.isActive ? {color:this.activeColor}:{}
      

     }

  },
  
  
  methods:{
     itemClick(){
     
     this.$router.push(this.link).catch(err => {})
      


     }


  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
.active {
  color: red;
}
</style>