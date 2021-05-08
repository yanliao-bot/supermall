<template>
     
    <div class="cart-list" >
        <Scroll class="content"  :probe-type ="3"  ref='Homescroll'>
     <cart-list-item v-for="(item,index) in length" :key="index" :itemInfo="item">{{item}}</cart-list-item>
      
       </Scroll>
     
    <cart-button-bar>
    </cart-button-bar>
    </div>
</template>

<script>
 import Scroll from 'components/common/scroll/Scroll'
 import  CartListItem from "./CartListItem"
 import CartButtonBar from "./CartButtonBar"

import {mapGetters}  from 'vuex'
export default {
   name:"CartList",
   components:{
     Scroll,
     CartListItem,
     CartButtonBar
    
   },
      computed:{
    //  ...mapGetters(['cartgory'])
        ... mapGetters({'length':'cartlist'})

    },
    activated() {
    this.$refs.Homescroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
    /* background-color: red; */
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>