/**
 * 文件说明:此文件存放与业务关联性强的工具方法
 */
import Cookies from 'js-cookie'
export const setTitle = (title)=>{
  window.document.title = title || '未定义'
}
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
