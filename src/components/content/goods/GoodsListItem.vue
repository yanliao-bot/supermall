<template>
  <div class="goods-item" @click = 'itemClick'>
   <img v-lazy="showage" alt="" @load="imageLoad">
    <div class="goods-info">
     <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>   
    </div>


  </div>
</template>

<script>
export default {
 name:'goodlistitem',
 computed:{
    showage(){
      return   this.goodsItem.image || this.goodsItem.show.img




    }
  



 },
 methods:{
   imageLoad(){
     if(this.$route.path.indexOf('./home')!==-1){ this.$bus.$emit('homeitemImageLoad')}
     else if(this.$route.path.indexOf('./detail')!==-1){
        this.$bus.$emit('detailitemImageLoad')
      // this.$bus.$emit('itemImageLoad')


     }
 

   },
   itemClick(){
    this.$router.push('/Detail/'+this.goodsItem.iid)
    
   }
  
 },
 props:{
   goodsItem:{
    type:Object,
    default(){
    return {}



    }



   }



 }
}
</script>

<style>
.goods-item {
    padding-bottom: 40px;
    position: relative;
    /* height:259.19px; */
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
     height:259.19px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }
</style>