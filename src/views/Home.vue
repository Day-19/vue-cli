<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/img/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2>{{food}}</h2>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent页面</button>
    <button @click="handleClick('replace')">替换到parent页面</button>
    <button @click="gotoArgu()">跳转到argu页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  props:{
    food:{
      type:String,
      default:'apple'
    }
  },
  // 路由进入时得钩子
  beforeRouteEnter (to, from, next) {

    // console.log(from)
    // console.log(to)
    //记得调用next方法

    next(vm =>{
      // console.log(vm)
    })
  },
  //路由离开时的钩子
  beforeRouteLeave (to, from, next) {
    // ...
    // console.log(2)
    // const leave = confirm('您确定要离开吗?')
    // if(leave){
    //   next()
    // }else{
    //   next(false)
    // }
    next()
  },




  methods: {
    handleClick: function(type) {
      if (type == "back") {
        this.$router.back()
      }else if(type=="push"){
        // this.$router.push('/parent')  //跳转到parent页面
        this.$router.push({
          name:'parent',
          query:{
            name:'Day'
          }
        })
      }else if(type=="replace"){
        this.$router.replace({
          name:'parent'
        })
      }
    },
    gotoArgu:function (params) {
      const name = 'dzl'
      this.$router.push({
          path:`/argu/${name}`
        })
    }
  }
};
</script>
