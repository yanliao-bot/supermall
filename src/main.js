import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false,
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then( res =>{
//   console.log(res);
  
// })
 
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type:'pop',
//     page:1

//   }
// }).then( res =>{
//   console.log(res);
  
// })


// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000 

// axios.all(
//   [
//    axios(
//     {url:'/home/multidata'
//     }),axios(
//      {
//      url:'/home/data',
//      params:{
//       type:'sell',
//       page:5


//      }
//      }


//     )]
// ) .then(
//   // results=>{
//   //   console.log(results);
//   //    console.log(results[0]);
//   //    console.log(results[1]);
// // }
//   axios.spread((res1,res2) =>{
//     console.log(res1);
//     console.log(res2);
//   })

// )
// axios(
//    {
//    url:'http://123.207.32.32:8000/category'

//    }).then(res =>{
//         console.log(res);
        

//     }


// )
//创建对应的axios的实例
// const instance1 = axios.create(
//  {
//   baseURL : 'http://123.207.32.32:8000',
//   timeout:5000
//  })

//  instance1({
//    url:'/home/multidata'
//  }).then(res=>{
//   console.log(res);
//  })

