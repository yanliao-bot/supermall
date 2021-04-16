<template>
   <div id="home">
     
     <nav-bar class="home-nav">
      <div slot="center">购物车</div>
      
     </nav-bar>
      <home-swiper :banners='banners'></home-swiper>
       <RecommendView :recommends='recommends'/>
       <feature-view />
         <tab-control :titles="['流行','新款','精选']" class="tabcon"> </tab-control>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>
          <div>列表</div>  
   </div>
   
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// import {request} from 'network/request'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/TabControl/TabContrl'

import {getHomeMutidata} from 'network/home'
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
 
export default {
   name:"Home" ,
   components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
   },
   data(){
    return {
      
     banners:[],
     recommends:[]


    }
  

   },
   created(){
   //   request(
   // { url:'/home/multidata'}
//   function success(res) {
    
//     console.log(res);
    

//    },
//    function failture(err) {
    
//     console.log(err);

//    })}
   //   ).then(res =>{
   //    console.log(res);
   //   }).catch(err=>{
   //   console.log(err);
     


   //   })
     getHomeMutidata().then(
     res=> {
      console.log(res);
      this.banners = res.data.banner.list 
       this.recommends = res.data.recommend.list 
      

     }

     )
     
     
     
     
     }}
</script>

<style>
 .home-nav {
 background-color:var(--color-tint);
 color: #fff;
position: sticky;
top:0;
z-index: 1000;
 }
 
 .tabcon {
 position:sticky;
 top:44px;
 z-index: 1000;

 }
</style>