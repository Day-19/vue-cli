<!--  -->
<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AMenu",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang='less' scoped>
.a-menu {
  & * {
    list-style: none;
  }

}
</style>
