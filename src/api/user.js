import axios from './index'
export const getUserInfo = ({ userId }) =>{
  return axios.request({
    url:'/getUserInfo',
    method:'post',
    data:{
      userId
    }
  })
}
export const login =  ({userName,password}) =>{
  // console.log(userName,password)
  return axios.request({
    url:' /index/login',
    method:'post',
    data:{
      userName,
      password
    }
  })
}

//验证token是否还有效
export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
