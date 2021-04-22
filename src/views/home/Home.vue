<template>
   <div id="home" >
     
     <nav-bar class="home-nav">
      <div slot="center">购物车</div>
      </nav-bar>
      <scroll class="cont" ref="scroll" :probe-type="3" @scroll="contertscroll" @pullingUp="contertPullingUp" :pulling-up="true">
      <home-swiper :banners='banners'></home-swiper>
       <RecommendView :recommends='recommends'/>
       <feature-view />
         <tab-control :titles="['流行','新款','精选']" class="tabcon" @tabClick='tabClick' > </tab-control>
         <good-list :goods="showGoods"></good-list>
         </scroll>
        
         <back-top @click.native="backClick" v-show="isShow"></back-top>
   </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
// import {request} from 'network/request'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/TabControl/TabContrl'
import GoodList from 'components/content/goods/GoodList'


import {getHomeMutidata,getHomeGoods} from 'network/home'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
 
export default {
   name:"Home" ,
   components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
   },
   data(){
    return {
      
     banners:[],
     recommends:[],
     good:{
      'pop':{page:0,list:[]},
       'new':{page:0,list:[]},
        'sell':{page:0,list:[]}

     },
     currenttype:'pop',
     isShow:false
   
    }
  

   },
   computed:{
    showGoods(){
    return this.good[this.currenttype].list





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
   this. getHomeMutidata1()
      this.getHomeGoods1('pop')
      this.getHomeGoods1('new')
      this.getHomeGoods1('sell')
     
     },
     
    methods:{
   
    tabClick(index){
    
     switch(index){
      case 0:
       this.currenttype = 'pop'
      break
      case 1:
       this.currenttype = 'new'
       break
       case 2:
          this.currenttype ='sell'

     }
  
    





    },







     
    getHomeMutidata1(){
      getHomeMutidata().then(
      res=> {
      console.log(res);
      this.banners = res.data.banner.list 
       this.recommends = res.data.recommend.list 
     }
     )
    },
     getHomeGoods1(type){
        const page=this.good[type].page+=1
     getHomeGoods(type,page).then(
        res=>{
      console.log(res.data);
       this.good[type].list.push(...res.data.list);
       this.good[type].page+=1;
       this.$refs.scroll.scroll.finishPullUp()
     })
     },
    backClick(){
     this.$refs.scroll.scrollTo(0,0,800)
    
     this.$refs.scroll.scroll.refresh()

    },

   contertscroll(position){
     if (-position.y>2000){
       this.isShow = true }
     else {
     this.isShow = false



     }



    },
    contertPullingUp(){
     console.log('上拉加载更多');
     
     this.getHomeGoods1(this.currenttype)

      



    }





    }
     
     
     
     
     
     
     
     
     
     
     }
</script>

<style scoped>
#home {
  height: 100vh;
 position: relative;
}
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
 .cont {
  
   width: 100%;
   /* height:calc(100%-93px); */
   /* height:300px; */
   position: absolute;
   top:44px;
   bottom: 49px;
   left:0;
   overflow: hidden;
 /* overflow-y:scroll ; */
    /* background-color: red; */
 }

</style>