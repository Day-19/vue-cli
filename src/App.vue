<template>
  <div id="app">
     <!--
       <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
       命名路由
      <router-link :to="{ name:'parent' }">parent</router-link>
    </div>
    -->

    <transition-group :name="routerTransition">
      <!-- // 什么都不写加载default // -->
      <router-view key='default'/>
      <!-- // 后面的路由插槽根据name值加载相应组价 // -->
      <router-view key='email' name="email"/>
      <router-view key='tel' name="tel"/>
    </transition-group>


  </div>
</template>
<script>
export default {
  data () {
     return {
       routerTransition:''
     }
  },
  watch:{
    //为特定的页面设定特定的过渡动画
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>
<style lang="less">
html,body {
  height: 100%;
}
body{
  margin: 0;
}
.router-enter{
  opacity: 0;
}
.router-enter-active{
  transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
.router-leave{
  opacity: 1;
}
.router-leave-active{
  transition: opacity 1s ease;
}
.router-leave-to{
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
