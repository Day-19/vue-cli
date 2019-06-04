import Mock from 'mockjs'
// import { baseURL } from '../config/index'
import { getUserInfo } from './response/user'
const Random =  Mock.Random
Mock.mock(/\/getUserInfo/,'post',getUserInfo)

//延迟时间
Mock.setup({
  timeout:0
})
Random.extend({
  fruit(){
    const fruit = ('apple','lemmon','peach')
    return this.pick(fruit)
  }
})
export default Mock
