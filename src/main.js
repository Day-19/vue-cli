import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Bus from '@/lib/bus/index.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import CountTo from '_c/CountTo'
// if (process.env.NODE_ENV !== 'production') require('./mock/index')
Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iView)
new Vue({
  router,
  store,
   render: h => {
     return h(App)
  //   return h(CountTo, {
  //     'class':[],
  //     //设置html属性
  //     attrs:{
  //       // id:''
  //     },
  //     style:{},
  //      props:{
  //       endVal:200
  //      },
  //      //dom属性
  //     //  domProps:{
  //     //    innerHTML:'123'
  //     //  },
  //      //组件内发出的一个事件,val接收事件发出的数据
  //      on:{
  //        'on-animation-end':(val)=>{
  //         console.log('animation end')
  //        }
  //      },
  //     //  基于组件的点击事件
  //      nativeOn:{
  //        'click':()=>{
  //          console.log('click!')
  //        }
  //      },
  //      //指令
  //      directives:[],
  //      scopedSlots:{},
  //      //自定义插槽
  //      slot:'',
  //      //v-for的key值
  //      key:'',
  //      //获取实例
  //      ref:''
  //     }
  //   )
 }
// render:h=>h('div',[
//   // h('span',[h('span')]),
//   h('span','111')
// ])
}).$mount('#app')
