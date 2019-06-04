<!--  -->
<template>
  <div class="split-pane-con">

    <!-- <split-pane :value="offset" @input="handleInput"></split-pane> -->
    <!-- 内部绑定一个变量名为value的值offset -->
    <!-- <split-pane v-model="offset"></split-pane> -->
    <split-pane :value.sync="offset" >
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/SplitPane'
export default {
  data () {
    return {
      //初始偏移量
      offset:0.5
    };
  },

  components: {
    SplitPane
  },

  computed: {},

  mounted () {},

  methods: {
    // handleInput(value){
    //   this.offset = value
    // }
  }
}

</script>
<style lang='less' scoped>
.split-pane-con{
  width: 400px;
  height: 200px;
  background: palegoldenrod;
}
</style>
