//持久化储存
export default store =>{
  // 页面刷新时触发
  if(localStorage.state) {
    const state = localStorage.state
    store.replaceState(JSON.parse(state))
  }
  // console.log('俺是saveInLocal')

  //提交mutations时触发
  store.subscribe((mutation,state)=>{
    // console.log('提交mutations')
    //通过actions存入缓存
    localStorage.state = JSON.stringify(state)
  })
}
