<template>
  <div id="detail">
      <!-- 导航 -->
     <detail-nav-bar class="detail-nav"></detail-nav-bar>
     <Scroll class="content">
     <detail-swiper :top-images='topImages'></detail-swiper>
     <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      </Scroll>
  </div>
</template>

<script>
  import DetailNavBar  from './childComps/DetailNavBar'
  import DetailSwiper  from './childComps/DetailSwiper'
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
   import DetailShopInfo from "./childComps/DetailShopInfo"
   import Scroll from 'components/common/scroll/Scroll'
  import {getDetail,Goods,Shop}   from 'network/detail'
export default {
 name:"Detail",
  components:{
     DetailNavBar, 
     DetailSwiper,
    DetailBaseInfo,
     DetailShopInfo,
     Scroll
  },     
 data(){
 return {
   ild:null,
   topImages:[],
   goods:{},
   shop:{}
 }


 },
 created()
   {
     this.ild =this.$route.params.iid

   console.log(this.$route.params.iid);
    getDetail(this.ild).then(res=>{
    console.log(res);
    const  data = res.result;
      this.topImages = res.result.itemInfo.topImages
       this.goods =new Goods (data.itemInfo,data.columns,data.shopInfo.services)
       this.shop = new Shop (data.shopInfo)




    })



   }







}

</script>

<style>
#detail {
  position: relative;
  z-index: 9;
   background-color: #ffff;

}
#content {
 height: calc(100%-44px);
  


}
.detail-nav {
 position: fixed;
  background-color: #fff;
  width: 100%; 
 top:0;
 z-index: 9;
top:0;


}


</style>