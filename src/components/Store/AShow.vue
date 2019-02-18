<!--  -->
<template>
  <div>
    <p>AShow: {{content}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    content:{
      type:[String,Number],
      default:''
    }
  },
  components: {},

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
