import Vue from 'vue'
// import { set } from 'vue/types/umd'
import  vuex from 'vuex'
import  getters from './getters'     

Vue.use(vuex)


const  store = new vuex.Store({
    //保存状态
   state:{
    CartList:[]
   },
   getters,

   mutations:{
       // 相当与methords 唯一能改state方式
     //方法  对state 进行方式运算 ,参数state
     // 承接的用 this.$store.commit 来获取方法
    //   vue中状态的更新唯一方式:提交Mutation
     // mutation 函数中也可以接受传入的参数,从第二参数开始,通过承接的this.$store.commit('mutation函数的名称',传入的参数)
        //  函数(state,传入的参数){}
        // 参数被称为mutation的载荷(PayLoad)
      // 响应式属性的修改
      //  1.(增加)
        // Vue set(要修改的对象,key,修改后的值)
        // key 分数组和对象 ,数组为数字number,对象为字符串string
        // 2.(删除)Vue delete (要修改的对象,key)

  //  把变量变成常量
  //  通过变量来同意管理
  //       属性 = 变量
  //     引入变量   ['变量']=[属性]
  //     对于引出的组件,直接 this.$store.commit(属性)来表示
    // vue要求我们mutation的方法必须是同步方法,同步时,devtool能帮助我们很好的捕捉mutation的快照,而如果异步则不是很好的追踪这个操作什么时候会被完成
  //   addCart(context,payLoad){
  //     // state.CartList.push(payLoad)
  //     //  let  oldPrice = null
  //     // for ( let item of state.CartList ){
  //     //    if(item.ild===payLoad.ild){ 
  //     //     oldPrice = item
  //     //    }
  //     // }
  //     return new Promise(function(resolve,reject){
  //     payLoad.checked = true
      
         
  //     let oldPrice = context.CartList.find(function(item){
     
        
  //      return  item.iid ===payLoad.iid
  
  //     }) 
      
      
  //    if(oldPrice){

  //      oldPrice.count += 1 

  //     resolve('当前的全部商品+1')

  //    } else {
  //     payLoad.count = 1
  //     context.CartList.push(payLoad)
       
  //     reject('添加了新的商品')
  //    }
    
  //   //  console.log(state.CartList);
   
  // })
  //  }
  

   },
   actions:{
    // 异步操作放在这里
    // 定义函数参数为context,意为上下文,也就是store
    // store.commit('函数名')
    // 例如 
    // updata(context){
    //   setTimeout(()=>{
    //     context.commit('mehtords中的函数名')
    //  函数参数第一个为context,第二个为payload ,对应组件要传递的参数


    //   })

    //  如果是异步函数,对应的组件就不能用commit,而应该用dispatch()
    //  this.$store.dispatch()
    // 如果想要优雅,可以使用promise函数.
    // updata(context){
    // // return  new promise(){
    // //   // setTimeout(()=>{ context.commit('mehtords中的函数名')
    // //   // //  函数参数第一个为context,第二个为payload ,对应组件要传递的参数
  
    //   //  reject()   回调函数
    // //   //   })
    // // }
    // }
    // }
    // 对应组件可以使用then()进行回调
    addCart(context,payLoad){
      // state.CartList.push(payLoad)
      //  let  oldPrice = null
      // for ( let item of state.CartList ){
      //    if(item.ild===payLoad.ild){ 
      //     oldPrice = item
      //    }
      // }
      return new Promise(function(resolve){
      payLoad.checked = true
      
         
      let oldPrice = context.state.CartList.find(function(item){
     
        
       return  item.iid ===payLoad.iid
  
      }) 
      
      
     if(oldPrice){

       oldPrice.count += 1 

      resolve('当前的全部商品+1')

     } else {
      payLoad.count = 1
      context.state.CartList.push(payLoad)
       
      resolve('添加了新的商品')
     }
    
    //  console.log(state.CartList);
   
  })
   }


   },
  //  getters:{
  //      // 单个组件的计算属性
  //   //也是用state当参数
  //   // 第一个参数为state,第二个参数为getters
  //  // 接受传递的函数参数,但必须使用闭包函数
   

  //  } ,
   modules:{
    //  再可a:以分模块
    a: {
    state:{},
    mutations:{},
    actions:{}
    },
    b:{
      state:{},
      mutations:{},
      actions:{}






    },
  //  c:moduleA

  //  模块如何使用：
  // state：
    // $store.state.a.name
  // mutations：   
      //  承接的组件中还是之前相同，this.$store.commit()来修改
      //getters:
      //  $store.state.getters.属性名
      // 属性函数还可以有第三个参数。为rootstate,根状态
      // actions：
      // 里面的参数context ，不再是store对象，
      // 只会调用自己模块中的mutation
      // 但context可以调用state,getters,rootstate,rootgetters,commit,dispatch


   }
  


})
  // store 要大写

export default store