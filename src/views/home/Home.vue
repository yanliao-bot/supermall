<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
        :titles="['流行', '新款', '精选']"
      
        @tabClick="tabClick"
        ref="tabcontrll1"
        class="tab"
         v-show="this.isTabFixed"
      >
      </tab-control>
    <scroll
      class="cont"
      ref="scroll"
      :probe-type="3"
      @scroll="contertscroll"
      @pullingUp="contertPullingUp"
      :pull-up-load="true"
    >
      <home-swiper :banners="banners" @imageloadfinish="imageloadfinish"></home-swiper>
      <RecommendView :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
      
        @tabClick="tabClick"
        ref="tabcontrll2"
        :class="{fixed:this.isTabFixed}"
      >
      </tab-control>
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
     isShow:false,
     tabOffsetTop:0,
     isTabFixed:false,
       satY:0
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
     mounted(){
        const refresh = this.debounce (this.$refs.scroll.refresh,50)
     
       this.$bus.$on('homeitemImageLoad',(e)=>{

      //  this.$refs.scroll && this.$refs.scroll.refresh()
        refresh()
      


       })
      //  this.tabOffsetTop = this.$refs.tabcontrll.$el.offsetTop
    // console.log(this.$refs.tabcontrll);
       


     },
     
    methods:{
       debounce(fu,delay ){
        let time = null ;

        return  function (...args) {
           if(time){clearTimeout(time)}
     
           time=setTimeout(
           ()=>{
                // console.log('----');
        
             fu.apply(this,args)
           },delay)





        }
      



       },
  
   
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
    this.$refs.tabcontrll2.currentIndex=index
    this.$refs.tabcontrll1.currentIndex=index





    },







     
    getHomeMutidata1(){
      getHomeMutidata().then(
      res=> {
      // console.log(res);
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
       
      if((-position.y) >this.$refs.tabcontrll2.$el.offsetTop){
         this.isTabFixed =true
      }
      else{

      this.isTabFixed =false

      }

     
    //  console.log((-position.y)>this.$refs.tabcontrll2.$el.offsetTop);
     
    //  console.log(-position.y);
    //  console.log(this.$refs.tabcontrll2.$el.offsetTop);
        

    },
    contertPullingUp(){
     console.log('上拉加载更多');
     
     this.getHomeGoods1(this.currenttype)

      



    },
     imageloadfinish () {   
        // console.log( this.$refs.tabcontrll2.$el.offsetTop);


     }
      



    },
    activated(){
      
      this.$refs.scroll.scroll.scrollTo(0,this.satY,0)
      this.$refs.scroll.refresh()


    },
     
     deactivated(){

             this.satY  =  this.$refs.scroll.scroll.y




     }
     
     
     
     
     
     
     
     
     }
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: sticky;
  top: 0; */
  z-index: 1000;
}

.tabcon {
  /* position: sticky; */
  top: 44px;
  z-index: 1000;
}
.cont {
  width: 100%;
  /* height:calc(100%-93px); */
  /* height:300px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  overflow: hidden;
  /* overflow-y:scroll ; */
  /* background-color: red; */
}
/* .fixed {
   position:relative;
   left:0;
   right:0; 
   top:0px;
} */
.tab {
  z-index:9;
position:relative;
    left:0;
   right:0; 
   top:0;
}
</style>