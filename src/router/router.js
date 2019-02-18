import Home from '@/views/Home.vue'
export default [{
    path: '/',
    alias:'/home_page',//别名
    name: 'home',
    component: Home,
    props:route => ({
      //这里的是food路由是指地址栏 问号后输入的值 如?food=bannan
        food:route.query.food
    }),

    beforeEnter:(to,from,next)=>{
      // console.log(to)
      // console.log(from)
      // console.log(next)
      // if(from.name === 'about') alert('这是从about来的')
      // else alert('这不是从about来的')
      next() //记得使用next()函数
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=> import('@/views/Login.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //懒加载  --只有去访问了这个页面才会去加载,这就是这个写法的目的
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    props:{
      food:'banana'
    },

    meta:{
      //定义每个路由页面的标题栏
      title:'关于'
    }
  },
  {
    path: '/argu/:name',
    name:'argu',
    component: () => import('@/views/Argu.vue'),
    props:true
  },
  {
    path: '/parent',
    name:'parent',
    component: () => import('@/views/Parent.vue'),
    // 路由嵌套
    children: [{
      path: 'child',
      component: () => import('@/views/Child.vue')
    }]
  },
  {
    path:'/store',
    component: () => import('@/views/Store.vue')
  },
  //命名路由
  {
    path:'/named_view',
    components:{  //区别于上面的component,多了s
      default:()=>import('@/views/Child.vue'),
      email:()=>import('@/views/Email.vue'),
      tel:()=>import('@/views/Tel.vue')
    }
  },

  {
    //页面重定向,当网页打开/main时,自动重定向到home页面
    path:'/main',
    redirect:(to)=> '/'
  },
  {
    path:'*',
    component: ()=> import('@/views/Error_404.vue')
  }
]
