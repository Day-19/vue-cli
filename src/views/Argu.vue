<!--  -->
<template>
  <div >
    <span >
      {{name}}
    </span>
  </div>

</template>

<script>
export default {


  props:{
    name:{
      type:String,
      default:'Day'
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {},
  mounted () {

  },

  // 向路由二次传值的时候(也就是改变路由传值的触发)
  beforeRouteUpdate(){


  }
}

</script>
<style lang='scss' scoped>
</style>
