/*
 * @Author: Day.zongliang
 * @Date: 2019-02-03 17:32:52
 * @Last Modified by: Day.zongliang
 * @Last Modified time: 2019-03-22 20:05:31
 * @Email:15602297600@163.com
 */
/**
 * 用户相关的模块
 */
import {
  login,
  authorization
} from '@/api/user';
import {
  setToken
} from '@/lib/util.js'
const state = {
  userName: 'Day'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params.userName
  }
}
const actions = {
  // commit提交一个mutations  state当前模块的state   rootState指带根Store实例的State
  updateUserName({
    commit,
    state,
    rootState,
    dispatch
  }) {
    dispatch('xxx', '')
  },

  login({commit}, {
    userName,
    password
  }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then((res) => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(res.mse)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorization({commit},token){
    return new Promise ((resolve,reject)=>{
      authorization().then((res)=>{
        if(parseInt(res.code) ===401 ){
          reject(new Error('token is failure'))
        }else{
          //用户长时间访问页面时,注意要给token续命
          setToken(res.data.token)
          resolve()
        }
      }).catch((err)=>{
        reject(err)
      })
    })
  },
  logout(){
    setToken('')
  }
}
export default {
  /**
   * 使用命名空间,使空间更加密闭,不受外界干扰
   * 如果不开启命名空间的话,外界组件访问的时候无论是根数据还是模块数据都可以访问的到
   */

  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
