import  Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('../views/home/Home')
const Category = () => import ('../views/category/Category')
const Cate = () => import ('../views/cart/Cart')
const Profile = () => import ('../views/profile/Profile')
const Detail = () => import ('../views/detail/Detail') 

//   const originalPush = VueRouter.prototype.push

// VueRouter.prototype.push = function push(location) {
  
    
//   return originalPush.call(this, location).catch(err => err)
// }

// 1 安装插件
Vue.use(VueRouter)
// 创建路由对象
 const routes=[
    {
     path:'/',
     redirect:'/home',
     meta: {
         title: '首页'
     }
    },
    {
        path:'/home',
       component:Home,
       meta: {
        title: '首页'
    }
    },
    {
        path:'/category',
        component:Category,
        meta: {
            title: '分类'
        }
    },
    {
        path:'/cart',
        component:Cate,
        meta: {
            title: '购物车'
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta: {
            title: '我的'
        }
    },
    {
        path:'/detail/:iid',
        component:Detail,
        meta: {
            title: '详细'
        }
    }
    
 ]
     


 

const  router = new VueRouter({
    routes,
    mode:'history'
}
)

// router.beforeEach((to, from ,next) => {
//     document.title = to.meta.title
//     next()
// })
 
 // 3 导出router
 export default router