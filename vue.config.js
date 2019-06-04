const path = require('path')
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'
const resolve = (dir) =>{
  return path.join(__dirname,dir)
}
module.exports = {
  lintOnSave: false,
  baseUrl:BASE_URL,
  chainWebpack:config =>{
    //别名配置
    config.resolve.alias
    .set('@',resolve('src'))
    .set('_c',resolve('src/components'))
    //iview-loader的配置  
    config.module
      .rule('vue')
      .use('iview')
      .loader('iview-loader')
      .options({prefix: false})
  },
  //打包时不生成.map文件,减少打包体积
  productionSourceMap:false,
  //跨域
  devServer:{
    proxy:'http://localhost:3000'
  },

}
