<!--  -->
<template>
  <div>
    <!-- <ul @click="handleClick">
      <li v-for="(item,index) in list" :key="`list_item_${index}`">{{item.name}}</li>
    </ul> -->
  <list :list="list" :render="renderFunc" :style="{color:'red'}"> </list>
  </div>
</template>

<script>
import List from '_c/List'
import CountTo from '_c/CountTo'
export default {
name:'',
  data () {
    return {
      list:[
        {name:100},
        {name:45}
      ]
    };
  },

  components: {
    List,

  },

  computed: {},

  mounted () {},

  methods: {
    handleClick(event){
      console.log(event)
    },
    //h指代渲染函数  name是从RenderDom传过来的name
    renderFunc(h,name){
      return (
        <CountTo on-click={this.handleClick} style={{color:'pink'}} endVal={name}>{name}</CountTo>
      )
    },
    handleClick(event){
      console.log(event)
    }
  }
}

</script>
<style lang='less' scoped>
</style>
