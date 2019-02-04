import Home from '@/views/Home.vue'
export default [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //懒加载  --只有去访问了这个页面才会去加载,这就是这个写法的目的
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/argu/:name',
    component: () => import('@/views/Argu.vue')
  }
]
