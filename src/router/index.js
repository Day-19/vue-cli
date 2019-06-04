import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
import {setTitle,setToken,getToken} from '@/lib/util'

Vue.use(Router)

const router =  new Router({
  // mode:'hash',//默认值哈希模式
  // mode:'history', //部署正式环境时使用
  routes
})
//全局前置路由守卫(前置钩子)
const HAS_LOGINED = false //是否登录
router.beforeEach((to, from, next) => { //跳转之前的处理
  // ... to  即将要进入的目标 路由对象   from指的是上一个页面的路由对象

  to.meta && setTitle(to.meta.title)
  // if(to.name !== 'login'){
  //   if(HAS_LOGINED) next()
  //   else next({name:'login'})
  // }else{
  //   if(HAS_LOGINED) next({name:'home'})
  //   else next()
  // }
  const token = getToken()

  if(token){ //token是有效的
    store.dispatch('authorization',token).then(()=>{
      if(to.name==='login') next({name:'home'})
      else next()
    }).catch(err=>{
      setToken('')
      next({name:'login'})
    })
  }else{
    if(to.name ==='login') next()
    else next({name:'login'})
  }
})
// 全局后置钩子
router.afterEach( (to,from) => {


})


/**
 * 1.导航被触发
 * 2.在失活的组件(即将离开的页面组件)调用离开守卫  beforeRouteLeave
 * 3.调用全局的前置守卫 beforEach
 * 4.在重用的组件里调用 beforeRouteUpdate
 * 5.调用路由独享的守卫 beforeEnter
 * 6.解析异步路由组件
 * 7.在被激活的组件(即将进入的页面组件)里调用 beforeRouteEnter
 * 8.调用全局的解析守卫 beforeResolve (类似beforEach,区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。)
 * 9.导航被确认
 * 10.调用全局的后置守卫 afterEach
 * 11.触发DOM的更新渲染
 * 12.用创建好的实例调用beforeRouterEnter守卫里传给next()的回调函数
 */
export default router
