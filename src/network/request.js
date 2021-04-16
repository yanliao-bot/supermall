   import axios from 'axios'


export function request(config) {

    // return new Promise((resolve,reject)=>{
        const instance = axios.create(
            {
             baseURL : 'http://123.207.32.32:8000',
              timeout:5000
            }
           )
            // 2. 拦截器的使用
            instance.interceptors.request.use(aaa=>{
            //  console.log(aaa);
             return aaa;
             
            },err=>{
                // console.log(err);
                
            });
            instance.interceptors.response.use(res=>{
                // console.log(res);
                return res.data; 
            },err=>{
               console.log(err);
               



            })





           
            //发送真正的网络请求
       return  instance(config)
    //    .then(
    //         res =>{
    //          resolve(res);
    //         }
    //        ).catch(err=>{
    //         reject(err);
    //        })
         


    
    //1.创建axios的实例
   
}

 //请求request
//  import {ruquest} from 'components'

//  ruquest({
//   url:'/home/multidata'},
//   function success(res) {
    
//     console.log(res);
    

//    },
//    function failture(err) {
    
//     console.log(err);
    

//    },


//  )