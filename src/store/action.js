import { getAppName } from '@/api/app.js'
const actions = {
  // updateAppName ({commit}) {
  //   getAppName().then(res=>{
  //       // console.log(res)
  //       // 异步提交一个muations方法
  //       const {code,info:{appName1}} = res  //结构赋值
  //       commit('SET_APP_NAME1',appName1 )
  //   }).catch(err =>{
  //     console.log(err)
  //   })
  // }

  //使用es7的async,await
  async updateAppName ({commit}) {
    try{
      const {code,info:{appName1} } = await getAppName()
      commit('SET_APP_NAME1',appName1)
    }catch (err){
      console.log(err)
    }
  }
}
export default  actions
