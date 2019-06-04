import vue from 'vue'
const mutations  =  {
  //State指向根State
   SET_APP_NAME(state,params){
    state.appName = params.appName
   },
   SET_APP_NAME1(state,params){
    state.appName1 = params
   },
   SET_APP_VERSION (state,params) {
    //  给根State设置一个新的值   第一个参数是根State参数,第二个参数是属性名,第三个值是值名
    //  vue.set(state,'appVersion','v2.0')  //如果state.js中没设置过这个属性,则可以解开
    state.appVersion  = params.appVersion
   },
   SET_STATE_VALUE(state,value){
     state.stateValue = value
   }
}
export default mutations
