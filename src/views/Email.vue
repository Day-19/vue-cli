<!--  -->
<template>
  <div class="email">
    我是Email页面
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted () {
    console.log(this.$bus)
  },

  methods: {
    handleClick () {
      this.$bus.$emit('on-click','hello')
    }
    
  }
}

</script>
<style lang='less' scoped>
.email{
  border:1px solid green;
}
</style>
