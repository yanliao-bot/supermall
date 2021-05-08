<template>
    <div class="bottom-bar">
        <div class="check-content">
       <check-button class="check-button" :is-checked="isSeclectALL" @click.native="checkAll"></check-button>
       <span>全选</span>
      </div>
      <div class="checkPrice">
       合计:{{totalprice}}
      </div>
      <div class="length">
      去计算:({{checkLength}})


      </div>


    </div>
</template>

<script>
 import CheckButton from 'components/content/checkButton/CheckButton'
export default {
  name:"CartButtonBar",
  components:{
     CheckButton
  },
 
  computed:{
    totalprice(){
      return  '¥ '+ this.$store.state.CartList.filter(item=>{
         return item.checked
      }).reduce((prevue,item)=>{
       return  prevue+ item.price * item.count
      },0).toFixed(2)
    },
     checkLength (){
      return   this.$store.state.CartList.filter(item=>{
         return item.checked
      }).length
    




     },
    isSeclectALL(){
                 
        return   this.$store.state.CartList.length!==0 && this.$store.state.CartList.every(item=> item.checked)
        
        

    },
 



  },
  methods:{
        
    checkAll(){
          
         if(this.isSeclectALL){
        this.$store.state.CartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.CartList.forEach(item => item.checked = true)
      }


    }




  }
  
}
</script>

<style scoped>
 .bottom-bar {
   height:40px;
   background-color:#eee;
  position: relative;
  line-height: 40px;
  display:flex;

 }
 .check-content {
   display: flex;
   align-items: center;
   margin-left:5px;
  
   width: 60px;
 }

.check-button{
 width: 20px;
height:20px;
 line-height: 20px;
 margin-right: 5px;
}
.checkPrice{
  flex:1



}
.length{
  width: 90px;
background-color:red ;


}



</style>