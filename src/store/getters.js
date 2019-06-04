const getters = {
  //相当于计算属性
  appNameWithVersion: (state) =>{
    return `${state.appName} ${state.appVersion}`
  },

}
export default getters
