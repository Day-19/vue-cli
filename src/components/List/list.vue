<!--  -->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="`item_${index}`">
        <span v-if="!render">{{item.name}}</span>
        <render-dom v-else :render-func="render" :name="item.name"></render-dom>
      </li>
    </ul>
  </div>
</template>

<script>
import RenderDom from '_c/RenderDom.js'
export default {
name:'List',
  data () {
    return {

    };
  },
  props:{
    list:{
      type:Array,
      default:()=>[]
    },
    render:{
      type:Function,
      default:()=>{}
    }
  },

  components: {
    RenderDom
  },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
</style>
