<!--  -->
<template>
  <div class="tel">
    我是Tel页面
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message:''
    };
  },

  components: {},

  computed: {},

  mounted () {
    this.$bus.$on('on-click',mes => {
      this.message = mes
    })
  },

  methods: {}
}

</script>
<style lang='less' scoped>
.tel {
  border:1px solid red;
}
</style>
