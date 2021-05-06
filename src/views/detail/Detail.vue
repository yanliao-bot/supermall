<template>
  <div id="detail">
      <!-- 导航 -->
     <detail-nav-bar class="detail-nav" @titleClick='titleClick' ref="nav"></detail-nav-bar>
     <Scroll class="content" ref="scroll"  :probe-type ="3"   @scroll = "contentscroll">
     <detail-swiper :top-images='topImages'></detail-swiper>
     <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-parms-info  ref="parms"     :param-info="paramsInfo"></detail-parms-info>
      <detail-commend-info ref='commend'    :comment-info="commentInfo" ></detail-commend-info>
       <goods-list  ref='rescommend' :goods='recommend'></goods-list>
      </Scroll>
      <back-top @click.native="backClick" v-show="isDetailShow"></back-top>
      <detail-bottom-bar />
  </div>
</template>

<script>
  import DetailNavBar  from './childComps/DetailNavBar'
  import DetailSwiper  from './childComps/DetailSwiper'
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailParmsInfo from "./childComps/DetailParmsInfo"
  import DetailCommendInfo from "./childComps/DetailCommendInfo"
  import DetailBottomBar  from  "./childComps/DetailBottomBar"
  import GoodsList from 'components/content/goods/GoodList'
   import Scroll from 'components/common/scroll/Scroll'
   import BackTop from 'components/content/backTop/BackTop'
   import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import {getDetail,Goods,Shop,GoodsParam,getRemmend,getDebounce}   from 'network/detail'
export default {
 name:"Detail",
  components:{
     DetailNavBar, 
     DetailSwiper,
    DetailBaseInfo,
     DetailShopInfo,
     Scroll,
     DetailGoodsInfo,
     DetailParmsInfo,
     DetailCommendInfo,
     GoodsList,
    DetailBottomBar,
    BackTop
  },
 data(){
 return {
   ild:null,
   topImages:[],
   goods:{},
   shop:{},
   detailInfo:{},
   paramsInfo:{},
   commentInfo:{},
   recommend:[],
   themeTopYs:[0,1000,2000,3000,4000],
   getThemeY:null,
   thiscurrentindex:0,
    isDetailShow:false,

   
 }


 },
 created()
   {
     this.ild =this.$route.params.iid






  //  console.log(this.$route.params.iid);
    getDetail(this.ild).then(res=>{
    // console.log(res);
    const  data = res.result;
      this.topImages = res.result.itemInfo.topImages
       this.goods =new Goods (data.itemInfo,data.columns,data.shopInfo.services)
       this.shop = new Shop (data.shopInfo)
       this.detailInfo = data.detailInfo;
       this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.cRate !== 0){
        this.commentInfo =data.rate.list[0]
       


      }
    getRemmend().then(res=>{
      console.log(res);
       this.recommend = res.data.list

     })






    })
   
    

      
    

   },
      mounted(){
         

        const refresh = this.debounce (this.$refs.scroll.refresh,50)
     
       this.$bus.$on('detailitemImageLoad',(e)=>{

      //  this.$refs.scroll && this.$refs.scroll.refresh()
        refresh()
       


       })
      //  this.tabOffsetTop = this.$refs.tabcontrll.$el.offsetTop
    // console.log(this.$refs.tabcontrll);
        


     },
     updated(){
        

      
        setTimeout(  
        
      ()=>{
        this.themeTopYs=[]
              this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.parms.$el.offsetTop) 
              this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
             this.themeTopYs.push(this.$refs.rescommend.$el.offsetTop)
               console.log(this.themeTopYs)}
        
             ,500 )
          
     },
  
methods:{
   debounce(fu,delay){
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
         titleClick(index){
         
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index])

      },
  
  imageLoad(){
   this.$refs.scroll.refresh()
  




  },

  contentscroll(position) {
     const positonY = - position.y
     for(let i=0;i<this.themeTopYs.length;i++){
      //  positonY>this.themeTopYs[i]&&positonY<this.themeTopYs[i+1]
          if( this.thiscurrentindex!==i &&(i<this.themeTopYs.length-1 && positonY>=this.themeTopYs[i]&&positonY<this.themeTopYs[i+1])||(i===this.themeTopYs.length-1&&positonY>=this.themeTopYs[i])){
                this.thiscurrentindex = i;
                 this.$refs.nav.currentindex =  this.thiscurrentindex 
              



          }






     }
      if (-position.y>2000){
       this.isDetailShow = true }
     else {
     this.isDetailShow = false
     }
  },
   backClick(){
     this.$refs.scroll.scrollTo(0,0,800)
    
     this.$refs.scroll.scroll.refresh()

    },
 








}






}

</script>

<style scoped>
#detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    background-color: #fff;
    height: calc(100% - 44px);
  }


</style>