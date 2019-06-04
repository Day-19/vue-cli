
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './action'
import user from './module/user'
//引入插件
import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules:{
    user
  },
  //使用插件
  plugins:[ saveInLocal ]
})
