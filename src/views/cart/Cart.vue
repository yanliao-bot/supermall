<template>
    <div class="carts"> 
        <nav-bar class="cart" > <div slot="center">购物车({{length}})</div></nav-bar>
          <!-- 商品列表 -->
       <!-- <div>{{$store.state.CartList}}</div> -->
           <cart-list class="cartlist"></cart-list>
      
      </div>
 
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from "./CartList"
import {mapGetters}  from 'vuex'
export default {
    name:"Cart",
    components:{
        NavBar,
        CartList
    
    
    },
    computed:{
    //  ...mapGetters(['cartgory'])
        ... mapGetters({'length':'cartgory'})

    }
}
</script>

<style scoped>

.carts {
 height: 100vh;



}



.cart {
 background-color:var(--color-tint);
color:#fff;
font-weight:700;




}






</style>