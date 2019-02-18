const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
const resolve = (dir) =>{
  return path.join(__dirname,dir)
}
module.exports = {
  lintOnSave: false,
  baseUrl:BASE_URL,
  chainWebpack:config =>{
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
  },
  //打包时不生成.map文件,减少打包体积
  productionSourceMap:false,
  //跨域
  devServer:{
    proxy:'http://localhost:4000'
  }


}
