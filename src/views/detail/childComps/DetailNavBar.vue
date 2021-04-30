<template>
  <div>
     <nav-bar>
         <div slot="left" class="back" @click="backclick">
             <img src="~assets/image/common/back.svg" alt="">
         </div>
       <div  slot="center" class="title" >
          <div v-for="(item,index) in titles" :key="index" class="item-title" :class="{active:index===currentindex}" @click="titleclick(index)">{{item}}</div>
       </div>
      </nav-bar>
     


  </div>
</template>

<script scoped>
import NavBar  from 'components/common/navbar/NavBar'
export default {
   name:'DetailNavBar',
   components:{
      NavBar



   },





  data () {
    return {
        titles:[
       '商品',
       '参数',
       '评论',
       '推荐'
        ],
        currentindex:0
    }
  },
 methods:{
  titleclick(index){

     this.currentindex = index;
     this.$emit('titleClick',index)
  },
  backclick(){
    
   this.$router.back()




  }





 } 
}
</script>

<style >
.title {
  display: flex;
  /* justify-content: space-between; */

}
.item-title {
  flex:1;
  font-size:15px




}
.active {
  color:var(--color-high-text)




}
.back img {

  margin-top:12px;


}


</style>
